let user = localStorage.getItem('auth');

if(!user){
    window.location.href = "login.html";
}