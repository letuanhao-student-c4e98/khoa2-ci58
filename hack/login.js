
class Login {
    $email;
    $pass;
    $submit;
    $formLogin;

    constructor() {
        this.$email = document.createElement("input");
        this.$email.type = "email";
        this.$email.placeholder = "Nhập email ik";

        this.$pass = document.createElement("input");
        this.$pass.type = "password";
        this.$pass.placeholder = "Nhập pass ik";

        this.$submit = document.createElement("button");
        this.$submit.type = "submit";
        this.$submit.placeholder = "Vào gáy nào";
    }

    initRender = (container) => {
        
    }
}

export default Login;