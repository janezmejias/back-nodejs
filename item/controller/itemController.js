const connectionPool = require('../../api/connectionPool');
const queryConstants = require('../../api/queryConstants');
const URI = require('../../api/routersURI');

const pool = connectionPool.getPool()

module.exports = function (app) {

  app.get(URI.ITEM, function (req, res) {
    pool.query(queryConstants.allProducts, function (err, rows, fields) {
      res.json(rows)
    })
  })

  app.get(URI.ITEM + '/:id', function (req, res) {
    pool.query(queryConstants.find_by, [req.params.id], function (err, rows, fields) {
      res.json(rows)
    })
  })

  app.post(URI.ITEM, function (req, res) {
    res.json(req.body)
  })

  app.put(URI.ITEM, function (req, res) {
    res.json(req.body)
  })

  app.delete(URI.ITEM, function (req, res) {
    res.json(req.body)
  })

}