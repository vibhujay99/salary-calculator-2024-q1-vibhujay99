import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setBasicSalary,
  addEarning,
  addDeduction,
  reset,
} from "../SalarySlice";

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
      <h2>Calculate Your Salary</h2>

      <div>
        <label>Basic Salary:</label>
        <input
          type="number"
          value={basicSalary}
          onChange={handleBasicSalaryChange}
        />
        <button
          onClick={() => dispatch(setBasicSalary(parseFloat(basicSalary)))}
        >
          Set Basic Salary
        </button>
      </div>
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
      <button onClick={resetForm}>Reset</button>
    </div>
  );
};

export default SalaryForm;
