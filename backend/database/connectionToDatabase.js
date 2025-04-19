import mongoose from "mongoose"

export const connectionToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB is connected: ${connection.connection.host}`)
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`)
    }
}