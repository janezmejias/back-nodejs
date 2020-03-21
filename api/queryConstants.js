//###############################################################################
const ALL_ITEMS = 'SELECT * FROM dbmaster.product';
const FIND_ITEM_BY = 'SELECT * FROM dbmaster.product WHERE id = ?';

//###############################################################################
const ALL_ADDRESS = 'SELECT * FROM dbmaster.address';
const FIND_ADDRESS_BY = 'SELECT * FROM dbmaster.address WHERE id = ?';



//###############################################################################
exports.ALL_ITEMS = ALL_ITEMS;
exports.FIND_ITEM_BY = FIND_ITEM_BY;
exports.ALL_ADDRESS = ALL_ADDRESS;
exports.FIND_ADDRESS_BY = FIND_ADDRESS_BY;