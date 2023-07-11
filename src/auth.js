import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
export const cookieIdTokenKey = "id_token";
export const cookieAccessTokenKey = "access_token";

// トークンがCookieにセットされているかを確認する関数
export const isAuthTokenSet = () => {
  return (
    Boolean(cookies.get(cookieIdTokenKey)) &&
    Boolean(cookies.get(cookieAccessTokenKey))
  );
};

// トークンをCookieに保存する関数
export const setAuthToken = (idToken, accessToken) => {
  cookies.set(cookieIdTokenKey, idToken, 60 * 30);
  cookies.set(cookieAccessTokenKey, accessToken, 60 * 30);
};

// cookieに保持させているトークンを削除する関数
export const deleteAuthToken = () => {
  cookies.set(cookieIdTokenKey, "");
  cookies.set(cookieAccessTokenKey, "");
};

// API実行時に使用する認証ヘッダーを返す関数(ログアウト時はAccess tokenのキーを引数で指定する)
export const getAuthHeaders = (key = cookieIdTokenKey) => {
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${cookies.get(key) || ""}`);
  return headers;
};