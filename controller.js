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
    "SELECT * FROM tbl_mahasiswa WHERE id_mahasiswa=?",
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

// PUT Change Mahasiswa Data

exports.updateMahasiswaData = function (req, res) {
  var id = req.body.id_mahasiswa;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "UPDATE tbl_mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=? ",
    [nim, nama, jurusan, id],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Update Mahasiswa", res);
      }
    }
  );
};

// DELETE Remove Mahasiswa By ID;

exports.removeSingleMahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;
  connection.query(
    "DELETE FROM tbl_mahasiswa WHERE id_mahasiswa=?",
    [id],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// Show Matakuliah Group
exports.showMatkulGroup = function (req, res) {
  connection.query(
    "SELECT tbl_mahasiswa.id_mahasiswa, tbl_mahasiswa.nim, tbl_mahasiswa.nama, tbl_mahasiswa.jurusan, tbl_matakuliah.matakuliah, tbl_matakuliah.sks FROM tbl_krs JOIN tbl_mahasiswa JOIN tbl_matakuliah WHERE tbl_krs.id_matakuliah = tbl_matakuliah.id_matakuliah AND tbl_krs.id_mahasiswa = tbl_mahasiswa.id_mahasiswa ORDER BY tbl_mahasiswa.id_mahasiswa;",
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.nestedOk(rows, res);
      }
    }
  );
};
