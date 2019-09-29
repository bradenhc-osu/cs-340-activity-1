const express = require('express');
const { handleAsyncronously, createViewContext } = require('../utils');

const router = express.Router();

/**
 * Route for listing available parts.
 */
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

/**
 * Route for displaying the form that allows a user to add a new part.
 */
router.get(
    '/parts/add',
    handleAsyncronously(async (req, res) => {
        res.render('parts-add', createViewContext({ message: 'Add New Part' }));
    })
);

/**
 * Logic for handling a request to add a new part using form submission data.
 */
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
