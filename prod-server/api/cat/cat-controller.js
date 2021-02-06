'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;
exports.index = index;
exports.getone = getone;
exports.remove = remove;
exports.update = update;
exports.unique = unique;

var _catModel = require('../../model/cat-model');

var _catModel2 = _interopRequireDefault(_catModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('express-validator'),
    body = _require.body;

function create(req, res) {
    console.log(req.body);
    var cat = new _catModel2.default({
        name: req.body.cat_name,
        field: req.body.cat_field,
        desc: req.body.cat_desc,
        address: req.body.cat_address,
        phone: req.body.cat_phone,
        user: req.body.user,
        unique: req.body.cat_unique,
        date: (0, _moment2.default)().format("MMM Do YY")

    });

    cat.save(function (error) {
        if (error) {
            return console.log(error);
        }
        return res.status(201).json({ cat: cat });
    });
}

function index(req, res) {
    // FIND ALL NECESSITIES
    _catModel2.default.find({ user: req.params.user }, function (error, cats) {
        console.log(req.params.user);
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ cats: cats });
    });
}

// finding one 
function getone(req, res) {
    _catModel2.default.findOne({ _id: req.params.id }, function (error, cat) {
        if (error) {
            return res.status(500).json();
        }
        if (!cat) {
            return res.status(404).json();
        }
        return res.status(200).json({ cat: cat });
    });
}

// deleting category

function remove(req, res) {
    _catModel2.default.findOne({ _id: req.params.id }, function (error, cat) {
        if (error) {
            return res.status(500).json();
        }
        if (!cat) {
            return res.status(404).json();
        }

        _catModel2.default.deleteOne({ _id: req.params.id }, function (error) {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

// update Category
// Using a different approach

function update(req, res) {
    _catModel2.default.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (cat) {
        res.send(req.body); // do a small check on this
    });

    console.log(req.body);
}

function unique(req, res) {
    _catModel2.default.findOne({ name: req.params.name }, function (error, cat) {
        if (error) {
            return res.status(500).json();
        }
        if (cat) {
            throw new Error('Username is not available');
        }
        if (!cat) {
            // return Promise('Username is available');

        }
    });
}

// to use for express validator stuff
// app.post('/user', body('name').custom(value => {
//     return Cat.findOne({unique = req.body}).then(user => {
//       if (user) {
//         return Promise.reject('E-mail already in use');
//       }
//     });
//   }), (req, res) => {
//     // Handle the request
//   });