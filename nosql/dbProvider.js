const mongoose = require('mongoose');

const server = process.env.DB_ENDPOINT;
const database = process.env.DB_DATABASE;

class Database {
	constructor() {
		this._connect()
	}
	_connect() {
		mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
			.then(() => {
				console.log('[INFO] Database connection successful')
			})
			.catch(err => {
				console.error('[ERROR] Database connection error')
			})
	}
}
module.exports = new Database();