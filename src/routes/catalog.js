const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for listing part suppliers.
 */
router.get('/catalog', (req, res, next) => {
    req.db.query(
        `
        SELECT p.pname, p.color, s.sname, s.city, c.price
        FROM Catalog c, Parts p, Suppliers s
        WHERE c.sid = s.sid AND c.pid = p.pid
        ORDER BY p.pname, c.price, s.sname
        `,
        (err, results) => {
            if (err) return next(err);
            res.render(
                'catalog',
                createViewContext({
                    pageName: 'View Catalog',
                    rows: results
                })
            );
        }
    );
});

module.exports = router;
