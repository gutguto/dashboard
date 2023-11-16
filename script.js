function login() {
    var username = document.getElementById('usuario').value;
    var password = document.getElementById('senha').value;
  

    if (username === 'guto' && password === '123') {
      window.location.href = 'dashboard.html';
    } else {
        window.location.href = 'index.html';
    }
}
  
function logout() {
    window.location.href = 'index.html';
}
