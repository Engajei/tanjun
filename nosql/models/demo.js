/**
 * Created by USER HERE on DATE HERE.
 * PROJECT NAME HERE { PACKAGE_NAME_HERE }
 * Copyright © 2018 COMPANY NAME HERE. All rights reserved.
*/

const ODM = require('mongoose');

module.exports = () => {

	const Schema = ODM.Schema;

	return ODM.model('Demo', new Schema({
		id   : Schema.Types.ObjectId,
		name : String,
		date: { type: Date, default: Date.now }
	}));

};