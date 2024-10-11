import "dayjs/locale/es-mx";
import { useState } from 'react';
import { styled } from '@mui/system';
import { Paper, Typography, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
dayjs.locale("es-mx");

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const defDate = dayjs()
export const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const startOfWeek = (date: Dayjs): Dayjs => {
    const day = date.day();
    const diff = date.date() - day + (day === 0 ? -6 : 1);
    return date.date(diff);
  };

  const renderDays = () => {
    const start = startOfWeek(selectedDate || defDate);
    return daysOfWeek.map((day, index) => {
        const currentDay = start.add(index, 'day');
      return (
        <StyledPaper key={day}>
          <Typography variant="h6">{day}</Typography>
          <Typography variant="body1">{currentDay.format('DD/MM/YYYY')}</Typography>
        </StyledPaper>
      );
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"es-mx"} >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <DatePicker
          label="Selecciona una fecha"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          /* renderInput={(params) => <TextField {...params} />} */
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        {renderDays()}
      </Box>
    </LocalizationProvider>
  );
};

