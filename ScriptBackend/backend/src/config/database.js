import mongoose from "mongoose";  // import mongoose to talk to database 

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log(`Mongodb connected ${connectionInstance.connection.host}`)


    } catch (error) {
        console.log("Mongodb connection failed", error)
        process.exit(1)
    }
}


export default connectDB;
