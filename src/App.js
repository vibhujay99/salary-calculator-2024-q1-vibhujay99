import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import SalaryForm from "./Components/SalaryForm";
import SalaryDisplay from "./Components/SalaryDisplay";
import "./index.scss";
import "@fontsource/roboto";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Item>
                <SalaryForm />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>
                <SalaryDisplay />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Provider>
  );
}

export default App;
