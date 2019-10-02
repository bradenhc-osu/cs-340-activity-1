const express = require('express');
const { createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for listing part suppliers.
 */
router.get('/parts', (req, res, next) => {
    // TODO: implement the selection query
    res.render(
        'parts',
        createViewContext({
            pageName: 'List Parts',
            rows: []
        })
    );
});

/**
 * Route for displaying the form used to add a new part supplier.
 */
router.get('/parts/add', (req, res) => {
    res.render('parts-add', createViewContext({ message: 'Add New Part' }));
});

/**
 * Logic for actually adding a new part supplier using data from a form submission.
 */
router.post('/parts/add', (req, res, next) => {
    let context = createViewContext();

    // TODO: add the insertion query
    context.message = 'Add not implemented yet!';
    res.render('suppliers-add', context);
});

module.exports = router;
