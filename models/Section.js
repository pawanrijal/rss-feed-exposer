module.exports = (sequelize, type) => {
  return sequelize.define("sections", {
    id: {
      type: type.STRING,
      primaryKey: true,
    },
    title: {
      type: type.STRING,
      required: true,
      allowNull: false,
    },
    webUrl: {
      type: type.STRING,
      required: true,
      allowNull: false,
    },
    apiUrl: {
      type: type.STRING,
      required: true,
      allowNull: false,
    },
  });
};
