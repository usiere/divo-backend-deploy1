import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
amount: Number,
item: String,
qty: String,
customer: String,
order_id: String,
vendor: String,
Date: { type: Date, default: Date.now }, //Date added
});
 

paymentSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('payment', paymentSchema);






