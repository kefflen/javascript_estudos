const Router = require('express').Router
const teaController = require('../controller/tea')
const router = Router()


router.get('', teaController.getAll)
router.post('', teaController.uploadImg, teaController.create)
router.delete('/:name', teaController.remove)
router.get('/:name', teaController.get)
router.post('/:name/comment', teaController.newComment)
router.get('/:name/comment', teaController.getTeaComments)

module.exports = router
