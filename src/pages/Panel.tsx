import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TablaCitas } from "../components/TablaCitas";
import Container from "@mui/material/Container";
import { FiltrosTabla } from "../components/FiltrosTabla";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import {
  a11yProps,
  CustomTabPanel,
} from "../components/CustomTabPanel/CustomTabPanel";
import { Agenda } from "../components/Agenda/Agenda";
import { MyCalendar } from "../components/Agenda/CustomCalendar";

export const Panel = () => {
  const user = useSelector((state: RootState) => state.usuario);
  const [tab, setTab] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container>
      <Box sx={{ backgroundColor: "#fff", borderRadius: "5px" }} p={1}>
        <h1 style={{ marginBottom: "0" }}>Bienvenido al Panel</h1>
        <Typography variant="h5" sx={{ float: "right" }}>
          <b>15</b> Registros encontrados
        </Typography>

        <Box width={"100%"}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tab}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Vista general" {...a11yProps(0)} />
              <Tab label="Vista agenda" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={tab} index={0}>
            <FiltrosTabla />
            <TablaCitas />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={1}>
            {/* <Agenda /> */}
            <MyCalendar />
          </CustomTabPanel>
        </Box>
      </Box>
    </Container>
  );
};
