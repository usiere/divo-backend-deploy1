'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;
exports.show = show;
exports.update = update;

var _userModel = require('../../model/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(req, res) {
    _userModel2.default.find({ email: req.params.vendor }, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        // if there is no user with the email
        if (data.length == 0) {

            var account = new Account({
                divoid: '',
                email: req.body.vendor,
                name: '',
                address: '',
                district: '',
                city: '',
                phone1: '',
                phone2: ''
            });

            user.save(function (error) {
                if (error) {
                    return console.log(error);
                }
                return res.status(201).json({ user: data });
            });
        }

        if (data.length !== 0) {
            console.log("User already has account registered");
        }
    });
}

function show(req, res) {
    // GET NECESSITY BY ID
    _userModel2.default.findOne({ email: req.params.id }, function (error, user) {
        if (error) {
            return res.status(505).json();
        }
        if (!user) {
            return res.status(200).json({ user: 'none' });
        }
        return res.status(200).json({ user: user });
    });
}

function update(req, res) {
    _userModel2.default.findOneAndUpdate({ email: req.body.email }, req.body).then(function (user) {
        res.send(req.body); // do a small check on this
    });

    console.log(req.body);
}