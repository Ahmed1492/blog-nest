import Blog from "../../db/models/blog.model.js";

export const createBlog = async (req, res, next) => {
  try {
    const { title, subTitle, description, category, image, isPublished } = req.body;
    if (!title || !subTitle || !description || !category || !image ) {
      return res.json({ success: false, message: 'All fields Required' });
    }

    const imageFile = req.file
    const blog = await Blog.create({ title, subTitle, description, category, image, isPublished });

    return res.json({ success: true, message: "blog created successfully!", blog });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, err: error.message });
  }
};