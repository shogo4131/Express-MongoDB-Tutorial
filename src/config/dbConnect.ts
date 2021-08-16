import mongoose from 'mongoose';

export const dbConnect = async () => {
  const url = 'mongodb://localhost:27017/todo_db';

  try {
    const connectDB = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.info(`MongoDb Connect ${connectDB.connection.host}`);
  } catch (error) {
    console.error(`Error DB, ${error.message} `);
  }
};
