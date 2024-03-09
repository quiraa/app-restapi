"use strict";

exports.ok = function (value, res) {
  var data = {
    status: 200,
    values: value,
  };

  res.json(data);
  res.end();
};

// Nested JSON Response
exports.nestedOk = function (values, res) {
  const result = values.reduce((accumulation, item) => {
    if (accumulation[item.nama]) {
      const group = accumulation[item.nama];
      if (Array.isArray(group.matakuliah)) {
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      accumulation[item.nama] = item;
    }
    return accumulation;
  }, {});

  var data = {
    status: 200,
    values: result,
  };

  res.json(data);
  res.end();
};
