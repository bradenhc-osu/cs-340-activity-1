const express = require('express');
const { handleAsyncronously, createViewContext } = require('../utils');

const router = express.Router();

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
