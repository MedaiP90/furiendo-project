const menus = {};

module.exports = {
  addNewMenu: function(menuId) {
    menus[menuId] = [];
  },

  removeMenu: function(menuId) {
    delete menus[menuId];
  },

  addOrders: function(menuId, orders) {
    if (menus[menuId] == undefined) return `${menuId} does not exist`;
  
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

    return undefined;
  },

  getMenu(menuId) {
    const finalMenu = menus[menuId];

    finalMenu.sort((o1, o2) => {
      const order1 = o1.order.toUpperCase();
      const order2 = o2.order.toUpperCase();

      return order1 - order2;
    });

    return finalMenu;
  }
};
