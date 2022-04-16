const menus = {};

module.exports = {
  addNewMenu: function(menuId) {
    menus[menuId] = [];
  },

  removeMenu: function(menuId) {
    delete menus[menuId];
  },

  addOrders: function(menuId, orders) {
    orders.forEach((order) => {
      const newOrder = { order, count: 1 };
      let found = false;

      for (let i = 0; i < menus[menuId].length; i++) {
        if (order == menus[menuId][i].order) {
          menus[menuId][i].count += 1;
          found = true;

          break;
        }
      }

      if (!found) {
        menus[menuId].push(newOrder);
      }
    });
  },

  getMenu(menuId) {
    return menus[menuId];
  }
};