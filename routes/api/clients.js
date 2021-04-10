const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

// import models
const Client = require('../../models/Client')
const User = require('../../models/User')
const University = require('../../models/University')
const Course = require('../../models/Course')

// @route   POST api/clients
// @desc    ADD a new client
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('surname', 'Surname is required').not().isEmpty(),
    check('email', 'Type a valid email').isEmail(),
    check('telephone', 'Type a valid telephone number').not().isEmpty(),
    check('qualification', 'Select a qualification').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      name,
      surname,
      email,
      telephone,
      qualification,
      university,
      course,
      comment,
      submittedBy,
      intake,
    } = req.body

    let marketingOfficer = await User.findOne({ email: submittedBy })

    let universityModel = await University.findOne({ name: university })
    if (!universityModel) {
      return res.status(400).json({
        errors: [
          {
            msg: `${university} does not exists`,
          },
        ],
      })
    }
    let courseModel = await Course.findOne({
      name: course,
      university: universityModel.id,
    })
    let checkClientExist = await Client.findOne({
      email,
    })

    try {
      if (!marketingOfficer) {
        return res.status(400).json({
          errors: [
            {
              msg: `This Marketing Officer does not exists`,
            },
          ],
        })
      }

      if (!universityModel) {
        return res.status(400).json({
          errors: [
            {
              msg: `${university} does not exists`,
            },
          ],
        })
      }
      if (!courseModel) {
        return res.status(400).json({
          errors: [{ msg: `'${course}' does not exists at ${university}` }],
        })
      }

      if (checkClientExist) {
        return res.status(400).json({
          errors: [{ msg: `${name} ${surname} is already on our system` }],
        })
      }
      let applications = [
        { university: universityModel.id, course: courseModel.id },
      ]
      let client = new Client({
        name,
        surname,
        email,
        telephone,
        qualification,
        applications,
        comment,
        intake,
        submittedBy,
      })

      await client.save()
      return res.status(200).send({ msg: 'client added' })
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route  GET api/clients
// @desc   Get client info for dashboard
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const { email } = req.body
    console.log(email)

    const clients = await Client.find({ submittedBy: email })

    if (clients) res.json(clients)
    else res.status(404).json({ ok: false })
  } catch (e) {
    console.error(e.message)
    res.status(500).send({ errors: [{ msg: 'server error' }] })
  }
})

// @route DELETE a client
// @desc  Delete a client
// @access private
router.delete('/', auth, async (req, res) => {
  try {
    const client_email = req.body.email
    const agent_email = req.body.submittedBy
    const client = await Client.findOne({
      email: client_email,
      submittedBy: agent_email,
    })
    if (!client)
      return res.status(400).json({ errors: [{ msg: 'Student not found' }] })

    await client.remove()
    res.json({ msg: 'Student selected' })
  } catch (e) {
    console.error(e.message)
    res.status(500).send({ errors: [{ msg: 'Server error' }] })
  }
})

// @route  PUT client
// @desc   Archive a client
// @access private
router.put('/', auth, async (req, res) => {
  try {
    const client_email = req.body.email
    const agent_email = req.body.submittedBy
    const client = await Client.findOne({
      email: client_email,
      submittedBy: agent_email,
    })
    if (!client)
      return res.status(400).json({ errors: [{ msg: 'Student not found' }] })

    client.archived = !client.archived
    await client.save()
    res.json({ msg: `Student status is ${client.archived}` })
  } catch (e) {
    console.error(e.message)
    res.status(500).send({ errors: [{ msg: 'Server error' }] })
  }
})
module.exports = router
