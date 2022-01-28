
export default function questaId(req, res) {
    const id = req.query.id
    if (req.method === "GET") {
        return res.status(200).json({
            id,
            nome: "Teste",
            lista: [1,2,3,4,5,6]
        })
    } else {
        return res.status(405).send()
    }
}