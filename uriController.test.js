const {
  getUrlForUUID,
  generateUUIDforUrl,
} = require("./controllers/uriController");

test("should output UUID JSON", async () => {
  const generateUUIDResponse = generateUUIDforUrl("http://localhost:5000/test");
  expect(generateUUIDResponse).toBeTruthy();
});

test("should output url JSON", async () => {
  const getURL = getUrlForUUID("hFCmoj");
  expect(getUrlForUUID).toBeTruthy();
});
