const Router=require('express')
const userController=require('../controllers/userController.cjs')
const bookController=require('../controllers/bookcontroller.cjs')
const authentication = require('../middleware/auth.cjs')
const router=Router.Router()



router.post('/users/register', userController.Register)

router.post('/users/login' , userController.login)

router.post('/books/addnewbook',authentication,bookController.addnewbook)//admin api 
router.get('/books/findbookbycategory/:category',bookController.findBookByCategory)//user api
router.get('/books/findbookbyname/:name',authentication,bookController.searchbyname)//user api
router.get('/books/findbookbyauthor/:author',authentication,bookController.searchbyauthor)//user api
router.get('/books/findbookbyId/:id',bookController.searchbyid)//user api

router.get('/books/getall',bookController.getall)//user api 
router.put('/books/update',authentication,bookController.updatedate) //admin api
router.delete('/books/delete',authentication,bookController.deletebook)//admin api

module.exports = router