
// NB: This only handles the vues aspect on the client side

import Itemv from '../../model/itemv-model';
import moment from 'moment';

// const upload = require("../../services/image-upload");
// const singleUpload = upload.single("image");


// Primarily for the vuex aspect
export function index(req, res) {
  // console.log(req.body) ; commenting this to prevent terminal from crashing
          const item = new Itemv({            
            img_upd1: req.body.img_upd1,
            img_upd2: req.body.img_upd2,
            img_upd3: req.body.img_upd3,
            item_name: req.body.item_name,
            item_price: req.body.item_price,
            item_size: req.body.item_size,
            item_stock: req.body.item_stock,
            item_process: req.body.item_process,
            item_desc: req.body.item_desc,
              user:  req.body.user,
              date : moment().format("MMM Do YY")
 
          });           
       


         item.save(error => {
             if (error) {
                 return console.log(error);
               
             }
             return res.status(201).json({ item: item });
     })


//handling the main uploading 


    }

 



