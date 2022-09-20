const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
