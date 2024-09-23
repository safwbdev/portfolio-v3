const mongoose = require('mongoose')
const MONGO_API = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_ADDRESS}.mongodb.net/portfolio`;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_API)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB