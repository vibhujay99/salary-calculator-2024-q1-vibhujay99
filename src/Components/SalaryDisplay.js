import React from "react";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "primary.main",
  width: "35rem",
  height: "3rem",
};

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
    <Stack spacing={2}>
      <List disablePadding>
        <Typography variant="subtitle1" sx={{ fontWeight: 1000 }}>
          Your Salary
        </Typography>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText>
            <Typography variant="body2" sx={{ fontWeight: 200, fontSize: 10 }}>
              Item
            </Typography>
          </ListItemText>
          <Typography variant="body2" sx={{ fontWeight: 200, fontSize: 10 }}>
            Amount
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Basic Salary" />
          <Typography variant="body2">{basicSalary}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Gross Earning" />
          <Typography variant="body2">
            {earnings.map((e, index) => (
              <li key={index}>
                {e.description}: {e.amount}
              </li>
            ))}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Gross Deduction" />
          <Typography variant="body2">
            {deductions.map((d, index) => (
              <li key={index}>
                {d.description}: {d.amount}
              </li>
            ))}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Employee EPF (8%)" />
          <Typography variant="body2">{epf}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="APIT" />
          <Typography variant="body2">{apit}</Typography>
        </ListItem>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ ...commonStyles, border: 1, borderRadius: 1 }}>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Net Salary (Take Home)" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {netSalary}
              </Typography>
            </ListItem>
          </Box>
        </Box>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Contributions from the Employer
          </Typography>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Employer EPF (12%)" />
            <Typography variant="body2"></Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Employer ETF (3%)" />
            <Typography variant="body2">{etf}</Typography>
          </ListItem>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ ...commonStyles, border: 1, borderRadius: 1 }}>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="CTC (Cost to Company)" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {costToCompany}
                </Typography>
              </ListItem>
            </Box>
          </Box>
        </div>
      </Stack>
    </Stack>
  );
};

export default SalaryDisplay;
