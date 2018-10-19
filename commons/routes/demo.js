/**
 * Created by USER HERE on DATE HERE.
 * PROJECT NAME HERE { PACKAGE_NAME_HERE }
 * Copyright © 2018 COMPANY NAME HERE. All rights reserved.
*/

module.exports = app => {

	const controller = app.controllers.demo;


	app.route('/api/demo')
		.get(controller.getAll)
		.post(controller.set);

	app.route('/api/demo/:id')
		.put(controller.update)
		.get(controller.get)
		.delete(controller.remove);
};