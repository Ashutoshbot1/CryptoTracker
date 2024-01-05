import React, { useState } from "react";
import "./Tabs.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";

export default function Tabs({coins}) {
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
            <div>mappin for grid</div>
        </TabPanel>
        <TabPanel value="list">
            <div>mappin for list</div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
