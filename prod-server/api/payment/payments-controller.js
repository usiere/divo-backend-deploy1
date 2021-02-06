'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.show = show;

var _paymentModel = require('../../model/payment-model');

var _paymentModel2 = _interopRequireDefault(_paymentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function show(req, res) {
    // FIND ALL NECESSITIES
    _paymentModel2.default.find({ vendor: req.params.user }, function (error, payments) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ payments: payments });
    });
}