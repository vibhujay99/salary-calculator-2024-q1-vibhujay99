import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
  epf: 0,
  etf: 0,
  apit: 0,
  netSalary: 0,
  costToCompany: 0,
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {
    setBasicSalary(state, action) {
      state.basicSalary = action.payload;
      calculateSalary(state);
    },
    addEarning(state, action) {
      state.earnings.push(action.payload);
      calculateSalary(state);
    },
    addDeduction(state, action) {
      state.deductions.push(action.payload);
      calculateSalary(state);
    },
    removeEarning(state, action) {
      state.earnings = state.earnings.filter(
        (_, index) => index !== action.payload
      );
      calculateSalary(state);
    },
    removeDeduction(state, action) {
      state.deductions = state.deductions.filter(
        (_, index) => index !== action.payload
      );
      calculateSalary(state);
    },
    reset(state) {
      return initialState;
    },
  },
});

const calculateSalary = async (state) => {
  try {
    const response = await axios.post("http://localhost:5000/calculate", {
      basicSalary: state.basicSalary,
      earnings: state.earnings,
      deductions: state.deductions,
    });
    const { epf, etf, apit, netSalary, costToCompany } = response.data;
    state.epf = epf;
    state.etf = etf;
    state.apit = apit;
    state.netSalary = netSalary;
    state.costToCompany = costToCompany;
  } catch (error) {
    console.error("Error calculating salary:", error);
  }
};

export const {
  setBasicSalary,
  addEarning,
  addDeduction,
  removeEarning,
  removeDeduction,
  reset,
} = salarySlice.actions;
export default salarySlice.reducer;
