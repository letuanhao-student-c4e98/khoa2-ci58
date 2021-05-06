import Register from "./register.js";
import Login from "./login.js";

const container = document.getElementById("app");
const register = new Register(); // hàm tạo
register.initRender(container); // render thẻ div của container


const login = new Login();
