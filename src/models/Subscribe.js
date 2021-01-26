import mongoose from 'mongoose';

const SubscribeSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subscribedAt: Date,
});

const Subscribe = mongoose.model('Subscriber', SubscribeSchema);

export default Subscribe;