<script lang="ts" setup>
import { Ref, ref } from "vue";
import * as Api from "../utils/api/index";

/**
 * true为登入
 * false为注册
 */
const textFlag: Ref<boolean> = ref(true);
const subText: Ref<string> = ref("登入");
const oBtnText: Ref<string> = ref("注册");

//定义数据类型
interface Model {
    basic: {
        username: string;
        password: string;
    };
}
function initForm(): Model {
    return {
        basic: {
            username: "",
            password: "",
        },
    };
}

const userForm: Ref<Model> = ref(initForm());

/**
 * 提交表单信息
 */
const submitBtn = () => {
    let msg = "";
    if (textFlag.value) {
        // 登入
        if (check(userForm)) {
            Api.user.login(userForm.value.basic).then((res) => {
                console.log(res.data);
                msg = res.data.msg;
                alert(msg);
            });
        }
    } else {
        // 注册
        if (check(userForm)) {
            Api.user.register(userForm.value.basic).then((res) => {
                msg = res.data.msg;
                alert(msg);
            });
        }
    }
};

/**
 * 检查userForm格式
 */
const userReg = /^[a-zA-Z0-9]{5,16}$/;
const pawReg = /^[a-zA-Z0-9]{8,16}$/;
const check = (data: Ref<Model>) => {
    if (
        userReg.test(data.value.basic.username) &&
        pawReg.test(data.value.basic.password)
    ) {
        return true;
    } else {
        alert("用户名或密码格式错误");
        return false;
    }
};

/**
 * 更改按钮文字
 */
const changeBtn = () => {
    textFlag.value = !textFlag.value;
    console.log(textFlag.value);

    let temp = subText.value;
    subText.value = oBtnText.value;
    oBtnText.value = temp;
};
</script>

<template>
    <div class="home">
        <div class="background">
            <form>
                <h3>模拟登入注册</h3>
                <input
                    type="text"
                    name="username"
                    placeholder="用户名"
                    maxlength="16"
                    v-model="userForm.basic.username"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="密码"
                    maxlength="16"
                    v-model="userForm.basic.password"
                    required
                />
                <div class="submitBtn" @click="submitBtn">{{ subText }}</div>
                <div class="anotherBtn" @click="changeBtn">{{ oBtnText }}</div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    & {
        position: relative;
        width: 100vw;
        height: 100vh;
        min-width: 1024px;
        min-height: 768px;
        background-color: rgb(143, 159, 204);
    }
    .background {
        & {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 20%;
            height: 25%;
            min-width: 340px;
            min-height: 240px;
            transform: translateY(-50%) translateX(-50%);
            background-color: white;
            border-radius: 20px;
            box-shadow: 2px 2px 10px 0px #333;
        }

        form {
            & {
                width: 100%;
                height: 100%;
            }

            h3 {
                & {
                    font-weight: normal;
                    margin-bottom: 20px;
                }
            }

            input {
                & {
                    display: block;
                    width: 80%;
                    height: 30px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
            }

            .submitBtn {
                & {
                    display: block;
                    cursor: pointer;
                    width: 80%;
                    height: 30px;
                    margin: 0 auto;
                    background-color: rgb(98, 133, 228);
                    border: none;
                    color: white;
                    margin-bottom: 20px;
                }
            }

            .anotherBtn {
                & {
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
