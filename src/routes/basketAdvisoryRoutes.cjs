const express = require('express');
const router = express.Router();
const basketAdvisoryController = require('../controllers/basketAdvisoryController.cjs');
const authMiddleware = require('../middlewares/authMiddleware.cjs');
const roleMiddleware = require('../middlewares/roleMiddleware.cjs');
const validate = require('../middlewares/validate.cjs');
const { addBasketAdvisorySchema } = require('../validators/basketAdvisoryValidator');


router.post('/', validate(addBasketAdvisorySchema), authMiddleware, roleMiddleware(['admin']), basketAdvisoryController.createBasketAdvisory);

router.get('/', authMiddleware, roleMiddleware(['admin', 'user']), basketAdvisoryController.basketAdvisory);

router.get('/:id', authMiddleware, roleMiddleware(['admin', 'user']), basketAdvisoryController.basketAdvisoryByID);

router.delete('/:id', authMiddleware, roleMiddleware(['admin']), basketAdvisoryController.deleteBasketAdvisoryByID);

router.patch('/:id',validate(addBasketAdvisorySchema) ,authMiddleware, roleMiddleware(['admin']), basketAdvisoryController.patchBasketAdvisoryByID);


module.exports = router;