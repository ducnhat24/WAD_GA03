function showNav() {
    const navBar = document.querySelector(".header__sidebar");
    navBar.style.transform = "translateX(0)";
    navBar.style.opacity = "1";
    const navBtn = document.querySelector(".header__btn__nav");
    navBtn.style.opacity = "0.3";
}

function hideNav() {
    const navBar = document.querySelector(".header__sidebar");
    navBar.style.transform = "translateX(100%)";
    navBar.style.opacity = "0";
    const navBtn = document.querySelector(".header__btn__nav");
    navBtn.style.opacity = "1";
}

function handleSubmitSignup() {
    console.log("Signup form submitted");
    const username = document.querySelector("#signup__username").value;
    const email = document.querySelector("#signup__email").value;
    const password = document.querySelector("#signup__password").value;
    if (!email || !password || !username) {
        console.log("Please fill all fields");
        return;
    }
    alert("Signup successful");
    // Send data to server
    fetch("/api/user/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                alert("Signup successful");
            }
        });
}