const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Productos = sequelize.define("tproductos", {
    id_producto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING
    },
    precio: {
      type: DataTypes.FLOAT
    },
    fecha_asignacion: {
      type: DataTypes.DATE
    },
    asignado: {
      type: DataTypes.INTEGER
    }
  });

  return Productos;
};