
import Order from '../../model/order-model';



export function show(req, res) {
    // FIND ALL NECESSITIES
    Order.find({vendor: req.params.user}, (error, orders) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ orders: orders });
       
    })
}



