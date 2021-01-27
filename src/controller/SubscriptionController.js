import Subscribe from '../models/Subscribe';
import MailProvider from '../providers/MailProvider';

export default class SubscriptionController {
  async find(_, response) {
    const subscriptions = await Subscribe.find();

    return response.json(subscriptions);
  };
  
  async subscribe(request, response) {
    const mailProvider = new MailProvider();

    const { name, phone, email } = request.body;

    const findSubscription = await Subscribe.findOne({ email });

    if (findSubscription) {
      throw new Error('You are already subscribed!');
    }
    
    const subscription = await Subscribe.create({
      name,
      phone,
      email,
      subscribedAt: new Date(),
    })

    await mailProvider.sendMail({name, email});

    return response.json(subscription);
  }
};