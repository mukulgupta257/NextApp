import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Mail: { type: String, required: true },
  Phone: { type: String, required: true },
  Query: { type: String, required: true },
});

const query = mongoose.models.query || mongoose.model("query", querySchema);
export default query;
