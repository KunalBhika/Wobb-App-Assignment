import mongoose from "mongoose";

const connectToDatabase = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log("Connected to Database : " , process.env.MONGODB_URI);
        }).catch(err => {
            console.log("Error connecting to database ", err);
        })
    }
    catch (error) {
        console.log("Server Error");
    }
}

export default connectToDatabase;