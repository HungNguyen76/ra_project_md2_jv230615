import api from "@api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";
import axios from "axios";

const login = createAsyncThunk("login", async (inforLogin) => {
  let res = await api.user.findAllUser();
  return {
    users: res.data,
    inforLogin: inforLogin,
  };
});

const checkTokenLocal = createAsyncThunk("checkTokenLocal", async (token) => {
  let res = await api.user.findAllUser();
  return {
    users: res.data,
    token: token,
  };
});
const updateCart = createAsyncThunk("updateCarts", async (dataObj) => {
  console.log("🚀 ~ file: userLogin.slice.js:22 ~ updateCart ~ dataObj:", dataObj)
  let res = await axios.patch(
    import.meta.env.VITE_API_URL + "/users/" + dataObj.userId,
    dataObj.carts
  );
  return res.data;
});
function createToken(userObj, privateKey) {
  return CryptoJS.AES.encrypt(JSON.stringify(userObj), privateKey).toString();
}

function checkToken(token, privateKey, keyEnv) {
  try {
    if (privateKey !== keyEnv) {
      return false;
    }
    //giai ma
    const decryptedData = CryptoJS.AES.decrypt(token, privateKey).toString(
      CryptoJS.enc.Utf8
    );
    return JSON.parse(decryptedData);
  } catch {
    return false;
  }
}

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    loading: false,
    userInfor: null,
  },
  reducers: {
    logOut: (state, action) => {
      console.log("action:", action);
      return {
        ...state,
        userInfor: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      let user = action.payload.users.find(
        (user) => user.userName == action.payload.inforLogin.userName
      );

      if (!user) {
        alert("Không tìm thấy người dùng");
      } else {
        if (user.password !== action.payload.inforLogin.password) {
          alert("Mật khẩu không chính xác! Vui lòng nhập lại");
        } else {
          state.userInfor = user;
          //ma hoa du lieu
          let token = createToken(user, import.meta.env.VITE_APP_JWT_KEY);
          //luu token trong local storage
          localStorage.setItem("token", token);
        }
      }
    });
    builder.addCase(checkTokenLocal.fulfilled, (state, action) => {
      let deToken = checkToken(
        action.payload.token,
        import.meta.env.VITE_APP_JWT_KEY,
        import.meta.env.VITE_APP_JWT_KEY
      );
      let user = action.payload.users.find(
        (user) => user.userName == deToken.userName
      );
      if (deToken) {
        if (user) {
          if (user.password == deToken.password) {
            state.userInfor = user;
          } else {
            localStorage.removeItem("token");
          }
        } else {
          localStorage.removeItem("token");
        }
      } else {
        localStorage.removeItem("token");
      }
    });
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.userInfor = action.payload;
      localStorage.removeItem("carts");
    });
  },
});
export const userLoginActions = {
  ...userLoginSlice.actions,
  login,
  checkTokenLocal,
  updateCart,
};
export default userLoginSlice.reducer;
