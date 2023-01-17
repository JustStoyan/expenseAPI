import { Router } from 'express';
const router = Router();

import authController from './controllers/authController.js';
import expenseController from './controllers/expenseController.js';





router.use('/expenses', expenseController);
router.use(authController);
router.use('*', (req, res) => {
    res.status(404).send('Error, forbidden page')
});



router.post('/login', (req, res) => {
    res.json({ page: "login" })
})

router.get('/expenses', (req, res) => {
    res.json([{ name: "Bank", price: "120" }])
})

router.post('/expenses/add', (req, res) => {
    res.json({ name: "Bank", price: "120" })
})

router.put('/expenses/:expenseId', (req, res) => {
    res.json({ name: "Bank", price: "120" })
})

router.all('/', (req, res) => {
    res.status(403).json({ message: "access forbidden" })
})

export default router;

// wcsb1DLpJCktEBdN