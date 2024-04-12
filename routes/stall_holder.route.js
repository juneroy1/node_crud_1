const express = require('express');
const { getStallHolders, getStallHolderById, createStallHolder, updateStallHolderById, deleteStallHolderById } = require('../controllers/stall_holder.controller');
const router = express.Router()


router.get("/", getStallHolders);
router.get("/:id", getStallHolderById);
router.post("/", createStallHolder);
router.put("/:id", updateStallHolderById);
router.delete("/:id", deleteStallHolderById);


module.exports = router