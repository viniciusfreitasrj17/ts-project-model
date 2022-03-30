require('dotenv').config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});

const portServer = process.env.PORT || 3000;

export { portServer };
