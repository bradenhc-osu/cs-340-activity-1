const express = require('express');
const { handleAsyncronously, createViewContext } = require('../utils');

const router = express.Router();

router.get(
    '/suppliers',
    handleAsyncronously(async (req, res) => {
        let [rows] = await req.db.query('SELECT * FROM Suppliers');

        res.render(
            'suppliers',
            createViewContext({
                pageName: 'List Suppliers',
                rows
            })
        );
    })
);

router.get(
    '/parts',
    handleAsyncronously(async (req, res) => {
        // TODO: Add query to select all the parts

        res.render(
            'parts',
            createViewContext({
                pageName: 'List Parts'
            })
        );
    })
);

module.exports = router;
