let letters = ["a","z","e","r","t","y","u","i","o","p","^","$","q","s","d","f","g","h","j","k","l","m","ù","*","!",":",";","n","b","v","c","x","w","<","<","W","X","C","V","B","N",".","/","§","%","M","L","K","J","H","G","F","D","S","Q","A","Z","E","R","T","Y","U","I","O","P","¨","£","&","é","(","-","è","_","ç","à",")","=","@","^",0,1,2,3,4,5,6,7,8,9]


let password1El = document.getElementById("result1")
let password2El = document.getElementById("result2")
let password3El = document.getElementById("result3")
let password4El = document.getElementById("result4")

let buffer1 = ""
let buffer2 = ""
let buffer3 = ""
let buffer4 = ""

function generatePassword() {
    password1El.textContent = ""
    password2El.textContent = ""
    password3El.textContent = ""
    password4El.textContent = ""
    let i = password1El.textContent.length

    for ( i = 0 ; i < 21; i++) {
      if ( password1El.textContent.length < 20) {
        let sign = Math.floor(Math.random() * letters.length)
        password1El.textContent += letters[sign]

        sign = Math.floor(Math.random() * letters.length)
        password2El.textContent += letters[sign]

        sign = Math.floor(Math.random() * letters.length)
        password3El.textContent += letters[sign]

        sign = Math.floor(Math.random() * letters.length)
        password4El.textContent += letters[sign]
      } else  {
          password1El.textContent = password1El.textContent
          password2El.textContent = password2El.textContent
          password3El.textContent = password3El.textContent
          password4El.textContent = password4El.textContent
      }

     }
    buffer1 = password1El.textContent
    buffer2 = password2El.textContent
    buffer3 = password3El.textContent
    buffer4 = password4El.textContent
    valueChange()
}


function valueChange() {
    let passLength = document.getElementById("number-input").value
    // console.log(passLength)
    let maxPass1 = buffer1
    let maxPass2 = buffer2
    let maxPass3 = buffer3
    let maxPass4 = buffer4


    if( passLength <= password1El.textContent.length && passLength > 3 && passLength < 21) {
      password1El.textContent = password1El.textContent.substring(0, passLength)
      password2El.textContent = password2El.textContent.substring(0, passLength)
      password3El.textContent = password3El.textContent.substring(0, passLength)
      password4El.textContent = password4El.textContent.substring(0, passLength)
    } else if ( passLength > password1El.textContent.length && passLength > 3 && passLength < 21) {
      password1El.textContent = maxPass1.substring(0, passLength)
      password2El.textContent = maxPass2.substring(0, passLength)
      password3El.textContent = maxPass3.substring(0, passLength)
      password4El.textContent = maxPass4.substring(0, passLength)
    } else {
      password1El.textContent = password1El.textContent
      password2El.textContent = password2El.textContent
      password3El.textContent = password3El.textContent
      password4El.textContent = password4El.textContent
    }
}
