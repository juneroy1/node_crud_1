const express = require("express");
const {
  getCodeItemTypes,
  getCodeItemTypeById,
  createCodeItemType,
  updateCodeItemType,
  deleteCodeItemType,
} = require("../controllers/code_item_type.controller");

const router = express.Router();

router.get("/", getCodeItemTypes);
router.get("/:id", getCodeItemTypeById);
router.post("/", createCodeItemType);
router.put("/:id", updateCodeItemType);
router.delete("/:id", deleteCodeItemType);

module.exports = router;
