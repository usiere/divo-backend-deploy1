'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accountSchema = new _mongoose2.default.Schema({

    bank: String,
    number: Number,
    vendor: String,
    Date: { type: Date, default: Date.now } //Date added
});
accountSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

exports.default = _mongoose2.default.model('accounts', accountSchema);