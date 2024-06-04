import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setBasicSalary,
  addEarning,
  addDeduction,
  reset,
} from "../SalarySlice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Button from "@mui/material/Button";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const SalaryForm = () => {
  const dispatch = useDispatch();
  const [basicSalary, setBasic] = useState("");
  const [earning, setEarning] = useState({
    description: "",
    amount: "",
    epfApplicable: false,
  });
  const [deduction, setDeduction] = useState({ description: "", amount: "" });

  const handleBasicSalaryChange = (e) => setBasic(e.target.value);
  const handleEarningChange = (e) =>
    setEarning({ ...earning, [e.target.name]: e.target.value });
  const handleDeductionChange = (e) =>
    setDeduction({ ...deduction, [e.target.name]: e.target.value });

  const addNewEarning = () => {
    dispatch(addEarning({ ...earning, amount: parseFloat(earning.amount) }));
    setEarning({ description: "", amount: "", epfApplicable: false });
  };

  const addNewDeduction = () => {
    dispatch(
      addDeduction({ ...deduction, amount: parseFloat(deduction.amount) })
    );
    setDeduction({ description: "", amount: "" });
  };

  const resetForm = () => dispatch(reset());
  return (
    <div>
      <Box sx={{ fontWeight: "bold" }}>
        <Typography variant="h5" gutterBottom>
          Calculate Your Salary
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          align="right"
          style={{ fontWeight: 1500 }}
        >
          <Button
            variant="outlined"
            startIcon={<RestartAltIcon />}
            onClick={resetForm}
          >
            Reset
          </Button>
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <FormGrid item xs={12} md={5}>
          <FormLabel htmlFor="basicSalary" required>
            Basic Salary
          </FormLabel>
          <OutlinedInput
            id="basicSalary"
            name="basicSalary"
            type="number"
            placeholder="eg: 250000"
            value={basicSalary}
            onChange={handleBasicSalaryChange}
            required
          />
        </FormGrid>
      </Grid>

      <Button onClick={() => dispatch(setBasicSalary(parseFloat(basicSalary)))}>
        Set Basic Salary
      </Button>

      <div>
        <h3>Add Earning</h3>
        <input
          name="description"
          placeholder="Description"
          value={earning.description}
          onChange={handleEarningChange}
        />
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={earning.amount}
          onChange={handleEarningChange}
        />
        <label>
          EPF Applicable:
          <input
            name="epfApplicable"
            type="checkbox"
            checked={earning.epfApplicable}
            onChange={(e) =>
              setEarning({ ...earning, epfApplicable: e.target.checked })
            }
          />
        </label>
        <button onClick={addNewEarning}>Add Earning</button>
      </div>
      <div>
        <h3>Add Deduction</h3>
        <input
          name="description"
          placeholder="Description"
          value={deduction.description}
          onChange={handleDeductionChange}
        />
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={deduction.amount}
          onChange={handleDeductionChange}
        />
        <button onClick={addNewDeduction}>Add Deduction</button>
      </div>
    </div>
  );
};

export default SalaryForm;
