
import Item from '../../model/item-model';


export function show(req, res) {
    // FIND ALL NECESSITIES
    Item.find({}, (error, items) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ items: items });
       
    })
 
}

export function remove(req, res) {
    Item.findOne({ _id: req.params.id }, (error, item) => {
        if (error) {
            return res.status(500).json();
        }
        if (!item) {
            return res.status(404).json();
        }
       
       Item.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}