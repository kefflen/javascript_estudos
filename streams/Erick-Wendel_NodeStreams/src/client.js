import axios from "axios";
import { readFileSync } from "fs";
import { Transform, Stream, Writable } from 'stream'

const url = 'http://localhost:3000'

async function consume() {
  const response = await axios.get(url, {
    responseType: 'stream'
  })



  return response.data
}


async function main() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log('Running axios')
  const stream = await consume()

  stream
    .pipe(
      new Transform({
        transform(chunk, encode, callback) {
          const item = JSON.parse(chunk)
          console.log(item)

          item.arrivedAt= new Date()
          callback(null, JSON.stringify(item))
        }
      })
    )
    .pipe(
      new Writable({
        write(chunk, encode, cb) {
          //Pode mandar para outro lugar

          console.log(chunk.toString())
          cb()
        }
      })
    )
}

main()






