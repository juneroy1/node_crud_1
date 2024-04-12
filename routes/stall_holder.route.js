const express = require('express');
const { getStallHolders, getStallHolderById, createStallHolder } = require('../controllers/stall_holder.controller');
const router = express.Router()


router.get("/", getStallHolders);
router.get("/:id", getStallHolderById);
router.post("/", createStallHolder);


module.exports = router