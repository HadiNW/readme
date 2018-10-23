'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : true,
        isEmail: true,
        unique: function(email, next){
          Employee.findAll({where: {email: email, id: {not: this.id} }})
            .then((data) => {
              console.log(this.id)
              if (data.length > 0){
                next('Email must be unique')
              }else{
                next()
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    },
    totalPoints: DataTypes.INTEGER
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
    Employee.hasMany(models.Task)
  };
  Employee.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }

  return Employee;
};