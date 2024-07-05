const $form = document.getElementById("registerForm");

$form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const profilePic = document.getElementById("profilePic").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Faltan campos por llenar!");
        return;
    }

    try {
        const response = await fetch("http://localhost:5500/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, profilePic, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            window.open("../login/login.html", "_self");
        } else {
            throw new Error(data.message || "Error en el registro");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error en el servidor. Por favor, intente de nuevo más tarde.");
    }
});

