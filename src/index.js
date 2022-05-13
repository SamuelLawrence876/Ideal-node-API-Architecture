const express = require("express");
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const apicache = require("apicache");
const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);
app.use(cache("2 minutes"));

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
