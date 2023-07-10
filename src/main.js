import { createApp } from 'vue'
import App from './App.vue'
import liff from "@line/liff";

async function main() {

  // VueRouter が動き始める前に liff.init する
  await liff.init({ liffId: "1661491250-Rb78d1d6" });

  createApp(App).mount('#app')
}

main();