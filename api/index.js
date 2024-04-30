import express from "express";
import postRouter from './routes/posts.js';
import authRouter from './routes/auth.js';

import userRouter from './routes/users.js';

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);


app.listen(5163, () => {
    console.log("Connected");
});
