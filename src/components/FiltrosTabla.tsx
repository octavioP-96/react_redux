import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export const FiltrosTabla = () => {
  return (
    <Box
      sx={{ /* backgroundColor:"white", */ padding: "1px 2%", paddingY: "4%" }}
    >
      <Typography variant="subtitle1">Filtros de busqueda</Typography>
      <Grid
        container
        spacing={2}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid size="grow">
          <TextField
            id="filled-basic"
            label="Orden de Compra"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid size="grow">
          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-label">Proveedor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label="Proveedor"
              onChange={() => {}}
            >
              <MenuItem value={10}>Proveedor 1</MenuItem>
              <MenuItem value={20}>Proveedor 2</MenuItem>
              <MenuItem value={30}>Proveedor 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size="grow">
          <TextField
            id="filled-basic"
            label="Orden de Compra"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};
