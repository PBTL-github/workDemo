import * as Router from "koa-router";
import { register, login } from "../../utils/userControl";

const router: Router = new Router({ prefix: "/user" });

//注册
router
    .post("/register", register)

    //登入
    .post("/login", login);

export default router;
