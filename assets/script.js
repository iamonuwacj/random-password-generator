var password=document.getElementById("password");
var passwordLen = document.getElementById("passLen")
console.log(passwordLen)

function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = parseInt(passwordLen.value);
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;
    passwordLen.value = ""
 }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy"); 
}