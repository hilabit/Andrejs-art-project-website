const contentful = require("contentful");

const client = contentful.createClient({
  space: "6qt20vrlv8eb",
  accessToken: "bc44ea2b7b302a3f63720a2c5a119ef260919115ab2f78acfc141d9c8dd1944d",
});

async function getContent () {
  const content = await client.getEntries()
  console.log(content.items)
  return content;
};

module.exports = {
  getContent,
};


