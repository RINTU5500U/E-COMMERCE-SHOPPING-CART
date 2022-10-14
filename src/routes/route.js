const express = require("express")
const router = express.Router()
const userController=require("../controllers/userController")
const productController=require("../controllers/productController")
const cartController=require("../controllers/cartController")

//test-api
router.get('/test-me', function(req, res) {
    res.send({ status: true, message: "test-api working fine" })
})

/**************************** User API *********************************/

router.post("/register",userController.registerUser)
router.post("/login",userController.userLogin)
router.get("/user/:userId/profile",userController.userDetails)
router.put("/user/:userId/profile",userController.userUpdate)

/******************* Product API ***************************************/

router.post("/product",productController.createProduct)
router.get("/products",productController.getProductDetails)
router.get("/products/:productId",productController.getProductById)
router.delete("/products/:productId",productController.deleteProductById)
router.put("/products/:productId",productController.updateProductDetails)


router.post("/users/:userId/cart",cartController.createCart)
router.all("/*", function (req, res) {
    res.status(400).send({ status: false, message: "invalid http request" });
  });

module.exports=router
