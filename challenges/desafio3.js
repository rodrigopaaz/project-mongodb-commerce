db.produtos
  .find({}, { nome: true, vendidos: true, _id: 0 })
  .sort({ vendidos: -1 })
  .limit(-1);
