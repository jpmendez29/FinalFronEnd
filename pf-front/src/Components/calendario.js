import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';

const Calendario = ({ users }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleDoubleClick = async (date) => {
    await toast.success(`cita agendada para ${users[0].firstname} el dia ${date}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
    console.log(`Usuario: ${users[0].firstname}`);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Calendario</h1>
      <Calendar
        className="mx-auto mt-4"
        onChange={handleDateChange}
        value={date}
        onClickDay = {handleDoubleClick}
      />
      <ToastContainer />
    </div>
  );
};

export default Calendario;