const { writeFileSync } = require("node:fs");

const joke = "My AI coding agent's patch crashed our live demo, so it filed a bug with one step to reproduce: “Invite a VP.”";

writeFileSync("/output/entry.txt", joke, "utf8");
