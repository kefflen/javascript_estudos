import { createServer } from 'http'
import { Readable } from 'stream'
import { randomUUID } from 'crypto'

function *dataProdution() {
  for (let index=0; index < 99; index++) {
    let data = {
      id: randomUUID(),
      data: index
    }

    yield data
  }
}
function handler(req, res) {


  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };
  
  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  const readable = new Readable({
    read() {

      for (let data of dataProdution()) {
        console.log(data)
        this.push(JSON.stringify(data))
      }

      this.push(null)
    }
  })

  readable
    .pipe(res)
}

createServer(handler)
  .listen(3000)
  .on('listening', () => console.log('Running at: http://localhost:3000'))