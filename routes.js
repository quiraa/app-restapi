"use strict";

module.exports = function (app) {
  var request = require("./controller");
  app.route("/").get(request.index);

  app.route("/mahasiswas").get(request.getAllMahasiswa);

  app.route("/mahasiswas/:id").get(request.getSingleMahasiswa);

  app.route("/add").post(request.addMahasiswaData);

  app.route("/change").put(request.updateMahasiswaData);

  app.route("/remove").delete(request.removeSingleMahasiswa);

  app.route("/showMatakuliah").get(request.showMatkulGroup);
};
