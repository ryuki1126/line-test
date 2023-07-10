<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <p v-if="isLoggedIn">ログイン中</p>
    <p v-if="!isLoggedIn">ログインできていません</p>
  </div>
</template>

<script>
import liff from "@line/liff";

export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    console.log(liff.getOS());
    console.log(liff.isLoggedIn());
    this.isLoggedIn = liff.isLoggedIn();
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
