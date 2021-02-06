'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerRoutes = registerRoutes;

var _registerRoutes = require('./api/register/register-routes');

var _registerRoutes2 = _interopRequireDefault(_registerRoutes);

var _usersRoutes = require('./api/user/users-routes');

var _usersRoutes2 = _interopRequireDefault(_usersRoutes);

var _authRoutes = require('./api/auth/auth-routes');

var _authRoutes2 = _interopRequireDefault(_authRoutes);

var _inventRoutes = require('./api/invent/invent-routes');

var _inventRoutes2 = _interopRequireDefault(_inventRoutes);

var _ordersRoutes = require('./api/order/orders-routes');

var _ordersRoutes2 = _interopRequireDefault(_ordersRoutes);

var _recursRoutes = require('./api/recur/recurs-routes');

var _recursRoutes2 = _interopRequireDefault(_recursRoutes);

var _coutRoutes = require('./api/cout/cout-routes');

var _coutRoutes2 = _interopRequireDefault(_coutRoutes);

var _catRoutes = require('./api/cat/cat-routes');

var _catRoutes2 = _interopRequireDefault(_catRoutes);

var _itemvRoutes = require('./api/itemv/itemv-routes');

var _itemvRoutes2 = _interopRequireDefault(_itemvRoutes);

var _paymentsRoutes = require('./api/payment/payments-routes');

var _paymentsRoutes2 = _interopRequireDefault(_paymentsRoutes);

var _itemputRoutes = require('./api/itemput/itemput-routes');

var _itemputRoutes2 = _interopRequireDefault(_itemputRoutes);

var _logiRoutes = require('./api/logi/logi-routes');

var _logiRoutes2 = _interopRequireDefault(_logiRoutes);

var _accountRoutes = require('./api/account/account-routes');

var _accountRoutes2 = _interopRequireDefault(_accountRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
    app.use('/api', _usersRoutes2.default);
    app.use('/api', _inventRoutes2.default);
    app.use('/api', _ordersRoutes2.default);
    app.use('/api', _recursRoutes2.default);
    app.use('/api', _coutRoutes2.default);
    app.use('/api', _catRoutes2.default);
    app.use('/api', _itemvRoutes2.default);
    app.use('/api', _paymentsRoutes2.default);
    app.use('/api', _itemputRoutes2.default);
    app.use('/api', _logiRoutes2.default);
    app.use('/api', _accountRoutes2.default);
}