

function checkPalindrome(x){
    return x.toLowerCase == x.toLowerCase().split('').reverse().join('')
}

let x = "racecar"
console.log(checkPalindrome(x));