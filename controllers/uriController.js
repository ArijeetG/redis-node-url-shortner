const redisClient = require("../redisConfig/config");
const util = require("util");

const shortid = require("short-unique-id");

const urlIdStore = [];

async function generateUUIDforUrl(url) {
  const uuid = new shortid();
  redisClient.setex = util.promisify(redisClient.setex);
  const urlId = uuid();
  try {
    const verifyURL = urlIdStore.filter((item) => item.url === url);
    if (verifyURL.length)
      return {
        message: "id already generated for this url",
        id: verifyURL[0].urlId,
      };
    else {
      urlIdStore.push({ url: url, urlId: urlId });
      const saveUrlId = await redisClient.setex(`${urlId}`, 3600000, url);
      return { url: url, id: urlId };
    }
  } catch (error) {
    return { error: 1, message: error };
  }
}

async function getUrlForUUID(id) {
  redisClient.get = util.promisify(redisClient.get);
  try {
    return await redisClient.get(id);
  } catch (error) {
    return { error: 1, message: error };
  }
}

module.exports = {
  generateUUIDforUrl,
  getUrlForUUID,
};
