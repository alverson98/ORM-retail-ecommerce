const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTagData = await Tag.findAll({
      include: [{ model: Product }, { model: Product, through: ProductTag }],
    });
    res.json(allTagData);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const singleTagData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Product }, { model: Product, through: ProductTag }],
    });
    res.json(singleTagData);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
  // create a new tag
});

router.put("/:id", (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
