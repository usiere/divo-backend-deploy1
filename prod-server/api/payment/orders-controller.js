'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.show = show;

var _orderModel = require('../../model/order-model');

var _orderModel2 = _interopRequireDefault(_orderModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function show(req, res) {
    // FIND ALL NECESSITIES
    _orderModel2.default.find({}, function (error, orders) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ orders: orders });
    });
}