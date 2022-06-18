curl -d '{"limit":10, "itens":[{
    "quantity": 10,
    "pieceName": "Freios",
    "price": 10,
    "value": 100
}]}' -H "Content-Type: application/json" -X POST http://localhost:8080/pec