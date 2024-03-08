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

// GET Single Mahasiswa By ID
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

// POST Mahasiswa Data

exports.addMahasiswaData = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO tbl_mahasiswa (nim, nama, jurusan) VALUES(?,?,?)",
    [nim, nama, jurusan],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};
