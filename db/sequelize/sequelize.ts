import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres://nanoleaf:nanoleaf@localhost:5432/nanoleafdb');
