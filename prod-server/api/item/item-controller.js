'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = show;
exports.create = create;

var _itemModel = require('../../model/item-model');

var _itemModel2 = _interopRequireDefault(_itemModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const upload = require("../../services/image-upload");
// const singleUpload = upload.single("image");

function show(req, res) {}
// console.log(req)

// Primarily for the vuex aspect
function create(req, res, next) {
  console.log('vi;osuij');
}

// singleUpload(req, res, function (err) {
//   if (err) {
//     return res.json({
//       success: false,
//       errors: {
//         title: "Image Upload Error",
//         detail: err.message,
//         error: err,
//       },
//     });
//   }

// let update = { profilePicture: req.file.location };

//  console.log(req)
// });