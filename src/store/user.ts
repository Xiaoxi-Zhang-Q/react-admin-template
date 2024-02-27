import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "/@/utils/session";
interface UserInfo {
  username: string;
  token: string;
  headPortrait?: string;
}
const initialState: UserInfo = {
  username: "",
  token: getToken("xxue_token") || "",
  headPortrait: "",
};
const userSlice = createSlice({
  name: "userinfo",
  initialState, // state的初始值
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      // state 是一个代理对象，可以直接去去修改
      // action 对象的结构 {type name/函数名 payload 函数的参数
      state.token = action.payload;
    },
  },
});
export const { setToken } = userSlice.actions;
export default userSlice;
