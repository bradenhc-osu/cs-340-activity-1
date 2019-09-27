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

module.exports = router;