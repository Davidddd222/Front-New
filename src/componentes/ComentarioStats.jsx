import React, { useContext } from 'react';
import { ComentariosContexto } from '../contexto/ComentariosContexto';

const ComentarioStats = () => {
    const { comentarios } = useContext(ComentariosContexto);

    const totalComentarios = comentarios.length;

    const promedioCalificacion = totalComentarios > 0 
        ? (comentarios.reduce((acc, curr) => acc + curr.calificacion, 0) / totalComentarios).toFixed(1)
        : 0;  // Si no hay comentarios, el promedio será 0

    return (
        <div className='feedback-stats'>
            <h4>Comentarios: {totalComentarios}</h4>
            <h4>Calificación promedio: {promedioCalificacion}</h4>
        </div>
    );
};

export default ComentarioStats;
