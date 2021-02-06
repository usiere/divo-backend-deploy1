"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = show;
exports.update = update;
exports.create = create;

var _logisModel = require("../../model/logis-model");

var _logisModel2 = _interopRequireDefault(_logisModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function show(req, res) {
  _logisModel2.default.find({ vendor: req.params.vendor }, function (error, logis) {
    if (error) {
      return res.status(500).json();
    }
    console.log(logis);
    // return res.status(200).json({ logis: logis });

  });
}
function update(req, res) {
  _logisModel2.default.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (logis) {
    res.send(req.body); // do a small check on this
  });
}

function create(req, res) {
  console.log(req.body);
  // finding the available documents saved 
  _logisModel2.default.find({ vendor: req.body.vendor }, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    if (data.length == 0) {
      console.log("Vendor email has been registered for logistics");
      return;
    }

    if (data.length !== 0) {
      var logis = new _logisModel2.default({
        divo_hand: true,
        self_hand: false,
        vendor: req.body.email
      });

      logis.save(function (error) {
        if (error) {
          return console.log(error);
        }
        return res.status(201).json({ logis: logis });
      });
    }
  });
}