const express = require('express')
const router = express.Router()
const {
    getPortfolioData,
    createPortfolio,
    updatePortfolioData
} = require('../controllers/portfolioController')

router.route('/').get(getPortfolioData).post(createPortfolio)
router.route('/:id').put(updatePortfolioData)

module.exports = router
