function valid(){
    let full_name = document.getElementById("full_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_pass = document.getElementById("confirm_pass").value;
    if(full_name.length <= 0){
        alert("Enter your full name!")
        return false
    } else if(email.slice(-4) !== '.com'){
        alert("Please insert a proper email!")
        return false
    } else if(password.length <= 0){
        alert("Enter your password!")
        return false
    } else if(password.length < 8){
        alert("Password must be at least 8 characters!")
        return false
    } else if(confirm_pass !== password){
        alert("Make sure your confirm password is the same as your password!")
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

// form.addEventListener('btnsubmit',(e) =>{
//     e.preventDefault();
//     if(validate()){
//         alert("Login Successfull")
//     }
// })