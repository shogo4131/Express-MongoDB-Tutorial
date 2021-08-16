import mongoose, { Schema, Document } from 'mongoose';

export interface TodoDoc extends Document {
  id: Number;
  todo: String;
}

const todoSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    todo: {
      type: String,
      trim: true,
      max: 20,
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model('Todo', todoSchema);
