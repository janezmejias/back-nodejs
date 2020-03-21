const connectionPool = require('../../api/connectionPool');
const queryConstants = require('../../api/queryConstants');
const URI = require('../../api/routersURI');

const pool = connectionPool.getPool()

module.exports = function(app) {

    app.get(URI.ADDRESS, function(req, res) {
        pool.query(queryConstants.ALL_ADDRESS, function(err, rows, fields) {
            res.json(rows)
        })
    })

    app.get(URI.ADDRESS + '/:id', function(req, res) {
        pool.query(queryConstants.FIND_ADDRESS_BY, [req.params.id], function(err, rows, fields) {
            res.json(rows)
        })
    })

    app.post(URI.ADDRESS, function(req, res) {
        res.json(req.body)
    })

    app.put(URI.ADDRESS, function(req, res) {
        res.json(req.body)
    })

    app.delete(URI.ADDRESS, function(req, res) {
        res.json(req.body)
    })

}