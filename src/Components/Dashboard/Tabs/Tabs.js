import React, { useState } from "react";
import "./Tabs.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid/Grid";
import List from "../List/List";
import { motion } from "framer-motion";

export default function Tabs({ coins }) {
  const [value, setValue] = useState("grid");

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  // Change mui Theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList variant="fullWidth" onChange={handleChange}>
          <Tab sx={style} label="Grid" value="grid" />
          <Tab sx={style} label="List" value="list" />
        </TabList>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => (
              <motion.div
                initial={{ opacity: 0.5, y: 290 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
              >
                <Grid coin={coin} key={i} />
              </motion.div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((coin, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0.5, x: 590 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 * i }}
                >
                  <List coin={coin} key={i} />
                </motion.div>
              );
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
