function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  

    if (username === 'usuario' && password === 'senha') {
      window.location.href = 'dashboard.html';
    } else {
        window.location.href = 'index.html';
    }
}
  
function logout() {
    window.location.href = 'index.html';
}
  