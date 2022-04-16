const { v4: uuidv4 } = require('uuid');

/**
 * Exports main routes configuration.
 */
module.exports = {
  add: function(app, fakeDb, baseUrl) {
    /**
     * Returns a menu UUID.
     */
    app.get(baseUrl + '/menu', (_, res) => {
      const menuId = uuidv4();

      fakeDb.addNewMenu(menuId);
      res.status(200).send({ menuId }).end();
    });

    /**
     * Returns the normalized menu.
     */
    app.get(baseUrl + '/menu/:menuId', (req, res) => {
      const query = req.params.menuId;

      if (query == undefined) {
        res.status(400).send('Parameter `menuId` is required').end();

        return;
      }

      const menu = fakeDb.getMenu(query);

      if (menu == undefined) {
        res.status(404).send(`The menu "${query}" is already closed.`).end();

        return;
      }

      fakeDb.removeMenu(query);
      res.status(200).send({ menu }).end();
    });

    /**
     * Add orders to a menu.
     */
    app.post(baseUrl + '/menu/:menuId', (req, res) => {
      const query = req.params.menuId;

      if (query == undefined) {
        res.status(400).send('Parameter `menuId` is required').end();

        return;
      }

      const orders = req.body?.orders || undefined;

      if (orders == undefined) {
        res.status(400).send('Parameter `orders` is required').end();

        return;
      }

      fakeDb.addOrders(query, orders);
      res.status(200).end();
    });
  }
};
