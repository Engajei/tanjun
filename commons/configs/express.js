/**
 * Created by USER HERE on DATE HERE.
 * PROJECT NAME HERE { PACKAGE_NAME_HERE }
 * Copyright © 2018 COMPANY NAME HERE. All rights reserved.
*/

const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');

module.exports = app => {

	app.set('port', process.env.PORT);
	app.set('json spaces', 4);
	app.use(helmet());
	app.use(cors());
	app.use(compression());
	app.use(bodyParser.json({ limit: '15mb' }));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(methodOverride());
	app.use((req, res, next) => {
		delete req.body.id;
		next();
	});

};
