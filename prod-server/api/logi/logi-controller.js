'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = show;
exports.update = update;
exports.create = create;

var _logiModel = require('../../model/logi-model');

var _logiModel2 = _interopRequireDefault(_logiModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function show(req, res) {
  _logiModel2.default.find({ vendor: req.params.vendor }, function (error, logi) {
    if (error) {
      return res.status(500).json();
    }
    console.log("this is logis" + logi);
    return res.status(200).json({ logis: logi });
  });
}

function update(req, res) {
  _logiModel2.default.findOneAndUpdate({ vendor: req.params.vendor }, req.body).then(function (logis) {
    res.send(req.body); // do a small check on this
  });

  console.log(req.body);
}

function create(req, res) {
  console.log(req.body);
  // finding the available documents saved 
  _logiModel2.default.find({ vendor: req.body.vendor }, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(data.length + 'this is data plus length');
    if (data.length == 0) {

      var logi = new _logiModel2.default({
        divo_hand: true,
        self_hand: false,
        vendor: req.body.vendor
      });

      logi.save(function (error) {
        if (error) {
          return console.log(error);
        }
        return res.status(201).json({ logis: data });
      });
    }

    if (data.length !== 0) {
      console.log("Vendor email has been registered for logistics");
    }
  });
}