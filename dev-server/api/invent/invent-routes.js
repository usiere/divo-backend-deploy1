import express from 'express';
const router = express.Router();
import * as controller from './invent-controller';
const multer  = require('multer');
const multers3 = require('multer-s3');
const AWS = require('aws-sdk');
import Item from '../../model/item-model';


const s3 = new AWS.S3({
  accessKeyId: 'AKIAIDUWRZKMX74C5VLA',
  secretAccessKey: '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'
});



const uploadS3 = multer({
storage: multers3({
  s3: s3,
  acl: 'public-read',
  bucket: 'divoitemsupd',
  metadata: (req, file, cb) => {
    cb(null, {fieldName: file.fieldname})
  },
  key: (req, file, cb) => {
    cb(null, Date.now().toString() + '-' + file.originalname)
  }
})
});


const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const authConfig = {
    domain: "dev-xuvviu1o.auth0.com",
    audience: "http://localhost:8080"
  };

  
  // Define middleware that validates incoming bearer tokens
// using JWKS from dev-xuvviu1o.auth0.com
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),
  
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
  });

// usiere uncomment this and replace back
//router.post('/nest', checkJwt, controller.create);



router.post('/invent', uploadS3.fields([{name: 'img1', maxcount: 1},
{name: 'img2', maxcount: 1},
{name: 'img3', maxcount: 1}
]),(req, res) => {



  console.log(req.files['img1'][0].location);

    const item = new Item({
      img_upd1 : req.files['img1'][0].location,
      item_name : req.body.name,
      item_price : req.body.price,
      item_size : req.body.size,
      item_stock : req.body.stock,
      item_process : req.body.process,
      item_desc : req.body.desc,
      vendor : req.body.vendor,
      item_unique: req.body.unique,
      cat: req.body.cat
    })

  // if there is no image 2
    if (req.files['img2'] != undefined){
      item.img_upd2 = req.files['img2'][0].location
    } else{
      item.img_upd2 = null
    }
// if there is no image 3
    if (req.files['img3'] != undefined){
      item.img_upd3 = req.files['img3'][0].location
    } else{
      item.img_upd3 = null
    }


    console.log(item)

    item.save(error => {
      if (error) {
          return console.log(error);
      }
      return res.status(201);
})

});

router.get('/invent',  checkJwt, controller.show);
router.delete('/invent/:id', checkJwt, controller.remove)


export default router;





