var billAmountInput = document.querySelector('#bill-amount')
var userPaidInput = document.querySelector('#cash-paid')
var giveResult = document.querySelector('#give-result')
var showNext = document.querySelector('#show-next')

function giveChange() {
  if (!userPaidInput.value) {
    alert("Cash Paid field can't be left empty!")
  } 
  else if (!billAmountInput.value) {
    alert("Bill Amount Field can't be empty!")
  }
  else if (parseInt(billAmountInput.value) <= 0) {
    alert("Bill Amount can't be less than or equal to zero!")
  }
  else if (parseInt(userPaidInput.value) === 0) {
    alert("Cash Paid can't be 0!")
  } 
  else if (parseInt(userPaidInput.value) < 0) {
    alert("Cash Paid can't be negative!")
  } 
  else {
    var billAmount = parseInt(billAmountInput.value)
    var userPaid = parseInt(userPaidInput.value)

    document.querySelector('#bill-amount-details').textContent =
      'Bill Amount: ₹' + billAmount
    document.querySelector('#cash-paid-details').textContent =
      'Customer Paid: ₹' + userPaid

    if (billAmount > userPaid) {
      document.querySelector('#return-cash').textContent =
        'You have to take ₹' +
        (billAmountInput.value - userPaidInput.value) +
        ' from the customer 👀'
      document.querySelector('#result').classList.add('hidden')
      return
    } else if (billAmount === userPaid) {
      document.querySelector('#return-cash').textContent =
        'The account is clear 😇'
      return
    } else {
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#return-cash').textContent =
        'Cash to be returned: ₹' + (userPaid - billAmount)

      let cashCount = 0
      let giveBackAmount = userPaid - billAmount

      while (giveBackAmount >= 2000) {
        document.querySelector('#rs2000').classList.remove('cc')
        giveBackAmount -= 2000
        cashCount++
      }
      document.querySelector('#result-2000').textContent = cashCount
      console.log(cashCount)

      cashCount = 0
      while (giveBackAmount >= 500) {
        document.querySelector('#rs500').classList.remove('cc')
        giveBackAmount -= 500
        cashCount++
      }
      
      document.querySelector('#result-500').textContent = cashCount

      cashCount = 0
      while (giveBackAmount >= 200) {
        document.querySelector('#rs200').classList.remove('cc')
        giveBackAmount -= 200
        cashCount++
      }
      document.querySelector('#result-200').textContent = cashCount

      cashCount = 0
      while (giveBackAmount >= 100) {
        document.querySelector('#rs100').classList.remove('cc')
        giveBackAmount -= 100
        cashCount++
      }
      document.querySelector('#result-100').textContent = cashCount

      cashCount = 0
      while (giveBackAmount >= 50) {
        document.querySelector('#rs50').classList.remove('cc')
        giveBackAmount -= 50
        cashCount++
      }
      document.querySelector('#result-50').textContent = cashCount

      cashCount = 0
      while (giveBackAmount >= 20) {
        document.querySelector('#rs20').classList.remove('cc')
        giveBackAmount -= 20
        cashCount++
      }
      document.querySelector('#result-20').textContent = cashCount

      cashCount = 0
      while (giveBackAmount >= 10) {
        document.querySelector('#rs10').classList.remove('cc')
        giveBackAmount -= 10
        cashCount++
      }
      document.querySelector('#result-10').textContent = cashCount

      cashCount = 0
      while (giveBackAmount >= 5) {
        document.querySelector('#rs5').classList.remove('cc')
        giveBackAmount -= 5
        cashCount++
      }
      document.querySelector('#result-5').textContent = cashCount

      cashCount = 0
      while (giveBackAmount >= 2) {
        document.querySelector('#rs2').classList.remove('cc')
        giveBackAmount -= 2
        cashCount++
      }
      document.querySelector('#result-2').textContent = cashCount

      cashCount = 0
      while (giveBackAmount >= 1) {
        
        giveBackAmount -= 1
        cashCount++
        {
          document.querySelector('#rs1').classList.remove('cc')
        }
      document.querySelector('#result-1').textContent = cashCount
    }
  }
}
}

function showNextField() {
  if (parseInt(billAmountInput.value) === 0) {
    // display bill amount can't be zero
    alert("Bill Amount can't be 0!")
  } else if (parseInt(billAmountInput.value) < 0) {
    // display bill amount can't be negative
    alert("Bill Amount can't be negative!")
  } else if (!billAmountInput.value) {
    alert("Bill Amount can't be left empty!")
  } else {
    showNext.classList.add('hidden')
    document.querySelector('#cash-paid-entry').classList.remove('hidden')
    giveResult.classList.remove('hidden')
  }
}

// window.onload = function () {
//   document.querySelector('#money-song').play()
// }


giveResult.addEventListener('click', giveChange)
showNext.addEventListener('click', showNextField)
