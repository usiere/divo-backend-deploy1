import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    img_upd1: String,
img_upd2: String,
img_upd3: String,
item_name: String,
item_price: String,
item_size: String,
item_stock: String,
item_process: String,
item_desc: String,
vendor:  String,
vendor_id: String,
// getting the data of the order
order_id: String,
order_cust: String,
order_qty: String,
order_date: String,
order_district:String,
order_address: String,
    delivered: {type: Boolean, default: false },
   
});
 

orderSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('order', orderSchema);



