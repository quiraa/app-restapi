"use strict";

var response = require("./response");
var connection = require("./connection");

exports.index = function (req, res) {
  response.ok("My REST API Application in Running", res);
};

// GET All Mahasiwa Data
exports.getAllMahasiswa = function (req, res) {
  connection.query(
    "SELECT * FROM tbl_mahasiswa",
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// GET Single Mahasiswa
exports.getSingleMahasiswa = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM tbl_mahasiswa WHERE id_mahasiswa = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
