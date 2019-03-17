const contentful = require("contentful");

const client = contentful.createClient({
  space: "6qt20vrlv8eb",
  accessToken: "bc44ea2b7b302a3f63720a2c5a119ef260919115ab2f78acfc141d9c8dd1944d",
});

async function getContent () {
  const content = await client.getEntries()
  const entries = content.items
  ? content.items.map(item => item.fields) : null;
  console.log("entries[0]:", entries[0]);
  return {
      video: entries[1].video.fields.file.url,
      artist: entries[3],
      about: entries[2],
      interviewees: entries[0],
  }
};

module.exports = {
  getContent,
};
