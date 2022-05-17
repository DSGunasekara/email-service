import express from "express";
import cors from "cors";
// import connectDB from "./database/db.js";

import emailRoute from './routes/email.js'

const app = express();

//Database connection
// connectDB().then(
//     () => console.log("Database Connected...."),
//     (error) => console.log(error)
//   );
  
  app.use(cors()); //cors added
  app.use(express.json({ extended: false })); //enables json
  
  app.get("/", (req, res) => res.send("API is running"));
  
  app.use("/api/email", emailRoute);
  
  const PORT = process.env.PORT || 8071;
  
  //starting app
  app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
  
  export default app;