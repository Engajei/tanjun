/**
 _____         _            _____                                 _
|_   _|__ ___ |_|_ _ ___   |   __|___ ___ _____ ___ _ _ _ ___ ___| |_
  | || .'|   || | | |   |  |   __|  _| .'|     | -_| | | | . |  _| '_|
  |_||__,|_|_|| |___|_|_|  |__|  |_| |__,|_|_|_|___|_____|___|_| |_,_|
            |___|

 * Created Tanjun Framework
 * This is the main file in it you will find the system root settings,
 * the order of loading dependencies and the HTTP engine, modifications
 * here must be done carefully, modifications in subsystems must be
 * made in the [config /] folder where the libs settings used and the framework
 *
 *
 * PROJECT NAME HERE { PACKAGE_NAME_HERE }
 * Copyright © 2018 COMPANY NAME HERE. All rights reserved.
*/
const express = require('express');
const consign = require('consign');
const dotenv  = require('dotenv');

const { EventEmitter } = require('events');
				EventEmitter.prototype._maxListeners = 0;

const app = express();

dotenv.load();
global.Env = process.env;

consign({verbose : false, locale: 'pt-br'})
	.include('dbProvider.js')
	.then('configs')
	.then('controllers')
	.then('routes')
	.then('runner.js')
	.into(app);

module.exports = app;