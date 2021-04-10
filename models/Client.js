const mongoose = require('mongoose')
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    enum: ['none', 'diploma', 'diplomaLevTwo', 'degree'],
    default: 'none',
  },
  applications: [
    {
      university: { type: mongoose.Schema.Types.Object, ref: 'university' },
      course: { type: mongoose.Schema.Types.Object, ref: 'course' },
    },
  ],

  comment: {
    type: String,
    default: '',
  },
  submittedBy: { type: mongoose.Schema.Types.Object, ref: 'user' },

  notificationBasic: {
    type: Boolean,
    default: false,
  },
  notificationAdmin: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['cancel', 'new', 'submitted', 'unconditional', 'enrolled'],
    default: 'new',
  },
  statusAdmin: {
    status: {
      type: String,
      enum: ['ready', 'notReady', 'notSuitable', 'booked', 'failed', 'passed'],
      default: 'notReady',
    },
    attendance: {
      type: Boolean,
      default: false,
    },
  },
  sfe: {
    type: Boolean,
    default: false,
  },
  dateOfContact: {
    type: Date,
    default: Date.now,
  },
  dateOfSubmit: {
    type: Date,
  },
  dateOfUnconditional: {
    type: Date,
  },
  intake: { type: String },
  archived: {
    type: Boolean,
    default: false,
  },
})

module.exports = Client = mongoose.model('client', ClientSchema)
