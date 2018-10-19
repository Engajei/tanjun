/**
 * Created by USER HERE on DATE HERE.
 * PROJECT NAME HERE { PACKAGE_NAME_HERE }
 * Copyright © 2018 COMPANY NAME HERE. All rights reserved.
 */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = process.env;
let sequelize = null;
let dbProvider = {};

module.exports = (app) => {
	if (!sequelize) {
		dbProvider = { models: {} };

		let sequelize = new Sequelize(
			config.DB_NAME,
			config.DB_USER,
			config.DB_PASS, {
				dialect: config.DB_TYPE,
				logging: false,
				pool: {
					max: 30,
					min: 0,
					idle: 10000
				},
				dialectOptions: { encrypt: true },
				host: config.DB_ENDPOINT,
				port: parseInt(config.DB_PORT)
		});

		sequelize
			.authenticate()
			.then(() => {
				console.log('[INFO] Database connected');
			}).catch((err) => {
			console.log('Unable to connect to the db:', err);
		});

		let dir = path.join(__dirname, "models");
		fs.readdirSync(dir).forEach((file) => {
			if(path.join(dir, file).indexOf('index.js') < 0 ){
				let model = sequelize.import(path.join(dir, file));
				dbProvider.models[model.name] = model;
			}
		});

		Object.keys(dbProvider.models).forEach((model) => {
			if ("associate" in dbProvider.models[model]) {
				dbProvider.models[model].associate(dbProvider.models);
			};
		});

		dbProvider.sequelize = sequelize;
		dbProvider.Sequelize = Sequelize;
	}

	return dbProvider;
};