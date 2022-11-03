"use strict";

const { mongoose } = require("../db"),
  Schema = mongoose.Schema,
  ModelError = require("../modelError");

//   Campaign Schema

const campaignSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  polygonDraw: {
    type: String,
    required: true,
    trim: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    required: true,
    trim: false,
  },
  priority: {
    type: String,
    required: true,
    enum: ["Urgent", "High", "Medium", "Low"],
  },
  location: {
    type: String,
    required: true,
  },
  // paricipantCount: {
  //   type: Number,
  //   required: true,
  // },
  // aboutMe: {
  //     type: String,
  //     required: true,
  //     trim: true
  // },
  // campaignGoals: {
  //     type: String,
  //     required: true,
  //     trim: true
  // },
  // campaignDetails: {
  //     type: String,
  //     required: true,
  //     trim: true
  // },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  phenomena: {
    type: String,
    trim: true,
    required: true,
    enum: ["PM10", "Wind speed"],
  },
});

campaignSchema.statics.addCampaign = function addCampaign(params) {
  this.create(params).then(function (savedCampaign) {
    // request is valid
    // persist the saved box in the user
    console.log(savedCampaign);
    return savedCampaign;
  });
};

//campaignSchema.methods.notifyallusers

const campaignModel = mongoose.model("Campaign", campaignSchema);

module.exports = {
  schema: campaignSchema,
  model: campaignModel,
};
