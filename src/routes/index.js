import { Router } from 'express'
import SubscriptionController from '../controller/SubscriptionController';

const subscriptionController = new SubscriptionController();

const routes = Router();

routes.get('/subscriptions', subscriptionController.find);
routes.post('/subscribe', subscriptionController.subscribe);

export default routes;