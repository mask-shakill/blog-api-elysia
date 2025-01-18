import { BlogModel, Blog } from "./blogModel";
export const BlogController = {
  create: async ({
    body,
  }: {
    body: { title: string; content: string; author: string };
  }): Promise<Blog> => {
    try {
      const blog = new BlogModel(body);
      return await blog.save();
    } catch (error) {
      throw new Error("Error creating blog post");
    }
  },

  getAll: async (): Promise<Blog[]> => {
    try {
      return await BlogModel.find();
    } catch (error) {
      throw new Error("Error fetching blog posts");
    }
  },

  getById: async ({
    params,
  }: {
    params: { id: string };
  }): Promise<Blog | null> => {
    const { id } = params;
    try {
      return await BlogModel.findById(id);
    } catch (error) {
      throw new Error("Blog post not found");
    }
  },

  update: async ({
    params,
    body,
  }: {
    params: { id: string };
    body: { title: string; content: string; author: string };
  }): Promise<Blog | null> => {
    const { id } = params;
    try {
      return await BlogModel.findByIdAndUpdate(id, body, { new: true });
    } catch (error) {
      throw new Error("Error updating blog post");
    }
  },
  delete: async ({
    params,
  }: {
    params: { id: string };
  }): Promise<Blog | null> => {
    const { id } = params;
    try {
      return await BlogModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Error deleting blog post");
    }
  },
};
