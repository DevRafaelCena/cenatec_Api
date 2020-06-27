module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
      "Usuario", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        nome: {
          type: DataTypes.STRING(192),
          allowNull: false,
          validate:{
            notEmpty: {
                msg: "O campo Nome não pode ser vazio"
            },
            len:{
                args: [0,192],
                msg: "Máx de 192 caracteres"
              } 
  
        }
        },
        email: {
          type: DataTypes.STRING(192),
          unique: true,
          allowNull: false,
          validate:{
            notEmpty: {
                msg: "O campo E-mail não pode ser vazio"
            },
            len:{
                args: [0,192],
                msg: "Máx de 192 caracteres"
              } 
  
        }
        },
        cpf: {
          type: DataTypes.STRING(11),
          unique: true,
          allowNull: false,
          validate:{
            notEmpty: {
                msg: "O campo cpf não pode ser vazio"
            },
            len:{
                args: [0,11],
                msg: "Máx de 11 caracteres"
              } 
  
        }
        },
       
        senha: {
          type: DataTypes.STRING(150),
          allowNull: false,
          validate:{
            notEmpty: {
                msg: "O campo Senha não pode ser vazio"
            },
            len:{
                args: [0,150],
                msg: "Máx de 192 caracteres"
              } 
  
        }
        },
        
        tipo_usuario: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
          allowNull: false
        },
        token:{
          type: DataTypes.STRING,
          unique: true
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false
        }
      }, {
        freezeTableName: true,
        tableName: "usuarios"
      }
    );
  
   
  
    return Usuario;
  };
  