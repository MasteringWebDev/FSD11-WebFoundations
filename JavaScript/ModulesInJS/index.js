import signup from './user.js'
import addToCart from './cart.js'

// import { confirmOrder, cancelOrder } from './order.js'
// import { getFilteredProducts, getProductDetails } from './product.js'

// import userTest from './user.js'
// import orderTest from './order.js'

import { confirmOrder as conOrder, cancelOrder as canOrder, test as testOrder } from './order.js'

// signup()
// signup()
// signup()
// signup()

// addToCart()
// addToCart()

// confirmOrder()
// cancelOrder()

// getFilteredProducts()
// getProductDetails()

// userTest()
// orderTest()

// conOrder()
// canOrder()

document.getElementById('signup-btn').addEventListener('click', signup)
document.getElementById('addtocart-btn').addEventListener('click', addToCart)
document.getElementById('test-order').addEventListener('click', testOrder)