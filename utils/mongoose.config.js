import mongoose from 'mongoose';

class MongooseService {
   constructor() {
      mongoose.connect('mongodb://localhost:27017/api').then(() =>
         console.log("connected to mongodb")
      ).catch((err) =>
         console.log("MongoDB connection unsuccessful", err)
      )
   }
}
export default new MongooseService();
