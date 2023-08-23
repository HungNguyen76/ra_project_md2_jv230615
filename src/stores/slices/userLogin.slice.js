import api from "@api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";

const login = createAsyncThunk("login", async (inforLogin) => {
  let res = await api.user.findAllUser();
  return {
    users: res.data,
    inforLogin: inforLogin,
  };
});

function createToken(userObj, privateKey) {
    return CryptoJS.AES.encrypt(JSON.stringify(userObj), privateKey).toString();
}
console.log("createToken:", createToken)

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    loading: false,
    userInfor: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      let user = action.payload.users.find(
        (user) => user.userName == action.payload.inforLogin.userName
      );
      console.log(
        "🚀 ~ file: userLogin.slice.js:28 ~ builder.addCase ~ action.payload.inforLogin.userName:",
        action.payload.inforLogin.userName
      );
      if (!user) {
        alert("Không tìm thấy người dùng");
      } else {
        state.userInfor = user;
      }
    });
    // builder.addMatcher(
    //   (action) => {
    //     if (action.meta) {
    //       return action;
    //     }
    //   },
    //   (state, action) => {
    //     if(action.meta) {
    //         if(action.meta.requestStatus == "pending") {
    //             state.loading = true;
    //         }
    //     }
    //   }
    // );
  },
});
export const userLoginActions = {
  ...userLoginSlice.actions,
  login,
};
export default userLoginSlice.reducer;
