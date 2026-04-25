/*
  # Rules:
    1. Atleast 8 characters
    2. Atleast one lowercase character
    3. Atleast one uppercase character
    4. Atleast one number
    5. Atleast one special character (!, $)
    6. Should not contain the substring 'test', 'password'

  # Category:
    - Strong (6/6)
    - Moderate (4-5/6)
    - Weak (0-3/6)
*/

function checkPasswordStrength(password) {
  // Check: Password is null/ Empty string
  if(!password) {
    document.getElementById('invalid-password-alert').style.display = 'block'
    return
  }

  let score = 0

  // Rule 1: Atleast 8 characters
  if(password.length >= 8) {
    document.getElementById('rule-1-result').innerHTML = 
    '<img src="assets/correct.png" width="50px">'
    score++
  } else {
    document.getElementById('rule-1-result').innerHTML = 
    '<img src="assets/incorrect.png" width="50px">'
  }

  // Rule 2: Atleast one lowercase character
  // Rule 3: Atleast one uppercase character
  // Rule 4: Atleast one number
  // Rule 5: Atleast one special character (!, $)
  let hasLowercaseChar = false
  let hasUppercaseChar = false
  let hasNumber = false
  let hasSpecialChar = false

  // Iterate through each character of the password string
  for(let i=0; i < password.length; i++) {
    let char = password[i]
    if(char >= 'a' && char <= 'z') {
      hasLowercaseChar = true
    }
    if(char >= 'A' && char <= 'Z') {
      hasUppercaseChar = true
    }
    if(char >= '0' && char <= '9') {
      hasNumber = true
    }
    if(char == '!' || char == '$') {
      hasSpecialChar = true
    }
  }

  if(hasLowercaseChar) {
    document.getElementById('rule-2-result').innerHTML = 
    '<img src="assets/correct.png" width="50px">'
    score++
  } else {
    document.getElementById('rule-2-result').innerHTML = 
    '<img src="assets/incorrect.png" width="50px">'
  }

  if(hasUppercaseChar) {
    document.getElementById('rule-3-result').innerHTML = 
    '<img src="assets/correct.png" width="50px">'
    score++
  } else {
    document.getElementById('rule-3-result').innerHTML = 
    '<img src="assets/incorrect.png" width="50px">'
  }

  if(hasNumber) {
    document.getElementById('rule-4-result').innerHTML = 
    '<img src="assets/correct.png" width="50px">'
    score++
  } else {
    document.getElementById('rule-4-result').innerHTML = 
    '<img src="assets/incorrect.png" width="50px">'
  }

  if(hasSpecialChar) {
    document.getElementById('rule-5-result').innerHTML = 
    '<img src="assets/correct.png" width="50px">'
    score++
  } else {
    document.getElementById('rule-5-result').innerHTML = 
    '<img src="assets/incorrect.png" width="50px">'
  }

  // Rule 6: Should not contain the substring 'test', 'password'
  if(!password.includes('test') && !password.includes('password')) {
    document.getElementById('rule-6-result').innerHTML = 
    '<img src="assets/correct.png" width="50px">'
    score++
  } else {
    document.getElementById('rule-6-result').innerHTML = 
    '<img src="assets/incorrect.png" width="50px">'
  }

  // Display the result based on final score
  if(score == 6) {
    document.getElementById('score-result').innerHTML = 
    '<span class="badge text-bg-success">STRONG</span><img src="assets/strong.gif" width="100">'
  } else if (score > 3 && score < 6) {
    document.getElementById('score-result').innerHTML = 
    '<span class="badge text-bg-warning">MODERATE</span><img src="assets/moderate.gif" width="100">'
  } else {
    document.getElementById('score-result').innerHTML = 
    '<span class="badge text-bg-danger">WEAK</span><img src="assets/weak.gif" width="100">'
  }
}

// Collect user password
const password = prompt('Enter your password')
checkPasswordStrength(password)