const CodeItemType = require("../models/code_item_type")


const getCodeItemTypes = async (req, res) => {
    try {
        const code_item_type = await CodeItemType.find({})
        res.status(200).json({
          code_item_type,
        });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getCodeItemTypeById = async (req, res) => {
    try {
        const {id} = req.params
        const code_item_type = await CodeItemType.findById(id)

        res.status(200).json({code_item_type})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createCodeItemType = async (req, res) => {
    try {
        const codeItemType = await CodeItemType.create(req.body)
        res.status(200).json({message: "Create Successfully", codeItemType})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateCodeItemType = async (req, res) => {
    try {
        const {id} = req.params
        const update_codeItemType = await CodeItemType.findByIdAndUpdate(id, req.body)
        if (!update_codeItemType) {
            res.status(404).json({message: "Code item not found"})
        }

        const code_item_type = await CodeItemType.findById(id)

        res
          .status(200)
          .json({ message: "Updated Successfully", code_item_type });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
  getCodeItemTypes,
  getCodeItemTypeById,
  createCodeItemType,
  updateCodeItemType,
};