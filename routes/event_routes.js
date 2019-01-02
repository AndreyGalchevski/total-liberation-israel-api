var EventModel = require('../models/event')
const multer = require('multer')
const upload = multer({ dest: 'tmp/' })
const cloudinary = require('cloudinary')
const fs = require('fs')
const passport = require('passport')

module.exports = function(app, db) {
  // Fetch all events
  app.get('/api/event', async (req, res) => {
    try {
      let events = await EventModel.getAllEvents()
      res.send({events: events})
    } catch (e) {
      res.status(500).send({ error: 'Error while fetching events' })
    }
  })
  
  // Create new event
  app.post('/api/event', passport.authenticate('jwt', {session: false}), async (req, res) => {
    var newEvent = {
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      fbPage: req.body.fbPage
    }
    try {
      let event = await EventModel.addEvent(newEvent)
      res.send({
        success: true,
        event,
        message: 'Event saved successfully!'
      })
    } catch (e) {
      res.status(500).send({ error: 'Error while saving event' })
    }
  })
  
  // Upload a picture
  app.patch('/api/event/:id/image', upload.fields([{ name: 'eventImg', maxCount: 1 }]), passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let result = await cloudinary.v2.uploader.upload(req.files.eventImg[0].path, {
        folder: 'alf-israel/events'
      })
      
      fs.unlink(req.files.eventImg[0].path)
      
      let updatedFields = {
        image: result.secure_url
      }
      
      let updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, updatedFields, { new: true })
      
      res.json({ success: true, updatedEvent })
    } catch (e) {
      res.status(500).send({ error: 'Image upload failed.' })
      return
    }
  })
  // Fetch single event
  app.get('/api/event/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let event = await EventModel.getEventById(req.params.id)
      res.send(event)
    } catch (e) {
      res.status(500).send({ error: 'Error while fetching an event' })
    }
  })
  
  // Update an event
  app.put('/api/event/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let event = await EventModel.getEventById(req.params.id)
      event.title = req.body.title
      event.date = req.body.date
      event.description = req.body.description
      event.fbPage = req.body.fbPage
      event.save()
      res.send({ success: true })
    } catch (e) {
      res.status(500).send({ error: 'Error while updating an event' })
    } 
  })

    // Delete a picture
  app.delete('/api/event/:id/image', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let event = await EventModel.getEventById(req.params.id)
      let public_id = 'alf-israel/events/' + event.image.substr(-24, 20)
      let result = await cloudinary.v2.uploader.destroy(public_id)
      res.send({ success: true })
    } catch (e) {
      res.status(500).send({ error: 'Image delete failed.' })
      return
    }
  })

  // Delete an event
  app.delete('/api/event/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let event = await EventModel.deleteEvent({_id: req.params.id})
      let public_id = 'alf-israel/events/' + event.image.substr(-24, 20)
      let result = await cloudinary.v2.uploader.destroy(public_id)
      res.send({ success: true })
    } catch (e) {
      res.status(500).send({ error: 'Error while deleting an event' })
    }
  })
};