const express = require('express');
const router = express.Router();
const advisoryController = require('../controllers/advisoryController.cjs');
const authMiddleware = require('../middlewares/authMiddleware.cjs');
const roleMiddleware = require('../middlewares/roleMiddleware.cjs');
const validate = require('../middlewares/validate.cjs');
const { addAdvisorySchema } = require('../validators/advisoryValidator');


router.post('/',validate(addAdvisorySchema),authMiddleware,roleMiddleware(['admin']),advisoryController.createAdvisory);

router.get('/',authMiddleware,roleMiddleware(['admin', 'user']),advisoryController.advisory);

router.get('/getAdvisoryByID',authMiddleware,roleMiddleware(['admin', 'user']),advisoryController.advisoryByID);

router.delete('/:id', authMiddleware, roleMiddleware(['admin']),advisoryController.deleteAdvisoryByID);

router.patch('/:id',validate(addAdvisorySchema) ,authMiddleware, roleMiddleware(['admin']),advisoryController.patchAdvisoryByID);

module.exports = router;