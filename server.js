const logger = require("./logger/logger");
const app = require("./main");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
});


// shutdown gracefully
process.on("SIGINT", () => {
  console.log("SIGINT signal received.");
  process.exit(0);
}
);

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received.");
  process.exit(0);
}
);

process.on("SIGUSR2", () => {
  console.log("SIGUSR2 signal received.");
  process.exit(0);
}
);

process.on("uncaughtException", (err) => {
  console.log("uncaughtException signal received.");
  console.log(err);
  process.exit(1);
}
);

process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection signal received.");
  console.log(err); 
  process.exit(1);
}
);




