import React from "react";
import { useSelector } from "react-redux";

const SalaryDisplay = () => {
  const {
    basicSalary,
    earnings,
    deductions,
    epf,
    etf,
    apit,
    netSalary,
    costToCompany,
  } = useSelector((state) => state.salary);

  return (
    <div>
      <h2>Salary Details</h2>
      <p>Basic Salary: {basicSalary}</p>
      <h3>Earnings</h3>
      <ul>
        {earnings.map((e, index) => (
          <li key={index}>
            {e.description}: {e.amount}
          </li>
        ))}
      </ul>
      <h3>Deductions</h3>
      <ul>
        {deductions.map((d, index) => (
          <li key={index}>
            {d.description}: {d.amount}
          </li>
        ))}
      </ul>
      <p>EPF: {epf}</p>
      <p>ETF: {etf}</p>
      <p>APIT: {apit}</p>
      <p>Net Salary: {netSalary}</p>
      <p>Cost to Company: {costToCompany}</p>
    </div>
  );
};

export default SalaryDisplay;
