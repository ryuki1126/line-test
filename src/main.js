import { createApp } from 'vue'
import App from './App.vue'
import liff from "@line/liff";

const main = async () => {

  // VueRouter が動き始める前に liff.init する
  await liff.init({ liffId: "1661491250-Rb78d1d6" });
  await console.log(liff.getOS());

  createApp(App).mount('#app')
}

main();