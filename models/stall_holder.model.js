const mongoose = require("mongoose");
const StallHolderSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  type_id: {
    type: String,
    required: false,
  },
  image_id: {
    type: String,
    required: false,
  },
  abn: {
    type: String,
    required: false,
  },
  login_id: {
    type: String,
    required: false,
  },
  discount_group_id: {
    type: String,
    required: false,
  },
  status_id: {
    type: String,
    required: false,
  },
  comments: {
    type: String,
    required: false,
  },
  facebook_page: {
    type: String,
    required: false,
  },
  instagram_page: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  accept_terms_and_condition: {
    type: Date,
    required: false,
  },
  vfma_member: {
    type: Boolean,
    required: false,
  },
  vfma_accreditation: {
    type: Boolean,
    required: false,
  },
  vfma_membership: {
    type: Boolean,
    required: false,
  },
  discount_percentage: {
    type: Number,
    required: false,
  },
  do_you_really_need_to_park_trailer: {
    type: Boolean,
    required: false,
  },
  vehicle_registration_number: {
    type: String,
    required: false,
  },
  accounts_email: {
    type: Boolean,
    required: false,
  },
  created_date: {
    type: Date,
    required: false,
  },
  modified_date: {
    type: Date,
    required: false,
  },
  when_agree_to_permanent_terms: {
    type: Date,
    required: false,
  },
  agreed_terms_and_conditions_id: {
    type: String,
    required: false,
  },
  permanent_agreed_terms_and_conditions_id: {
    type: String,
    required: false,
  },
  created_user_id: {
    type: String,
    required: false,
  },
  modified_user_id: {
    type: String,
    required: false,
  },
  tenant_id: {
    type: String,
    required: false,
  },
  active_start_date: {
    type: Date,
    required: false,
  },
  active_end_date: {
    type: Date,
    required: false,
  },
  first_name: {
    type: String,
    required: false,
  },
  last_name: {
    type: String,
    required: false,
  },
  //   data: {
  //     type: String,
  //     required: false,
  //   },
});

const StallHolder = mongoose.model("StallHolder", StallHolderSchema);

module.exports = StallHolder
