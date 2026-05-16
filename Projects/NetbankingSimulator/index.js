let showDetails = true
let accountBalance = 5329

updateBalance()

function showHideDetails() {
  showDetails = !showDetails

  if(showDetails) {
    document.getElementById('account-number').innerText = 'Account Number: 00102020387929'
    document.getElementById('account-balance').innerText = '$2782.00'
    document.getElementById('eye-icon').src='assets/hide.png'
  } else {
    document.getElementById('account-number').innerText = 'Account Number: *****7929'
    document.getElementById('account-balance').innerText = '$****'
    document.getElementById('eye-icon').src='assets/show.png'
  }
}

function deposit() {
  const depositType = document.getElementById('deposit-type').value
  const depositAmount = Number(document.getElementById('deposit-amount').value)

  accountBalance = accountBalance + depositAmount
  updateBalance()

  document.getElementById('deposit-form').reset()
  document.getElementById('deposit-alert').style.display = 'block'

  addDepositToHistory(depositType, depositAmount)
}

function transfer() {
  const beneficiaryAccountNumber = document.getElementById('beneficiary-account-number').value
  const beneficiaryName = document.getElementById('beneficiary-name').value
  const transferType = document.getElementById('transfer-type').value
  const transferAmount = Number(document.getElementById('transfer-amount').value)
  const purpose = document.getElementById('purpose').value

  accountBalance = accountBalance - transferAmount
  updateBalance()

  document.getElementById('transfer-form').reset()
  document.getElementById('transfer-alert').style.display = 'block'

  addTranferToHistory(transferType, beneficiaryName, transferAmount, beneficiaryAccountNumber, purpose)
}

function updateBalance() {
  document.getElementById('account-balance').innerText = `$${accountBalance.toFixed(2)}`
}

function addDepositToHistory(depositType, depositAmount) {
  const parent = document.getElementById('transaction-history')

  const recordLi = document.createElement('li')
  recordLi.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start')

  const leftSectionDiv = document.createElement('div')
  leftSectionDiv.classList.add('ms-2', 'me-auto')

  const div1 = document.createElement('div')
  div1.classList.add('fs-5', 'fw-bold')
  div1.innerText = `${depositType} Deposit`

  const div2 = document.createElement('div')
  div2.classList.add('text-muted')
  div2.innerText = `Method: ${depositType}`

  const div3 = document.createElement('div')
  div3.classList.add('text-muted')
  div3.innerText = `Time: ${new Date().toLocaleString()}`

  leftSectionDiv.append(div1, div2, div3)

  const rightSectionDiv = document.createElement('div')
  rightSectionDiv.classList.add('text-end')

  const txnAmountDiv = document.createElement('div')
  txnAmountDiv.classList.add('fs-5', 'fw-bold', 'text-success')
  txnAmountDiv.innerText = `+$${depositAmount.toFixed(2)}`

  const blnAmountDiv = document.createElement('div')
  blnAmountDiv.classList.add('text-muted')
  blnAmountDiv.innerText = `Balance: $${accountBalance.toFixed(2)}`

  rightSectionDiv.append(txnAmountDiv, blnAmountDiv)

  recordLi.append(leftSectionDiv, rightSectionDiv)

  // Logic to keep the new node on the top of the history
  const existingHistory = parent.innerHTML
  parent.innerHTML = ''
  parent.append(recordLi)
  parent.innerHTML += existingHistory
}

function addTranferToHistory(transferType, beneficiaryName, transferAmount, beneficiaryAccountNumber, purpose) {
  const parent = document.getElementById('transaction-history')

  const recordLi = document.createElement('li')
  recordLi.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start')

  const leftSectionDiv = document.createElement('div')
  leftSectionDiv.classList.add('ms-2', 'me-auto')

  const div1 = document.createElement('div')
  div1.classList.add('fs-5', 'fw-bold')
  div1.innerText = `${transferType} Transfer`

  const div2 = document.createElement('div')
  div2.classList.add('text-muted')
  const last2Digits = Number(beneficiaryAccountNumber) % 100
  div2.innerText = `To: ${beneficiaryName} (Account: XXX${last2Digits}) | Purpose: ${purpose}`

  const div3 = document.createElement('div')
  div3.classList.add('text-muted')
  div3.innerText = `Time: ${new Date().toLocaleString()}`

  leftSectionDiv.append(div1, div2, div3)

  const rightSectionDiv = document.createElement('div')
  rightSectionDiv.classList.add('text-end')

  const txnAmountDiv = document.createElement('div')
  txnAmountDiv.classList.add('fs-5', 'fw-bold', 'text-danger')
  txnAmountDiv.innerText = `-$${transferAmount.toFixed(2)}`

  const blnAmountDiv = document.createElement('div')
  blnAmountDiv.classList.add('text-muted')
  blnAmountDiv.innerText = `Balance: $${accountBalance.toFixed(2)}`

  rightSectionDiv.append(txnAmountDiv, blnAmountDiv)

  recordLi.append(leftSectionDiv, rightSectionDiv)

  // Logic to keep the new node on the top of the history
  const existingHistory = parent.innerHTML
  parent.innerHTML = ''
  parent.append(recordLi)
  parent.innerHTML += existingHistory
}