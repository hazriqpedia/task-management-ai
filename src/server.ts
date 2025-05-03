import app from "./app";

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
