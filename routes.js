"use strict";

const json = require("body-parser/lib/types/json");

module.exports = function (app) {
  var jsonKu = require("./controller");
  app.route("/").get(jsonKu.index);

  app.route("/mahasiswas").get(jsonKu.getAllMahasiswa);

  app.route("/mahasiswas/:id").get(jsonKu.getSingleMahasiswa);

  app.route("/add").post(jsonKu.addMahasiswaData);
};
