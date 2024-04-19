const express = require("express");
const {
  getCodeItemTypes,
  getCodeItemTypeById,
  createCodeItemType,
} = require("../controllers/code_item_type.controller");

const router = express.Router();

router.get("/", getCodeItemTypes);
router.get("/:id", getCodeItemTypeById);
router.post("/", createCodeItemType);

module.exports = router;
