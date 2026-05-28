var count = 0

function addToCart() {
  count++
  console.log('Add to cart. Current no. of items: ', count)
}

function removeFromCart() {
  console.log('Remove from cart')
}

export default addToCart