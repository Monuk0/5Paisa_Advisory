const { STATUS } = require('../services/constant.service.cjs');
const Advisory = require('../models/advisorySchema.cjs');
const logger = require('./../utils/logger.cjs');

exports.advisory = async (req, res) => {
    const advisories = await Advisory.find();
    res.status(STATUS.OK).json(advisories)
};

exports.createAdvisory = async (req, res) => {
    const advisory = await Advisory.create(req.body);
    res.status(STATUS.CREATED).json({massage : 'Advisory created',advisory})
};

exports.advisoryByID = async(req, res) => {
    try {
    const { id } = req.query;
    const advisory = await Advisory.findById(id);
    if (!advisory) {
      return res.status(STATUS.NOT_FOUND).json({ message: 'Advisory not found' });
    }
    res.status(STATUS.OK).json(advisory);
    }catch (error) {
    logger.error('Error fetching advisory:', error);
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
  }
}

exports.deleteAdvisoryByID = async(req, res) => {
    try {
    const { id } = req.params;
    const advisory = await Advisory.findByIdAndDelete(id);
    if (!advisory) {
      return res.status(STATUS.NOT_FOUND).json({ message: 'Advisory not found' });
    }
    res.status(STATUS.NO_CONTENT).json();
    }catch (error) {
    logger.error('Error fetching advisory:', error);
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
  }
}

exports.patchAdvisoryByID = async(req, res) => {
    try {
    const { id } = req.params;
    const advisory = await Advisory.findByIdAndUpdate(id, req.body, { new: true })
    if (!advisory) {
      return res.status(STATUS.NOT_FOUND).json({ message: 'Advisory not found' });
    }
    res.status(STATUS.NO_CONTENT).json();
    }catch (error) {
    logger.error('Error fetching advisory:', error);
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
  }
}