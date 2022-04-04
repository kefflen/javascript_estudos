import { v4 as uuid } from 'uuid'
import Router from 'express'
import { ensureAuthenticated } from './middleware'

const router = Router()
interface ProductDTO {
  name: string,
  price: string,
  id: string
  description: string
}
const products: ProductDTO[] = []

router.get('/products/findbyname', (req, res) => {
  let { name } = req.query
  let product = products.filter(prod => prod.name == name)
  
  return res.json(product)
})

router.get('/products/:id', (req, res) => {
  let { id } = req.params
  let product = products.find(prod => prod.id == id)

  if (!product) return res.status(404).json({ error: "Product id not found"})

  return res.json(product)
})

router.post('/products', ensureAuthenticated, (req, res) => {
  let { name, price, description } = req.body

  let productAlreadyExists = products.find(prod => prod.name == name)
  if (productAlreadyExists) return res.status(400).json({ error: "Product already exists"})

  let newProduct: ProductDTO = {
    name, price, description, id: uuid()
  }
  products.push(newProduct)

  return res.json(newProduct)
})

router.get('/products', (req, res) => {
  return res.json(products)
})

export  default router