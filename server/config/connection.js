const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/group-project-3-gp3-consulting",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }
);

module.exports = mongoose.connection;

