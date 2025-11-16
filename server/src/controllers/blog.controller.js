import imagekit from "../../config/imageKit.js";
import Blog from "../../db/models/blog.model.js";
import fs from "fs";

export const createBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } =
      JSON.parse(req.body.blog);

    if (!title || !subTitle || !description || !category) {
      return res.json({ success: false, message: "All fields Required" });
    }

    if (!req.file) {
      return res.json({ success: false, message: "Image is required" });
    }

    const imageFile = req.file;

    // ⭐ NEW SDK → upload using ReadStream
    const upload = await imagekit.files.upload({
      file: fs.createReadStream(imageFile.path),
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // ⭐ NEW SDK → optimized URL using helper.buildSrc
    const optimizedImageUrl = imagekit.helper.buildSrc({
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
      src: upload.filePath,
      transformation: [
        {
          width: 1280,
          format: "webp",
          quality: "auto",
        },
      ],
    });

    const blog = await Blog.create({
      title,
      subTitle,
      description,
      category,
      isPublished,
      image: optimizedImageUrl,
    });

    return res.json({ success: true, message: "Blog created!", blog });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, err: error.message });
  }
};
