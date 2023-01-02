const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index');

//whenver u get a route that starts with v1, map it to v1ApiRoutes
router.use('/v1', v1ApiRoutes);
//when one will call /v1, they will be routed to v1ApiRoutes which is a router object 
module.exports = router;