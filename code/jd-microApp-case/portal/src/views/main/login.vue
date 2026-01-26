<script setup>
import { useRouter } from "vue-router";
import { reactive, getCurrentInstance } from "vue";
import loginApi from "@/api/loginApi";
import md5 from "js-md5";
import microApp from "@micro-zoe/micro-app";

const router = useRouter();
const loginForm = reactive({
    account: 13277081267,
    password: "a123456",
});
const { proxy } = getCurrentInstance();

function onSubmit() {
    let params = loginForm;
    params.password = md5(params.password);
    loginApi.accountLogin(params).then((res) => {
        console.log(res);
        const { success, data, message } = res;
        if (success) {
            let { accessToken } = data;
            proxy.$message.success("登录成功");
            microApp.setGlobalData({
                token: accessToken,
            });
            router.push("/main/childHome");
        } else {
            proxy.$message.error(message);
        }
    });
}
</script>

<template>
    <div class="login-page">
        <span class="logo" @click="() => router.push('/main/childHome')"
            >microApp Case</span
        >

        <div class="login-panel">
            <div class="panel-l">
                <ul>
                    <li>子应用1：Vue3</li>
                    <li>子应用2：三方页面</li>
                    <li>子应用3：基座页面</li>
                </ul>
                <div class="img-card">
                    <img src="../../assets/images/trial_banner.png" />
                </div>
            </div>
            <div class="panel-r">
                <h2>microApp Case</h2>
                <el-form :model="loginForm" size="large">
                    <el-form-item prop="account">
                        <el-input
                            v-model="loginForm.account"
                            placeholder="请输入帐号"
                            maxlength="11"
                            clearable
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            type="password"
                            v-model="loginForm.password"
                            placeholder="请输入密码"
                            clearable
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-button
                            type="primary"
                            class="login-btn"
                            @click="onSubmit('loginForm')"
                            >登 录</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login-page {
    width: 100%;
    height: 100vh;
    position: relative;
    width: 100%;
    background: url(../../assets/images/trial_bg.png),
        linear-gradient(270deg, rgba(0, 67, 182, 0.3), rgba(21, 43, 150, 1)),
        linear-gradient(180deg, #07a7f9, #3385ff 100%, transparent);
    .logo {
        color: #ffd04b;
        font-size: 24px;
        font-weight: bold;
        position: absolute;
        line-height: 24px;
        left: 15px;
        top: 18px;
        cursor: pointer;
    }

    .login-btn {
        width: 100%;
        background-image: linear-gradient(225deg, #4dadff, #236cff);
        height: 44px;
        line-height: 44px;
        padding: 0 20px;
        font-size: 16px;
        margin-top: 20px;
    }
    .login-panel {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .el-form-item {
            margin-bottom: 28px;
        }
        .panel-l {
            width: 450px;
            .el-divider {
                margin: 15px 0;
            }
            & > h2 {
                font-size: 28px;
                color: #fff;
                text-align: center;
            }
            .title-bar {
                font-size: 12px;
                margin-top: 20px;
                color: #fff;
                position: relative;
                text-align: center;
                &::before {
                    content: "";
                    width: 100px;
                    height: 1px;
                    display: inline-block;
                    position: absolute;
                    left: 55px;
                    top: 9px;
                    background-color: #fff;
                }
                &::after {
                    content: "";
                    width: 100px;
                    height: 1px;
                    display: inline-block;
                    position: absolute;
                    right: 55px;
                    top: 9px;
                    background-color: #fff;
                }
            }
            & > ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-bottom: 20px;
                padding-left: 20px;
                li {
                    color: #fff;
                    font-size: 16px;
                    width: 100%;
                    margin: 3px 0;
                }
            }
            .img-card {
                width: 450px;
                height: 315px;
                padding: 20px 0px 29px 0px;
                margin: 20px auto 0;
                background: hsla(0, 0%, 100%, 0.23);
                box-shadow: 0 4px 8px 0 #0025c1;
                border-radius: 16px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                .title {
                    color: #fff;
                    font-size: 12px;
                    text-align: center;
                    margin-bottom: 30px;
                    span {
                        font-size: 20px;
                    }
                }
                img {
                    width: 450px;
                }
            }
        }
        .panel-r {
            background-color: #fff;
            border-radius: 12px;
            padding: 25px 35px;
            width: 450px;
            .el-result {
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .verify-div {
                background: linear-gradient(180deg, #fdfdfd, #f3f3f3);
                border: 1px solid #dfe2eb;
                width: 100%;
                height: 20px;
                line-height: 20px;
                border-radius: 4px;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 19px 12px;
                cursor: pointer;
                box-sizing: border-box;
                &.success {
                    background: #f0f9eb;
                    border: 1px solid #67c23a;
                    .el-icon-success {
                        color: #67c23a;
                        font-size: 20px;
                    }
                    .text {
                        margin-left: 6px;
                        font-size: 12px;
                        color: #67c23a !important;
                    }
                }
                .dot {
                    border: 1px solid #3784ff;
                    background-color: #c6d5f8;
                    animation: breath-dot 2s infinite;
                    width: 22px;
                    height: 22px;
                    margin-right: 8px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .inner {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        border: 1px solid green;
                        background-color: #3784ff;
                    }
                }
                @keyframes breath-dot {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(0.6);
                    }
                    to {
                        transform: scale(1);
                    }
                }
                .text {
                    &:nth-child(2) {
                        color: #999;
                    }
                }
            }
            .el-checkbox__label {
                color: #999;
                font-size: 12px;
            }
            .el-link {
                font-size: 12px;
                vertical-align: 1px;
            }
            h2 {
                font-size: 24px;
                color: #000;
                font-weight: 700;
                text-align: center;
                padding-top: 40px;
                padding-bottom: 40px;
            }
            .sub-title {
                font-size: 14px;
                color: #666;
                text-align: center;
                margin-top: 10px;
                display: block;
                margin-bottom: 25px;
            }
        }
    }
}
</style>
