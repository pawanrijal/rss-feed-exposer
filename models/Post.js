module.exports = (sequelize, type) => {
  return sequelize.define("posts", {
    id: {
      type: type.STRING,
      primaryKey: true,
    },
    postType: {
      type: type.STRING,
      unique: true,
      required: true,
      allowNull: false,
    },
    sectionId: {
      type: type.STRING,
      required: true,
      allowNull: false,
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
    isHosted: {
      type: type.BOOLEAN,
      default: false,
      required: true,
      allowNull: false,
    },
    pillarId: {
      type: type.STRING,
      required: true,
      allowNull: false,
    },
    pillarName: {
      type: type.STRING,
      required: true,
      allowNull: false,
    },
  });
};
