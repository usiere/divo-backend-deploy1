'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = show;
exports.update = update;
exports.create = create;

var _accountModel = require('../../model/account-model');

var _accountModel2 = _interopRequireDefault(_accountModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function show(req, res) {
  _accountModel2.default.find({ vendor: req.params.vendor }, function (error, account) {
    if (error) {
      return res.status(500).json();
    }
    console.log("this is vendors bank account" + account);
    return res.status(200).json({ account: account });
  });
}

function update(req, res) {
  _accountModel2.default.findOneAndUpdate({ vendor: req.params.vendor }, req.body).then(function (account) {
    res.send(req.body); // do a small check on this
  });

  console.log(req.body);
}

function create(req, res) {
  console.log(req.body);
  // finding the available documents saved 
  _accountModel2.default.find({ vendor: req.body.vendor }, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(data.length + 'this is data plus length');
    if (data.length == 0) {

      var account = new _accountModel2.default({
        bank: '',
        number: '',
        vendor: req.body.vendor
      });

      account.save(function (error) {
        if (error) {
          return console.log(error);
        }
        return res.status(201).json({ account: data });
      });
    }

    if (data.length !== 0) {
      console.log("Vendors bank details are already saved");
    }
  });
}