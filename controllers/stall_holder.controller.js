const StallHolder  = require("../models/stall_holder.model")

const getStallHolders = async (req, res )=> {
    try {
        const stallholder = await StallHolder.find({});
        res.status(200).json({stallholder})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getStallHolderById = async (req, res) => {
    try {
     const {id} = req.params;
     const stall_holder = await StallHolder.findById(id);
     
     res.status(200).json(stall_holder);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createStallHolder = async (req, res) => {
    try {
        const stall_holder = await StallHolder.create(req.body);
        res.status(200).json({message: "Successfully created new stall holder", stall_holder});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateStallHolderById = async(req, res) => {
    try {
        const {id } = req.params
        const stall_holder = await StallHolder.findByIdAndUpdate(id, req.body)
        if (!stall_holder) {
            res.status(400).json({message: "Stall Holder not found"})
        }

        const update_stall_holder = await StallHolder.findById(id)

        res
          .status(200)
          .json({
            message: "Stallholder updated successfully",
            stall_holder: update_stall_holder,
          });

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
  getStallHolders,
  getStallHolderById,
  createStallHolder,
  updateStallHolderById,
};