const all_products  = 'SELECT * FROM dbmaster.product';
const find_by   = 'SELECT * FROM dbmaster.product WHERE id = ?';

exports.allProducts = all_products;
exports.find_by = find_by;