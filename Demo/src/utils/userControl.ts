import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import app from "../server";

// 注册
const register = async (ctx: any) => {
    const { username, password } = ctx.request.body;
    if (check(username, password)) {
        const res = await createUser(username, password);
        ctx.body = res;
    } else {
        console.log("格式错误");
    }
    return ctx.body;
};

const login = async (ctx: any) => {
    const { username, password } = ctx.request.body;
    if (check(username, password)) {
        const res = await selectUser(username, password);
        ctx.body = res;
    } else {
        console.log("格式错误");
    }
    return ctx.body;
};

/**
 * 注册
 * 连接服务器查询数据
 */
const createUser = async (username: string, password: string) => {
    let flag = { msg: "", code: 404 };

    await AppDataSource.initialize()
        .then(async () => {
            console.log("初始化注册");
            const userRepository = AppDataSource.getRepository(User);
            const user = new User();

            const userData = await userRepository.find({
                where: [{ username: username }],
            });
            console.log(userData);

            if (!userData[0]) {
                user.username = username;
                user.password = password;
                await userRepository.save(user);
                flag = { msg: "注册成功", code: 200 };
                console.log("注册成功");
            } else {
                flag = { msg: "用户已存在", code: 202 };
                console.log("注册失败");
            }
        })
        .catch((error: any) => console.log(error));

    //断开连接数据库
    AppDataSource.destroy();

    return flag;
};

/**
 * 登入
 * 连接服务器查询数据
 */
const selectUser = async (username: string, password: string) => {
    let flag = { msg: "", code: 404 };

    await AppDataSource.initialize()
        .then(async () => {
            console.log("初始化登入");
            const userRepository = AppDataSource.getRepository(User);
            console.log(username, password);
            const userData = await userRepository.find({
                where: [{ username: username, password: password }],
            });
            console.log(userData);

            if (!userData[0]) {
                console.log("登入失败");
                flag = { msg: "账号或密码错误", code: 201 };
            } else {
                console.log("登入成功");
                flag = { msg: "登陆成功", code: 200 };
            }
        })
        .catch((error: any) => console.log(error));

    //断开连接数据库
    AppDataSource.destroy();

    return flag;
};

/**
 * 检测
 */
const userReg = /^[a-zA-Z0-9]{5,16}$/;
const pawReg = /^[a-zA-Z0-9]{8,16}$/;
const check = (username: string, password: string) => {
    if (userReg.test(username) && pawReg.test(password)) return true;
    else return false;
};

export { register, login };
