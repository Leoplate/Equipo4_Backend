'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Base extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Base.belongsTo(models.Tareas,{
        foreignKey:'id_tarea' 
        
     });
      
     Base.belongsTo(models.Usuarios,{
      foreignKey:'id_usuario' 
      
   });

   Base.belongsTo(models.Estado,{
    foreignKey:'id_estado' 
    
 });
    }
  }
  Base.init({
    id_usuario: DataTypes.INTEGER,
    id_tarea: DataTypes.INTEGER,
    id_estado: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Base',
  });
  return Base;
};