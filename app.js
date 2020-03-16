const DB_USER = [
    {
        username: "delan",
        password: "delan123",
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputCPassword = document.querySelector("#cPassword");
const buttonSubmit = document.querySelector("#submitForm");
const warningMsg = document.querySelector(".warning");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const valueInputUsername = inputUsername.value;
    const valueInputPassword = inputPassword.value;
    const valueInputCPassword = inputCPassword.value;

    if (valueInputPassword === valueInputCPassword) {
        //Hide Warning Text
        warningMsg.classList.add("warning");

        const data = {
            username: valueInputUsername,
            password: valueInputPassword
        }

        DB_USER.push(data);

        // Response Success
        console.log("Registrasi Berhasil, Terimakasih!");
        console.log(DB_USER);
    }else{
        // Respons When Password is Different
        warningMsg.classList.remove("warning");
    }

})

