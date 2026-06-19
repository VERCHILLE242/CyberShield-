const form =
document.getElementById(
    "loginForm"
);

form.addEventListener(
    "submit",
    async (e)=>{

    e.preventDefault();

    const email =
    document.getElementById(
        "email"
    ).value;

    const password =
    document.getElementById(
        "password"
    ).value;

    const message =
    document.getElementById(
        "message"
    );

    try{

        const response =
        await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/json"
                },

                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data =
        await response.json();

        if(response.ok){

            localStorage.setItem(
                "token",
                data.token
            );

            message.className =
            "success";

            message.textContent =
            "Connexion réussie";

            setTimeout(()=>{

                window.location.href =
                "dashboard.html";

            },1000);

        }else{

            message.className =
            "error";

            message.textContent =
            data.message;

        }

    }catch(error){

        message.className =
        "error";

        message.textContent =
        "Serveur indisponible";

    }

});
