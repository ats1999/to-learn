const { createClient } = require("redis");

const client = createClient();
client.on("error", (err) => console.log("Redis Client Error", err));
client
  .connect()
  .then(() => console.log("Redis connected"))
  .catch(console.log);

// https://www.dsabyte.com/posts/blog/Building-a-sleep-function-for-JavaScript/6212589a142277154ddb4eec#how-to-build-sleep-function
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// https://www.dsabyte.com/posts/blog/Simulate-delay-of-specified-seconds-in-JavaScript/61b97b5425c08a2f91aa64b5
function delay(ms) {
  let now = Date.now();
  // run while loop for - sec
  while (now + ms > Date.now());
}

async function getUser(uid) {
  const user = await client.get(`user-${uid}`);

  if (!user) {
    // simulating that fetching user details from DB takes 2000 ms
    await sleep(2000);
    await client.set(`user-${uid}`, `I am ${uid}`);
  }

  return {
    uid,
    new: !Boolean(user),
  };
}

async function doHeavy_compute(ms) {
  const result = await client.get(`compute-${ms}`);
  if (result)
    return {
      new: false,
    };
  delay(ms);
  await client.set(`compute-${ms}`, `I am done with ${ms}:)`);
  return {
    new: true,
  };
}

module.exports = {
  getUser,
  doHeavy_compute,
};
