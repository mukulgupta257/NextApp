import query from "../../Models/QueryModal";
import mongoose from "mongoose";
var db_url =
  "mongodb+srv://admin:Lakamal123@cluster0.u8sbeip.mongodb.net/?retryWrites=true&w=majority";
var db_url2 = "mongodb://localhost:27017/TestNew";

export default async function Order(req, res) {
  await mongoose
    .connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((_) => {
      console.log("connected to mongodb");
    })
    .catch((error) => {
      console.log(error.reason);
    });
  try {
    const saveQuery = await query.find({});
    res.status(200).send(saveQuery);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(err);
  }
}
