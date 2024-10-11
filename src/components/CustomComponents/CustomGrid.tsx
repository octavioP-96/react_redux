import styled from "@emotion/styled";
import { DataGrid } from "@mui/x-data-grid";

export const CustomGrid = styled(DataGrid)(({ theme }) => ({
    backgroundColor:"#fff",
    '& .MuiDataGrid-columnHeader': {
      backgroundColor: "#444241", // Cambia esto al color que desees
      color: "#fff", // Cambia esto al color del texto que desees
    },
  }));