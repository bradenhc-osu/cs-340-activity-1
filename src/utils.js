const config = require('./config');

module.exports = {
    /**
     * Allows use to cleanly use the ES7 async/await syntax inside of our Express handlers.
     * 
     * This function also provides error handling so that we don't need duplicated try/catch blocks inside our handlers
     * to use async/await.
     * 
     * @param {AsyncFunction} fn The asynchronous Express handler function. This can have three arguments (similar to
     * the Express handler): req, res, next.
     * @returns {Function} The Express handler function that will cleanly invoke our asynchronous function.
     */
    handleAsyncronously: fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next),

    /**
     * Generates the context object used to render views with Handlebars.
     * 
     * There are some global context values that should be applied to all views. These are set here. Additional context
     * can be passed to the function as an object.
     * 
     * @param {object} [obj] The page-specific context used to render a Handlebars template.
     * @returns {object} The context used to render the page.
     */
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
