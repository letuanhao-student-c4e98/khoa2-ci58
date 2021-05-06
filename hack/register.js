class Register {
    $email;
    $name;
    $pass;
    $cfPass;
    $submit;
    $formRegister;
    $errorMess;


    constructor() {
        this.$email = document.createElement("input");
        this.$email.type = "email";
        this.$email.placeholder = "Nhập mail ik";

        this.$name = document.createElement("input");
        this.$name.type = "text";
        this.$name.placeholder = "";

        this.$pass = document.createElement("input");
        this.$pass.type = "password";
        this.$pass.placeholder = "Cài mật khẩu ik";

        this.$cfPass = document.createElement("input");
        this.$cfPass.type = "password";
        this.$cfPass.placeholder = "Check lại xem đúng chưa";

        this.$formRegister = document.createElement("form");
        this.$formRegister.addEventListener("submit", this.handleSubmit) // hàm handle event submit

        this.$submit = document.createElement("button");
        this.$submit.type = "submit";
        this.$submit.innerHTML = "Chốt";

        this.$errorMess = document.createElement("p");
        this.$errorMess.classList.add("errorMess");
    }

    handleSubmit = (event) => {
        event.preventDefault(); // ngăn cho web reload
        const email = this.$email.value;
        const name = this.$name.value;
        const pass = this.$pass.value;
        const cfPass = this.$cfPass.value;

        if (email === ""){
            this.setErrorMessage("Email cannot be empty");
            return; // nếu lỗi thì return, k chạy xuống dưới nữa
        }
        if (name === ""){
            this.setErrorMessage("Display name cannot be empty");
            return;
        }
        if (pass === "") {
            this.setErrorMessage("Password cannot be empty");
            return;
        }
        if (cfPass === "") {
            this.setErrorMessage("C.P cannot be empty");
            return;
        }
        if (pass != cfPass) {
            this.setErrorMessage("Not match");
            return;
        }
        this.setErrorMessage(""); // nếu tất cả OK thì k báo lỗi gì
    }

    setErrorMessage = (content) => {
        this.$errorMess.innerHTML = content;
        if (content !== ""){
            this.$errorMess.style.display = "block";
        } else {
            this.$errorMess.style.display = "none";
        }
    }


    initRender = (container) => {
        const flexContainer = document.createElement("div");
        const title = document.createElement("h2");
        title.innerHTML = "Lập tài khoản đi ML";
        
        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$errorMess); // hiện báo lỗi để trống
        flexContainer.appendChild(this.$email);// append các $ vào flexContainer
        flexContainer.appendChild(this.$name);
        flexContainer.appendChild(this.$pass);
        flexContainer.appendChild(this.$cfPass);
        flexContainer.appendChild(this.$submit);
        
        this.$formRegister.appendChild(flexContainer);// append flexContainer vào $form
        container.appendChild(this.$formRegister);// append form vào container để render
    }
}

export default Register;

