import regRoutes from './api/register/register-routes';
import userRoutes from './api/user/users-routes';
import authRoutes from './api/auth/auth-routes';
import inventRoutes from './api/invent/invent-routes';
import orderRoutes from './api/order/orders-routes';
import recurRoutes from './api/recur/recurs-routes';
import coutRoutes from './api/cout/cout-routes';
import catRoutes from './api/cat/cat-routes';
import itemvRoutes from './api/itemv/itemv-routes';
import paymentRoutes from './api/payment/payments-routes';
import itemputRoutes from './api/itemput/itemput-routes';
import logiRoutes from './api/logi/logi-routes';
import accountRoutes from './api/account/account-routes';


export function registerRoutes(app) {
    app.use('/api', userRoutes);
    app.use('/api', inventRoutes);
    app.use('/api', orderRoutes);
    app.use('/api', recurRoutes);
    app.use('/api', coutRoutes);
    app.use('/api', catRoutes);
    app.use('/api', itemvRoutes);
    app.use('/api', paymentRoutes);
    app.use('/api', itemputRoutes);
    app.use('/api', logiRoutes);
    app.use('/api', accountRoutes);
}