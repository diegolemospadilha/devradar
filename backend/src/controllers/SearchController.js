const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  // Busca por filtros em um raio de 10 KM e por tecnologias
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;
    const techsArray = parseStringAsArray(techs);
    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude] // Busca por coordenadas é no formato longitude e lagitude
          },
          $maxDistance: 10000 // Raio maximo de busca em metros
        }
      }
    });
    return response.json(devs);
  }
};
