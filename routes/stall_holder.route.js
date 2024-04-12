const express = require('express');
const { getStallHolders, getStallHolderById } = require('../controllers/stall_holder.controller');
const router = express.Router()


router.get("/", getStallHolders);
router.get("/:id", getStallHolderById);


module.exports = router