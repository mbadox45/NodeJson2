const express = require('express');

var model = require('../model/user_model');

const c_user = express();
c_user.use(express.json());

c_user.get('/',(res) => {
	var que = model.getuser();
	return res.json(que);
})

module.exports = c_user;