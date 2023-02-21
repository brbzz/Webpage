function valid(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    console.log(email + pass);
    console.log(email.slice(-4))
    if(email.length<=0){
        alert("Enter your email")
        return false
    } else if (email.slice(-4) !== '.com') {
        alert("please insert .com")
        return false
    } else if(pass.length<8){
        alert("Enter your password")
        return false
    }
    return true
}
function success(){
    if (valid()){
        alert("Welcome to MediCare!")
    }
}
// document.getElementById("btnsubmit").onclick = function(){
//     if(valid()){
//         alert("Welcome to MediCare!")
//     }   
// }
