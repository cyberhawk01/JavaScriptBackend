import express from "express"; // import express to connect to express 


const app = express(); // start express app 

app.use(express.json());

//routes import

import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';


// declare the routes 

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter)


//example route api: http://localhost:4000/api/v1/users/register

export default app;