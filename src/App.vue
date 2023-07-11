<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>liff認証テストアプリ</p>
  <p v-if="isLogin">ログイン中</p>
  <p v-if="!isLogin">ログインしていません</p>
  <p>IDトークン : {{ idToken }}</p>
  <p>アクセストークン : {{ accessToken }}</p>
</template>

<script>
import liff from "@line/liff";
import { setAuthToken } from "@/auth.js";

export default {
  name: "App",
  data() {
    return {
      isLogin: false,
      idToken: null,
      accessToken: null,
    };
  },
  created() {
    liff
      .init({ liffId: "2000094702-vgO5A1wk" })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        }
        const idToken = liff.getIDToken();
        const accessToken = liff.getAccessToken();
        this.isLogin = liff.isLoggedIn();
        this.idToken = idToken;
        this.accessToken = accessToken;
        setAuthToken(idToken, accessToken);
        console.log(liff.isLoggedIn());
        console.log(liff.getIDToken());
        console.log(liff.getAccessToken());
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
