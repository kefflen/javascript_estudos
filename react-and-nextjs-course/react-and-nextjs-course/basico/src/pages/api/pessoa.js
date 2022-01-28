let users = []

export default function pessoa(req, res) {
    if (req.method === "POST") {
        post(req, res)
    } else if (req.method === "GET") {
        get(req, res)
    } else {
        res.status(405).send()
    }
}

function get(req, res) {
    res.status(200).send(users)
}

function post(req, res) {
    let userObj = JSON.parse(req.body)
    users.push(userObj)
    res.status(200).send()
}