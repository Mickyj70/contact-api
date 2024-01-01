const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3500;

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//routes
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
