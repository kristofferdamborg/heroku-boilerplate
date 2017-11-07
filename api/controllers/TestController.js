module.exports = {
  index (req, res) {
    try {
      res.send('Is this thing on?')
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
  }
}