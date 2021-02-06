'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _itemputController = require('./itemput-controller');

var controller = _interopRequireWildcard(_itemputController);

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

router.put('/itemput', uploadS3.fields([{ name: 'img1', maxcount: 1 }, { name: 'img2', maxcount: 1 }, { name: 'img3', maxcount: 1 }]), function (req, res) {

  if (req.files['img1'] !== undefined) {
    console.log('usiere is always amazing1');
    //   Item.updateOne({_id: req.body.id}, {$set:{img_upd1 : req.files['img1'][0].location}})
    console.log(req.files['img1'][0].location);
    console.log(req.body.name);
    _itemModel2.default.updateOne({ _id: req.body.id }, { img_upd1: req.files['img1'][0].location }, function (err, result) {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        console.log(result);
        // res.json(result);
      }
    });
  }

  if (req.files['img2'] !== undefined) {
    console.log('usiere is always amazing1');
    //   Item.updateOne({_id: req.body.id}, {$set:{img_upd1 : req.files['img1'][0].location}})
    console.log(req.files['img2'][0].location);
    console.log(req.body.name);
    _itemModel2.default.updateOne({ item_name: req.body.name }, { img_upd2: req.files['img2'][0].location }, function (err, result) {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        console.log(result);
        // res.json(result);
      }
    });
  }

  if (req.files['img3'] !== undefined) {
    console.log('usiere is always amazing1');
    //   Item.updateOne({_id: req.body.id}, {$set:{img_upd1 : req.files['img1'][0].location}})
    console.log(req.files['img3'][0].location);
    console.log(req.body.name);
    _itemModel2.default.updateOne({ item_name: req.body.name }, { img_upd3: req.files['img3'][0].location }, function (err, result) {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        console.log(result);
        // res.json(result);
      }
    });
  }

  if (req.body.name !== undefined) {
    console.log('usiere is always amazing1');
    //   Item.updateOne({_id: req.body.id}, {$set:{img_upd1 : req.files['img1'][0].location}})
    console.log(req.body.name);
    _itemModel2.default.updateOne({ _id: req.body.id }, { item_name: req.body.name }, function (err, result) {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        console.log(result);
        // res.json(result);
      }
    });
  }

  if (req.body.price !== undefined) {
    console.log('usiere is always amazing1');
    //   Item.updateOne({_id: req.body.id}, {$set:{img_upd1 : req.files['img1'][0].location}})
    console.log(req.body.price);
    _itemModel2.default.updateOne({ _id: req.body.id }, { item_price: req.body.price }, function (err, result) {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        console.log(result);
        // res.json(result);
      }
    });
  }

  if (req.body.size !== undefined) {
    console.log('usiere is always amazing1');
    //   Item.updateOne({_id: req.body.id}, {$set:{img_upd1 : req.files['img1'][0].location}})
    console.log(req.body.size);
    _itemModel2.default.updateOne({ _id: req.body.id }, { item_size: req.body.size }, function (err, result) {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        console.log(result);
        // res.json(result);
      }
    });
  }

  if (req.body.stock !== undefined) {
    console.log('usiere is always amazing1');
    //   Item.updateOne({_id: req.body.id}, {$set:{img_upd1 : req.files['img1'][0].location}})
    console.log(req.body.stock);
    _itemModel2.default.updateOne({ _id: req.body.id }, { item_stock: req.body.stock }, function (err, result) {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        console.log(result);
        // res.json(result);
      }
    });
  }

  if (req.body.process !== undefined) {
    console.log('usiere is always amazing1');
    //   Item.updateOne({_id: req.body.id}, {$set:{img_upd1 : req.files['img1'][0].location}})
    console.log(req.body.process);
    _itemModel2.default.updateOne({ _id: req.body.id }, { item_process: req.body.process }, function (err, result) {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        console.log(result);
        // res.json(result);
      }
    });
  }

  if (req.body.desc !== undefined) {
    console.log('usiere is always amazing1');
    //   Item.updateOne({_id: req.body.id}, {$set:{img_upd1 : req.files['img1'][0].location}})
    console.log(req.body.desc);
    _itemModel2.default.updateOne({ _id: req.body.id }, { item_desc: req.body.desc }, function (err, result) {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        console.log(result);
        // res.json(result);
      }
    });
  }
});

exports.default = router;