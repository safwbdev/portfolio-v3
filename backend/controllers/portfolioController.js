const asyncHandler = require('express-async-handler')
const PortfolioModel = require('../models/Portfolio')

const getPortfolioData = asyncHandler(async (req, res) => {
    try {
        const portfolioData = await PortfolioModel.find({});

        return res.status(200).json(portfolioData)

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})


const updatePortfolioData = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const portfolioData = await PortfolioModel.findByIdAndUpdate(id, req.body)

        if (!portfolioData) {
            return res.status(404).json({ message: 'Entry not found' })
        }
        return res.status(200).json({ message: 'Entry updated successfully' })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

})


const createPortfolio = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body;
        const newEntry = await PortfolioModel.create(
            req.body
        );

        return res.status(201).send(newEntry)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });

    }
})


module.exports = {
    getPortfolioData,
    createPortfolio,
    updatePortfolioData
}