// DATA USER (DISIMPAN DI LOCALSTORAGE)
if (!localStorage.getItem("users")) {
    const users = [
        { username: "admin", password: "12345" },
        { username: "user", password: "user123" }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}

// CEK STATUS LOGIN SAAT HALAMAN DIBUKA
if (localStorage.getItem("loginUser")) {
    showDashboard();
}

// FUNGSI LOGIN
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users"));

    const validUser = users.find(
        user => user.username === username && user.password === password
    );

    if (validUser) {
        localStorage.setItem("loginUser", username);
        showDashboard();
    } else {
        alert("Username atau Password salah!");
    }
}

// TAMPILKAN DASHBOARD
function showDashboard() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");

    document.getElementById("userDisplay").innerText =
        localStorage.getItem("loginUser");
}

// FUNGSI LOGOUT
function logout() {
    localStorage.removeItem("loginUser");
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}
