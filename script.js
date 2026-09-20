// =========================
// Register Form
// =========================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;


        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields.");
            return;
        }


        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }


        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("registeredUser", JSON.stringify(user));


        alert("Registration successful!");

        window.location.href = "login.html";

    });

}


// =========================
// Login Form
// =========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;


        if (email === "" || password === "") {
            alert("Please enter your email and password.");
            return;
        }


        const registeredUser = JSON.parse(
            localStorage.getItem("registeredUser")
        );


        if (!registeredUser) {
            alert("No registered user found. Please register first.");
            return;
        }


        if (
            email !== registeredUser.email ||
            password !== registeredUser.password
        ) {
            alert("Invalid email or password.");
            return;
        }


        localStorage.setItem("isLoggedIn", "true");

        alert("Login successful!");

        window.location.href = "dashboard.html";

    });

}


// =========================
// Create Blog Form
// =========================

const blogForm = document.getElementById("blogForm");

if (blogForm) {

    blogForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const title = document.getElementById("blogTitle").value.trim();
        const author = document.getElementById("blogAuthor").value.trim();
        const content = document.getElementById("blogContent").value.trim();


        if (title === "" || author === "" || content === "") {
            alert("Please fill all fields.");
            return;
        }


        alert("Blog published successfully!");

        blogForm.reset();

    });

}


// =========================
// Sidebar Menu
// =========================

const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");


// =========================
// Open Sidebar
// =========================

if (menuButton && sidebar && sidebarOverlay) {

    menuButton.addEventListener("click", function () {

        sidebar.classList.add("active");
        sidebarOverlay.classList.add("active");
        document.body.classList.add("sidebar-open");

    });

}


// =========================
// Close Sidebar Function
// =========================

function closeSidebar() {

    if (sidebar) {
        sidebar.classList.remove("active");
    }

    if (sidebarOverlay) {
        sidebarOverlay.classList.remove("active");
    }

    document.body.classList.remove("sidebar-open");

}


// =========================
// Close Button
// =========================

if (closeButton) {

    closeButton.addEventListener("click", function () {

        closeSidebar();

    });

}


// =========================
// Close When Clicking Overlay
// =========================

if (sidebarOverlay) {

    sidebarOverlay.addEventListener("click", function () {

        closeSidebar();

    });

}


// =========================
// Close With ESC Key
// =========================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeSidebar();

    }

});


// =========================
// Logout
// =========================

const logoutLinks = document.querySelectorAll(".logout-link");

logoutLinks.forEach(function (logoutLink) {

    logoutLink.addEventListener("click", function (event) {

        event.preventDefault();

        localStorage.removeItem("isLoggedIn");

        alert("Logged out successfully!");

        window.location.href = "login.html";

    });

});