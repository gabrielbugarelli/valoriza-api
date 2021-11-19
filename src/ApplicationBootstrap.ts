import express from "express";

const applicationBootstrap = express();
const PORT = 8080;

applicationBootstrap.use(express.json());

applicationBootstrap.listen(PORT, () => {
  console.log(`Application started on port: ${PORT}`);
})