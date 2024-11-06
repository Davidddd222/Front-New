import React, { createContext, useState, useEffect } from 'react';

export const ComentariosContexto = createContext();

export const ComentariosProvider = ({ children }) => {
  const [comentarios, setComentarios] = useState([]); // Inicializamos el estado como un array vacío
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga

  // Este useEffect se ejecutará una sola vez al cargar el componente
  useEffect(() => {
    fetchComentarios();  // Llamamos a la función para obtener los comentarios
  }, []);

  // Función para obtener los comentarios desde el servidor
  const fetchComentarios = async () => {
  
      const response = await fetch('http://localhost:5000/comentarios');
      const data = await response.json(); // Parseamos la respuesta JSON
      setComentarios(data); // Establecemos los comentarios en el estado
  };

  // Función para agregar un nuevo comentario
  const addComentario = (newComentario) => {
    setComentarios((prev) => [
      ...prev,
      { ...newComentario, id: prev.length + 1 }, // Asignar un nuevo ID
    ]);
  };

  // Función para borrar un comentario
  const borrarComentario = (id) => {
    setComentarios((prev) => prev.filter((c) => c.id !== id));
  };

  // Retornamos el proveedor del contexto
  return (
    <ComentariosContexto.Provider
      value={{ comentarios, loading, addComentario, borrarComentario }}
    >
      {children}
    </ComentariosContexto.Provider>
  );
};
