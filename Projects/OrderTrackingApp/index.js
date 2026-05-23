let orderNo = 0

const orderBeingPrepared = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-being-prepared.gif'
    document.getElementById(`order-status-text-${orderNo}`).innerText = 'Order is being prepared'
    resolve(orderNo)
  }, 2000)
})

const orderPrepared = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-prepared.gif'
    document.getElementById(`order-status-text-${orderNo}`).innerText = 'Order prepared'
    resolve(orderNo)
  }, 10000)
})

const orderHandedOver = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-handed-over.gif'
    document.getElementById(`order-status-text-${orderNo}`).innerText = 'Order handed over to the delivery person'
    resolve(orderNo)
  }, 5000)
})

const orderOnTheWay = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-on-the-way.gif'
    document.getElementById(`order-status-text-${orderNo}`).innerText = 'Order is on the way'
    resolve(orderNo)
  }, 3000)
})

const orderReachedDestination = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-reached-destination.gif'
    document.getElementById(`order-status-text-${orderNo}`).innerText = `Order reached it's destination`
    resolve(orderNo)
  }, 8000)
})

const orderDelivered = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-delivered.gif'
    document.getElementById(`order-status-text-${orderNo}`).innerText = 'Order has been delivered'
    resolve(orderNo)
  }, 4000)
})

const placeOrder = () => {
  orderNo++

  createOrderCard()

  document.getElementById(`order-status-img-${orderNo}`).src = 'assets/order-confirmed.gif'
  document.getElementById(`order-status-text-${orderNo}`).innerText = 'Order confirmed'

  orderBeingPrepared(orderNo)
    .then((orderNo) => orderPrepared(orderNo))
    .then((orderNo) => orderHandedOver(orderNo))
    .then((orderNo) => orderOnTheWay(orderNo))
    .then((orderNo) => orderReachedDestination(orderNo))
    .then((orderNo) => orderDelivered(orderNo))
    .then((orderNo) => console.log(`Order ID 2026050000${orderNo} processed!`))
    .catch(() => console.log('Something went wrong'))
}

function createOrderCard() {
  const orderList = document.getElementById('order-list')

  const colDiv = document.createElement('div')
  colDiv.classList.add('col', 'mt-4')

  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card', 'text-center')
  cardDiv.style.width = '25rem'

  const cardHeaderDiv = document.createElement('div')
  cardHeaderDiv.classList.add('card-header')
  cardHeaderDiv.innerText = `Order ID: 2026050000${orderNo}`

  const cardBodyDiv = document.createElement('div')
  cardBodyDiv.classList.add('card-body')

  const cardFooterDiv = document.createElement('div')
  cardFooterDiv.classList.add('card-footer', 'text-body-secondary')
  cardFooterDiv.innerText = new Date().toLocaleString()

  
  // Collect form details
  const item1 = document.getElementById('item1').value || 'Pizza'
  const quantity1 = document.getElementById('quantity1').value || 2
  const price1 = Number(document.getElementById('price1').value) || 35

  const item2 = document.getElementById('item2').value || 'Burger'
  const quantity2 = document.getElementById('quantity2').value || 4
  const price2 = Number(document.getElementById('price2').value) || 24

  const item3 = document.getElementById('item3').value || 'Drinks'
  const quantity3 = document.getElementById('quantity3').value || 3
  const price3 = Number(document.getElementById('price3').value) || 32

  const total = price1 + price2 + price3

  document.getElementById('create-order-form').reset()

  const itemsListUl = document.createElement('ul')
  itemsListUl.classList.add('list-group', 'list-group-flush')
  itemsListUl.innerHTML = 
  `
    <li class="list-group-item d-flex justify-content-between">
      <span>${item1} (${quantity1})</span><span>$${price1.toFixed(2)}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between">
      <span>${item2} (${quantity2})</span><span>$${price2.toFixed(2)}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between">
      <span>${item3} (${quantity3})</span><span>$${price3.toFixed(2)}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between fw-bold">
      <span>Total</span><span>$${total.toFixed(2)}</span>
    </li>
  `

  const hr = document.createElement('hr')

  const orderStatusDiv = document.createElement('div')

  const orderStatusImg = document.createElement('img')
  orderStatusImg.width = 80
  orderStatusImg.id = `order-status-img-${orderNo}`
  const orderStatusText = document.createElement('p')
  orderStatusText.classList.add('fs-5')
  orderStatusText.id = `order-status-text-${orderNo}`

  orderStatusDiv.append(orderStatusImg, orderStatusText)

  const cancelOrderBtn = document.createElement('a')
  cancelOrderBtn.classList.add('btn', 'btn-danger', 'btn-sm')
  cancelOrderBtn.innerText = 'Cancel'
  cancelOrderBtn.addEventListener('click', () => {
    colDiv.remove()
  })

  cardBodyDiv.append(itemsListUl, hr, orderStatusDiv, cancelOrderBtn)

  cardDiv.append(cardHeaderDiv, cardBodyDiv, cardFooterDiv)

  colDiv.append(cardDiv)

  orderList.append(colDiv)
}

/*
<div class="col">
  <div class="card text-center" style="width: 25rem;">
    <div class="card-header">Order ID: 20260500001</div>
    <div class="card-body">
      <p class="lead"> Summary</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between">
          <span>Item 1 (2)</span><span>$20.00</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Item 2 (1)</span><span>$10.00</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Item 3 (3)</span><span>$40.00</span>
        </li>
        <li class="list-group-item d-flex justify-content-between fw-bold">
          <span>Total</span><span>$70.00</span>
        </li>
      </ul>
      <hr>
      <div>
        <img src="assets/order-confirmed.gif" width="80" id="order-status-img">
        <p class="fs-5" id="order-status-text">Order confirmed</p>
      </div>
      <a href="#" class="btn btn-danger btn-sm">Cancel</a>
    </div>
    <div class="card-footer text-body-secondary">5/23/2026, 10:18:20 PM</div>
  </div>
</div>
*/

/*
  - Project: Order tracking app
    - Instantly: Order confirmed ✅
    - After 2 seconds: Order is being prepared 🍜
    - After 10 seconds: Order prepared 🎉
    - After 5 seconds: Order handed over to the delivery person 📦
    - After 3 seconds: Order is on the way 🚴
    - After 8 seconds: Order reached it's destination 📍
    - After 4 seconds: Order has been delivered 😋

    Total order processing time: 2+10+5+3+8+4 = 32 seconds
*/