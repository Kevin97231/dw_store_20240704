import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./src/components/features/counterSlice";
import cartSlice from "./src/components/features/cartSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    myCart: cartSlice,
  },
});
