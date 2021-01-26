import Subscribe from '../models/Subscribe';

export default class SubscriptionController {
  async find(_, response) {
    const subscriptions = await Subscribe.find();

    return response.json(subscriptions);
  };
  
  async subscribe(request, response) {
    const { name, phone, email } = request.body;

    const findSubscription = await Subscribe.findOne({ email });

    if (findSubscription) {
      throw new Error('You are already subscribed!')
    }
    
    const subscription = await Subscribe.create({
      name,
      phone,
      email,
      subscribedAt: new Date(),
    })

    return response.json(subscription);
  }
};