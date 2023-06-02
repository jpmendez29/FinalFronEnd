import React, { useState } from 'react';

const Calendar = () => {
  // Obtener la fecha actual
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Estado para almacenar el mes y el año seleccionados
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Obtener los nombres de los meses
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  // Función para cambiar al mes anterior
  const goToPreviousMonth = () => {
    setSelectedYear(selectedMonth === 0 ? selectedYear - 1 : selectedYear);
    setSelectedMonth(selectedMonth === 0 ? 11 : selectedMonth - 1);
  };

  // Función para cambiar al mes siguiente
  const goToNextMonth = () => {
    setSelectedYear(selectedMonth === 11 ? selectedYear + 1 : selectedYear);
    setSelectedMonth(selectedMonth === 11 ? 0 : selectedMonth + 1);
  };

  // Obtener el número de días en el mes seleccionado
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

  // Crear una matriz de los días del mes
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div>
      <h1>{monthNames[selectedMonth]} {selectedYear}</h1>
      <button onClick={goToPreviousMonth}>Previous Month</button>
      <button onClick={goToNextMonth}>Next Month</button>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => (
            <td key={index}>{day}</td>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
