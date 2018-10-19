/**
 * Created by USER HERE on DATE HERE.
 * PROJECT NAME HERE { PACKAGE_NAME_HERE }
 * Copyright © 2018 COMPANY NAME HERE. All rights reserved.
*/

module.exports = (ORM, DataType) => {

	let Demo = ORM.define('Demo', {
		title  : {
			type : DataType.STRING,
			allowNull : false,
			validate : {
				notEmpty : true
			}
		},
		url : {
			type : DataType.STRING,
			allowNull : true,
			validate: {
				isUrl : true
			}
		}
	});

	Demo.sync();

	return Demo;

};