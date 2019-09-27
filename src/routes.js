const express = require('express');
const { handleAsyncronously, createViewContext } = require('./utils');

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
    '/suppliers/add',
    handleAsyncronously(async (req, res) => {
        res.render('suppliers-add', createViewContext({ message: 'Add New Supplier' }));
    })
);

router.post(
    '/suppliers/add',
    handleAsyncronously(async (req, res) => {
        let context = createViewContext();

        // Make sure a supplier with the provided SID doesn't already exist
        let [result] = await req.db.query('SELECT * FROM Suppliers WHERE sid = ?', [req.body.sid]);
        if (result.length) {
            // Already exists
            context.message = `Can't create supplier with SID ${req.body.sid}: Already Exists`;
        } else {
            // Doesn't exist, create it
            await req.db.execute('INSERT INTO Suppliers (sid, sname, city) VALUES (?,?,?)', [
                req.body.sid,
                req.body.sname,
                req.body.city
            ]);
            context.message = 'Record added successfully';
        }
        res.render('suppliers-add', context);
    })
);

router.get(
    '/parts',
    handleAsyncronously(async (req, res) => {
        // TODO: Add query to select all the parts
        let rows = [];

        res.render(
            'parts',
            createViewContext({
                pageName: 'List Parts',
                rows
            })
        );
    })
);

router.get(
    '/parts/add',
    handleAsyncronously(async (req, res) => {
        res.render('parts-add', createViewContext({ message: 'Add New Part' }));
    })
);

router.post(
    '/parts/add',
    handleAsyncronously(async (req, res) => {
        // TODO: Implement adding a new part. See adding a supplier (above) for reference.
        let context = createViewContext();
        context.message = `Can't add a new part: not yet implemented`;
        res.render('parts-add', context);
    })
);

module.exports = router;
