import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const notificaciones = () => {
  const [citas, setCitas] = useState([]);

  // Obtener citas agendadas desde algún origen de datos //Calendar
  useEffect(() => {
   
    const citasAgendadas = obtenerCitasAgendadas();
    setCitas(citasAgendadas);
  }, []);

  // Función para obtener las citas agendadas
  const obtenerCitasAgendadas = () => {
   
    return [
      { id: 1, fecha: '2023-06-03', hora: '10:00', paciente: 'John Doe' },
      { id: 2, fecha: '2023-06-04', hora: '14:30', paciente: 'Jane Smith' },
      // ...
    ];
  };

  // Función para verificar si una fecha es el día anterior a la fecha actual
  const esDiaAnterior = (fecha) => {
    const hoy = new Date();
    const fechaComparar = new Date(fecha);
    const diaAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() - 1);
    return fechaComparar.toDateString() === diaAnterior.toDateString();
  };

  // Verificar si hay citas para mostrar notificaciones
  useEffect(() => {
    citas.forEach((cita) => {
      if (esDiaAnterior(cita.fecha)) {
        // Mostrar notificación para la cita el día anterior
        toast.info(`Tienes una cita agendada para mañana a las ${cita.hora}`);
      }
    });
  }, [citas]);

  return (
    <div>
      {/* Resto del código del componente de Calendario */}
    </div>
  );
};

export default notificaciones;
