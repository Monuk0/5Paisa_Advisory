const  {STATUS}  = require('../services/constant.service.cjs');
const BasketAdvisory = require('../models/basketAdvisorySchema.cjs');
const logger = require('./../utils/logger.cjs');

exports.createBasketAdvisory = async (req, res) => {
    const basketAdvisory = await BasketAdvisory.create(req.body);
    res.status(STATUS.CREATED).json({massage : 'Advisory created',basketAdvisory})
};

exports.basketAdvisory = async (req, res) => {
        const basketAdvisory = await BasketAdvisory.find();
        res.status(STATUS.OK).json(basketAdvisory)
};

exports.basketAdvisoryByID = async (req, res) => {
   try {
       const { id } = req.params;
       const basketAdvisory = await BasketAdvisory.findById(id);
       if (!basketAdvisory) {
         return res.status(STATUS.NOT_FOUND).json({ message: 'Basket Advisory not found' });
       }
       res.status(STATUS.OK).json(basketAdvisory);
       }catch (error) {
       logger.error(`Error fetching basketAdvisory: ${error}` );
       res.status(STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
     }
};

exports.deleteBasketAdvisoryByID = async (req, res) => {
   try {
       const { id } = req.params;
       const basketAdvisory = await BasketAdvisory.findByIdAndDelete(id);
       if (!basketAdvisory) {
         return res.status(STATUS.NOT_FOUND).json({ message: 'Basket Advisory not found' });
       }
       res.status(STATUS.NO_CONTENT).json();
       }catch (error) {
       logger.error(`Error fetching basketAdvisory: ${error}`, );
       res.status(STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
     }
};

exports.patchBasketAdvisoryByID = async (req, res) => {
   try {
       const { id } = req.params;
       const basketAdvisory = await BasketAdvisory.findByIdAndUpdate(id, req.body, { new: true });
       if (!basketAdvisory) {
         return res.status(STATUS.NOT_FOUND).json({ message: 'Basket Advisory not found' });
       }
       res.status(STATUS.NO_CONTENT).json();
       }catch (error) {
       logger.error(`Error fetching basketAdvisory: ${error}`);
       res.status(STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
     }
};

