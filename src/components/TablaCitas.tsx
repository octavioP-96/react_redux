import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { CustomGrid } from "./CustomComponents/CustomGrid";

const rows: GridRowsProp = [
{ id: 1, col1: 'Hello', col2: 'World' },
{ id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
{ id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
{ field: 'col1', headerName: 'Column 1', flex:1},
{ field: 'col2', headerName: 'Column 2', flex:1 },
];
export const TablaCitas = () => {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <CustomGrid rows={rows} columns={columns} sx={{marginX:"2%"}}/>
    </div>
  )
}
