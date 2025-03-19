import mongoose from "mongoose";

const connectToDatabase = () => {
    try {
        mongoose.connect("mongodb+srv://kunalbhika2:Kunalbhika@cluster0.zdkzp.mongodb.net/Wobb_assesment_db?retryWrites=true&w=majority&appName=Cluster0").then(() => {
            console.log("Connected to Database : ", process.env.MONGODB_URI);
        }).catch(err => {
            console.log("Error connecting to database ", err);
        })
    }
    catch (error) {
        console.log("Server Error");
    }
}

export default connectToDatabase;