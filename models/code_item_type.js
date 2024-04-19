
const mongoose = require("mongoose");

const CodeItemTypeSchema = mongoose.Schema({
  code: {
    type: String,
    reqired: true,
    default: null,
  },
  description: {
    type: String,
    required: true,
    default: null,
  },
  active_start_date: {
    type: Date,
    required: false,
    default: new Date(),
  },
  active_end_date: {
    type: Date,
    required: false,
    default: null,
  },
  created_user_id: {
    type: String,
    required: true,
  },
  modified_user_id: {
    type: String,
    required: true,
  },
  tenant_id: {
    type: String,
    required: true,
    default: '11111-11111-11111-11111'
  }
},
{
    timestamps: true,
}

);
const CodeItemType = mongoose.model("CodeItemType", CodeItemTypeSchema)

module.exports = CodeItemType
