import express from "express";
import cors from "cors";
import { OAuth2Client } from "google-auth-library";

const app = express();
const CLIENT_ID = "847757529604-l2mt32stsfbdoctoutrvh8v9pltgdiuv.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

app.use(cors());
app.use(express.json());

app.post("/auth/google", async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();

        const user = {
            googleId: payload.sub,
            email: payload.email,
            name: payload.name,
            picture: payload.picture,
        };

        res.status(200).json({ user });
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
