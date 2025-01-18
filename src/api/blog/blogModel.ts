import mongoose, { Schema, Document, Model } from "mongoose";

export interface Blog extends Document {
  title: string;
  content: string;
  author: string;
}

const blogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const BlogModel: Model<Blog> = mongoose.model<Blog>("Blog", blogSchema);
