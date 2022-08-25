<script lang="ts" setup></script>

<template>
    <div class="home">
        <div class="background">
            <form action="" method="post" class="form">
                <h3>模拟登入注册</h3>
                <input
                    type="text"
                    name="username"
                    placeholder="用户名"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="密码"
                    required
                />
                <button type="submit">注册</button>
                <router-link to="/">登入</router-link>
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
            transform: translateY(-50%) translateX(-50%);
            background-color: white;
            border-radius: 20px;
            box-shadow: 2px 2px 10px 0px #333;
        }

        .form {
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

            button {
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

            a {
                & {
                    text-decoration: none;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
