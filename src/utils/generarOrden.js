//Función auxiliar para generar la orden.
const ordenGenerada = (nombre, apellido, direccion, telefono, cart, total) => {
  return {
    buyer: {
      nombre: nombre,
      apellido: apellido,
      direccion: direccion,
      telefono: telefono,
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleString(),
  };
};

export default ordenGenerada;
