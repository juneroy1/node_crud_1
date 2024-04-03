const express = require('express');
const { getStallHolders } = require('../controllers/stall_holder.controller');
const router = express.Router()


router.get("/", getStallHolders);