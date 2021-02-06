'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _inventController = require('./invent-controller');

var controller = _interopRequireWildcard(_inventController);

var _itemModel = require('../../model/item-model');

var _itemModel2 = _interopRequireDefault(_itemModel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var multer = require('multer');
var multers3 = require('multer-s3');
var AWS = require('aws-sdk');


var s3 = new AWS.S3({
  accessKeyId: 'AKIAIDUWRZKMX74C5VLA',
  secretAccessKey: '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'
});

var uploadS3 = multer({
  storage: multers3({
    s3: s3,
    acl: 'public-read',
    bucket: 'divoitemsupd',
    metadata: function metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function key(req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname);
    }
  })
});

var jwt = require("express-jwt");
var jwksRsa = require("jwks-rsa");

var authConfig = {
  domain: "dev-xuvviu1o.auth0.com",
  audience: "http://localhost:8080"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-xuvviu1o.auth0.com
var checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://' + authConfig.domain + '/.well-known/jwks.json'
  }),

  audience: authConfig.audience,
  issuer: 'https://' + authConfig.domain + '/',
  algorithm: ["RS256"]
});

// usiere uncomment this and replace back
//router.post('/nest', checkJwt, controller.create);


router.post('/invent', uploadS3.fields([{ name: 'img1', maxcount: 1 }, { name: 'img2', maxcount: 1 }, { name: 'img3', maxcount: 1 }]), function (req, res) {

  console.log(req.files['img1'][0].location);

  var item = new _itemModel2.default({
    img_upd1: req.files['img1'][0].location,
    item_name: req.body.name,
    item_price: req.body.price,
    item_size: req.body.size,
    item_stock: req.body.stock,
    item_process: req.body.process,
    item_desc: req.body.desc,
    vendor: req.body.vendor,
    item_unique: req.body.unique,
    cat: req.body.cat
  });

  // if there is no image 2
  if (req.files['img2'] != undefined) {
    item.img_upd2 = req.files['img2'][0].location;
  } else {
    item.img_upd2 = null;
  }
  // if there is no image 3
  if (req.files['img3'] != undefined) {
    item.img_upd3 = req.files['img3'][0].location;
  } else {
    item.img_upd3 = null;
  }

  console.log(item);

  item.save(function (error) {
    if (error) {
      return console.log(error);
    }
    return res.status(201);
  });
});

router.get('/invent', checkJwt, controller.show);
router.delete('/invent/:id', checkJwt, controller.remove);

exports.default = router;