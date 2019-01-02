var InvestigationModel = require('../models/investigation')
const passport = require('passport')

module.exports = function(app, db) {
  // Fetch all investigations
  app.get('/api/investigation', async (req, res) => {
    try {
      let investigations = await InvestigationModel.getAllInvestigations()
      res.send({investigations: investigations})
    } catch (e) {
      res.status(500).send({ error: 'Error while fetching investigations' })
    }
  })
  
  // Create new investigation
  app.post('/api/investigation', passport.authenticate('jwt', {session: false}), async (req, res) => {
    var newInvestigation = {
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      url: req.body.url
    }
    try {
      let investigation = await InvestigationModel.addInvestigation(newInvestigation)
      res.send({
        success: true,
        investigation,
        message: 'Investigation saved successfully!'
      })
    } catch (e) {
      res.status(500).send({ error: 'Error while saving investigation' })
    }
  })

  // Fetch single investigation
  app.get('/api/investigation/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let investigation = await InvestigationModel.getInvestigationById(req.params.id)
      res.send(investigation)
    } catch (e) {
      res.status(500).send({ error: 'Error while fetching an investigation' })
    }
  })
  
  // Update an investigation
  app.put('/api/investigation/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let investigation = await InvestigationModel.getInvestigationById(req.params.id)
      investigation.name = req.body.name
      investigation.latitude = req.body.latitude
      investigation.longitude = req.body.longitude
      investigation.url = req.body.url
      investigation.save()
      res.send({ success: true })
    } catch (e) {
      res.status(500).send({ error: 'Error while updating an investigation' })
    } 
  })

  // Delete an investigation
  app.delete('/api/investigation/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let investigation = await InvestigationModel.deleteInvestigation({_id: req.params.id})
      res.send({ success: true })
    } catch (e) {
      res.status(500).send({ error: 'Error while deleting an investigation' })
    }
  })
};