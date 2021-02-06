'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.show = show;
exports.remove = remove;

var _itemModel = require('../../model/item-model');

var _itemModel2 = _interopRequireDefault(_itemModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function show(req, res) {
    // FIND ALL NECESSITIES
    _itemModel2.default.find({}, function (error, items) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ items: items });
    });
}

function remove(req, res) {
    _itemModel2.default.findOne({ _id: req.params.id }, function (error, item) {
        if (error) {
            return res.status(500).json();
        }
        if (!item) {
            return res.status(404).json();
        }

        _itemModel2.default.deleteOne({ _id: req.params.id }, function (error) {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}