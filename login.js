function login() {
let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;


auth.signInWithEmailAndPassword(email, pass)
.then(() => {
window.location.href = "admin.html";
})
.catch(() => {
document.getElementById("loginMsg").innerText = "Login Failed!";
});
}
