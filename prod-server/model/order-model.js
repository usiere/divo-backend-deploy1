'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderSchema = new _mongoose2.default.Schema({
    img_upd1: String,
    img_upd2: String,
    img_upd3: String,
    item_name: String,
    item_price: String,
    item_size: String,
    item_stock: String,
    item_process: String,
    item_desc: String,
    vendor: String,
    vendor_id: String,
    // getting the data of the order
    order_id: String,
    order_cust: String,
    order_qty: String,
    order_date: String,
    order_district: String,
    order_address: String,
    delivered: { type: Boolean, default: false }

});

orderSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

exports.default = _mongoose2.default.model('order', orderSchema);