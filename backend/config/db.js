import mongoose from "mongoose";

const connectDB = async () => {
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            // useUnifiedTopolgy: true,
            useNewUrlParser: true,
            // useCreateIndex: true
            // useUnifiedTopology: true
            // useCreateIndex: true
        })

        console.log(`Database Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB 