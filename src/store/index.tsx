import { configureStore } from "@reduxjs/toolkit";
import userSlice from "/@/store/user.ts";

// 创建store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
// ReturnType是TS内置的一个工具类型，用于获取函数类型的返回值类型
// 通过 store.getState() 方法可以获取整个应用程序的当前状态对象。这个状态对象通常是一个包含多个 reducer 状态的联合类型。
type RootState = ReturnType<typeof store.getState>;

export type { RootState };
export default store;
