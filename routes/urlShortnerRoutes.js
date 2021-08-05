const express = require("express");

const {
  generateUUIDforUrl,
  getUrlForUUID,
} = require("../controllers/uriController");

const router = express.Router();

router.post("/shorten", async (req, res) => {
  const { url } = req.body;
  console.log("entering /api/v1/url/shorten");
  console.log("Method: ", req.method);
  const response = await generateUUIDforUrl(url);
  if (response.error) res.status(500).send(response.message);
  else res.status(200).send(response);
});

router.post("/get/id", async (req, res) => {
  console.log("entering /api/v1/url/get/id");
  console.log("Method: ", req.method);
  const { id } = req.body;
  const response = await getUrlForUUID(id);
  if (response.error) res.status(500).send(response.message);
  else res.status(200).send(response);
});

module.exports = router;
