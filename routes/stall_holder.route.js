const express = require('express');
const { getStallHolders, getStallHolderById, createStallHolder, updateStallHolderById } = require('../controllers/stall_holder.controller');
const router = express.Router()


router.get("/", getStallHolders);
router.get("/:id", getStallHolderById);
router.post("/", createStallHolder);
router.put("/:id", updateStallHolderById);


module.exports = router