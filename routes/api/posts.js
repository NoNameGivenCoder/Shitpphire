const express = require('express')
const router = express.Router()

const con = require('../../mysqlConnection')

router.post('/post', function(req, res) {
    const token = req.cookies['token']
    const content = req.get('content')
    const communityId = req.get('community-id')

    console.log(token, content)

    con.query(`SELECT * FROM account WHERE token='${token}'`, function(err, result, fields) {
        if (err) throw {err}
        console.log(result)

        con.query(`INSERT INTO post (content, userId, nnid) VALUES ("${content}", "${result[0].id}", "${result[0].nnid}")`, function(err, result, fields) {
            if (err) throw {err}

            console.log("[MYSQL] Created new post!".blue)
            res.sendStatus(200)
        })
    })
})

router.get('/posts', function(req, res) {
    const limit = req.query['limit']

    if (limit) {
        con.query('SELECT * FROM post LIMIT ' + limit + ' ORDER BY `id` desc', function (err, result, fields) {
            if (err) { throw err }
            res.send(result)
        })
    } else {
        con.query(`SELECT * FROM post`, function (err, result, fields) {
            res.send(result)
        })
    }
})

module.exports = router