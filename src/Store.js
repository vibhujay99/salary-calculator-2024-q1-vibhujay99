import { configureStore } from "@reduxjs/toolkit";
import salaryReducer from "./SalarySlice";

export const store = configureStore({
  reducer: {
    salary: salaryReducer,
  },
});
