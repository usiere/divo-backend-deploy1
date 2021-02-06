'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;

var _paymentModel = require('../../model/payment-model');

var _paymentModel2 = _interopRequireDefault(_paymentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
    // FIND ALL NECESSITIES
    _paymentModel2.default.find({}, function (error, payments) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ payment: payments });
    });
    console.log(payments);
}