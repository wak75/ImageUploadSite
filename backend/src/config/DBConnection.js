import mongoose from 'mongoose'

const dbConnect = async () =>{


    try {
        const connect = await mongoose.connect(process.env.MONGO)
        console.log("Connection to Remote is successful")
        console.log(`DB name = ${connect.connection.name}`)
        console.log(`Connection id = ${connect.connection.id}`)
        
    } catch (error) {
        console.log(`Conneciton to Remote failed ${error}`)
    }
}
export default dbConnect;