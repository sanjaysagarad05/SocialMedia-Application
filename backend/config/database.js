const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://shreepathiachary264:123shree@cluster0.rumqp9k.mongodb.net/SOCIAL_MEDIA?retryWrites=true&w=majority")
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
