'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _itemvModel = require('../../model/itemv-model');

var _itemvModel2 = _interopRequireDefault(_itemvModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const upload = require("../../services/image-upload");
// const singleUpload = upload.single("image");


// Primarily for the vuex aspect

// NB: This only handles the vues aspect on the client side

function index(req, res) {
  // console.log(req.body) ; commenting this to prevent terminal from crashing
  var item = new _itemvModel2.default({
    img_upd1: req.body.img_upd1,
    img_upd2: req.body.img_upd2,
    img_upd3: req.body.img_upd3,
    item_name: req.body.item_name,
    item_price: req.body.item_price,
    item_size: req.body.item_size,
    item_stock: req.body.item_stock,
    item_process: req.body.item_process,
    item_desc: req.body.item_desc,
    user: req.body.user,
    date: (0, _moment2.default)().format("MMM Do YY")

  });

  item.save(function (error) {
    if (error) {
      return console.log(error);
    }
    return res.status(201).json({ item: item });
  });

  //handling the main uploading 

}