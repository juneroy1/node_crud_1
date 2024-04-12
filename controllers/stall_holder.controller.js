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


module.exports = {
  getStallHolders,
  getStallHolderById,
};