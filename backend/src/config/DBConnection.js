import mongoose from 'mongoose'

export const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO)
        console.log(`successfully connected to DataBase`)
        console.log(connection.connection.host)
        console.log(connection.connection.name)
    } catch (error) {
        console.log(`"Failed to connect to Database: ${error}`)
    }
}
