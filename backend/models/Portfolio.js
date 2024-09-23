const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    personal: [{
        name: {
            type: String,
            default: "NA"
        },
        title: {
            type: String,
            default: "NA"
        },
        summary: {
            type: String,
            default: "NA"
        },
        email: {
            type: String,
            default: "NA"
        },
        phone: {
            type: String,
            default: "NA"
        },
        linkedin: {
            type: String,
            default: "NA"
        },
        github: {
            type: String,
            default: "NA"
        },
        cv: {
            type: String,
            default: "NA"
        },
    }],
    projects: [{
        title: {
            type: String,
            default: "NA"
        },
        demo: {
            type: String,
            default: "NA"
        },
        repo: {
            type: String,
            default: "NA"
        },
        image: {
            type: String,
            default: "NA"
        },
        stack: {
            type: [],
            default: []
        },
    }],
    skills: [{
        title: {
            type: String,
            default: "NA"
        },
        type: {
            type: String,
            default: "NA"
        }
    }],
    history: [{
        name: {
            type: String,
            default: "NA"
        },
        title: {
            type: String,
            default: "NA"
        },
        start: {
            type: String,
            default: "NA"
        },
        end: {
            type: String,
            default: "NA"
        },
        summary: {
            type: String,
            default: "NA"
        },
        location: {
            type: String,
            default: "NA"
        },
    }],
    education: [{
        name: {
            type: String,
            default: "NA"
        },
        programme: {
            type: String,
            default: "NA"
        },
        location: {
            type: String,
            default: "NA"
        }
    }],
});

const PortfolioModel = mongoose.model("portfolio", PortfolioSchema);
module.exports = PortfolioModel;