
import Cat from '../../model/cat-model';
import moment from 'moment';
const { body } = require('express-validator');



export function create(req, res) {
 console.log(req.body)
         const cat = new Cat({            
             name : req.body.cat_name,
             field : req.body.cat_field,
             desc: req.body.cat_desc,
             address: req.body.cat_address,
             phone: req.body.cat_phone,
             user:  req.body.user,
             unique: req.body.cat_unique,
             date : moment().format("MMM Do YY")

         });           

        cat.save(error => {
            if (error) {
                return console.log(error);
              
            }
            return res.status(201).json({ cat: cat });
    })
}


export function index(req, res) {
    // FIND ALL NECESSITIES
    Cat.find({ user: req.params.user}, (error, cats) => {
        console.log(req.params.user)
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ cats: cats });
       
    })
 
}

// finding one 
export function getone(req, res) {
    Cat.findOne({ _id: req.params.id }, (error, cat) => {
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

export function remove(req, res) {
    Cat.findOne({ _id: req.params.id }, (error, cat) => {
        if (error) {
            return res.status(500).json();
        }
        if (!cat) {
            return res.status(404).json();
        }
       
       Cat.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}


// update Category
// Using a different approach

export function update(req, res) {
  Cat.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then(function(cat){
      res.send(req.body); // do a small check on this
  });

  console.log(req.body)
}

export function unique(req, res) {
    Cat.findOne({ name: req.params.name }, (error, cat) => {
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