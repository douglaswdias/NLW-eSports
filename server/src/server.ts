import express from "express";

const app = express();

app.get('/ads', (request, response) => {
  return response.send('Acessou Ads agora');
});

app.listen(3333);