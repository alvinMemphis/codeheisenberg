// Install first: npm install express axios querystring dotenv

import express from "express";
import axios from "axios";
import querystring from "querystring";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Your Spotify App credentials
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = "https://localhost:3000/callback";

// Step 1: Redirect user to Spotify login
app.get("/login", (req, res) => {
  const scope = "user-library-read"; // Permission to read liked songs
  const authURL =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI,
    });
  res.redirect(authURL);
});

// Step 2: Handle Spotify callback
app.get("/callback", async (req, res) => {
  const code = req.query.code || null;

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const accessToken = tokenResponse.data.access_token;

    // Step 3: Fetch liked songs
    const songsResponse = await axios.get(
      "https://api.spotify.com/v1/me/tracks?limit=20",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    res.json(songsResponse.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.send("Error fetching songs");
  }
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
