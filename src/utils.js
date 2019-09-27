const config = require('./config');

module.exports = {
    handleAsyncronously: fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next),

    createViewContext: obj =>
        Object.assign(
            {
                username: config.onid,
                menuitems: [
                    { location: '/suppliers', page: 'List Suppliers' },
                    { location: '/suppliers/add', page: 'Add Supplier' },
                    { location: '/parts', page: 'List Parts' },
                    { location: '/parts/add', page: 'Add Part' }
                ]
            },
            obj
        )
};
