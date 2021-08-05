const redis = require("redis");
const redisClient = redis.createClient(6379, "redis-server");

redisClient.on("error", (err) => {
  console.log("REDIS ERROR: ", err);
});
module.exports = redisClient;
