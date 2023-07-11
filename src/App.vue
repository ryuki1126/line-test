<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>liff認証テストアプリ</p>
  <p v-if="isLogin">ログイン中</p>
  <p v-if="!isLogin">ログインしていません</p>
  <p>{{ idToken }}</p>
  <p>{{ accessToken }}</p>
</template>

<script>
import liff from "@line/liff";

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
        this.isLogin = liff.isLoggedIn();
        this.idToken = liff.getIDToken();
        this.accessToken = liff.getAccessToken();
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
