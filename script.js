function isPalindrome() {
    var palindromemsg = document.getElementById("palindrome_msg")
    var value = document.getElementById('value').value
    var valuereverse = value.split('')
    var reverse = valuereverse.reverse()
    var join = reverse.join("")
    if (join == value) {
        palindromemsg.innerHTML = "Yes It's a palindrome!"
        palindromemsg.style.backgroundColor = 'green'
        palindromemsg.style.color = 'white'
        palindromemsg.style.height = '50px'
        palindromemsg.style.borderRadius = '5px'
        palindromemsg.style.display = 'flex'
        palindromemsg.style.alignItems = 'center'
        palindromemsg.style.justifyContent = 'center'
        palindromemsg.style.fontSize = '30px'
        palindromemsg.style.padding = '30px'
        palindromemsg.style.marginTop = '20px'

    }
    else {
        palindromemsg.innerHTML = "Nope.It's NOT a palindrome"
        palindromemsg.style.backgroundColor = 'red'
        palindromemsg.style.color = 'white'
        palindromemsg.style.height = '50px'
        palindromemsg.style.borderRadius = '5px'
        palindromemsg.style.display = 'flex'
        palindromemsg.style.alignItems = 'center'
        palindromemsg.style.justifyContent = 'center'
        palindromemsg.style.fontSize = '20px'
        palindromemsg.style.padding = '30px'
        palindromemsg.style.marginTop = '20px'
    }
}