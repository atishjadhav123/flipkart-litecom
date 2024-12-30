const { getProducts, addProduct, updateProducts, deleteProducts, fetchAdminOrders, adminUpdateOrderStatus } = require("../controllers/admin.controller")
const { adminProtected } = require("../middlewares/protected.middleware")

const router = require("express").Router()

router
    .get("/product", getProducts)
    .post("/product/add", adminProtected, addProduct)
    .put("/product/update/:productId", updateProducts)
    .delete("/product/delete/:productId", deleteProducts)
    .get("/orders", fetchAdminOrders)
    .put("/order/update/:oid", adminUpdateOrderStatus)

module.exports = router