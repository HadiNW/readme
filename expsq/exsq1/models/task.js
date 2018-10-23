'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : true
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    },
    points: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }      
    },
    EmployeeId :{
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    isComplete: DataTypes.BOOLEAN
  }, {
    hooks: {
      afterUpdate: (instance, options) => {
        // sequelize.models.Employee
        //   .update(
        //     {totalPoints:Employee.totalPoints + instance.points}, 
        //     {where: {id: instance.EmployeeId}
        //   })
        sequelize.models.Employee
          .findById(instance.EmployeeId)
            .then((data) => {
              data.totalPoints += instance.points
              data.save()
            })
      }
    }
  });

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.Employee)
  };

  Task.prototype.getStatus = function() {
    if (this.isComplete) {
      return 'completed'
    } else {
      return 'not completed yet' 
    }
  }
  return Task;
};