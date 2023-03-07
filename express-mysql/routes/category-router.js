import express from "express";
import {
  getcategories,
  createCategory,
  getCategory,
} from "../services/category-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getCategories());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getCategory(id));
});

router.post("/", async (req, res) => {
  const { name, slug, imageUrl } = req.body;
  try {
    res.json(await createCategory(name, slug, imageUrl));
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

router.delete("/", async (req, res) => {
    const {id} = req.body ;
    try{
        const [result] = await pool.query(`DELETE FROM category where id=?`,[id])
    }catch(err){
        res.status(400).json("Something went wrong");
    }
});

router.put("/", async (req, res) => {
    const {name, slug, imageUrl, id} = req.body;
    try{
        const [result] = await pool.query(`UPDATE category set name=?, slug=?, imageUrl=? where id=?`, [name, slug, imgUrl, id])
    }catch(err){
        res.status(400).json("Something went wrong");
    }
});

export default router;