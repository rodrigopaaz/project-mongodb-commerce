db.produtos.find({}, { nome: true, vendidos: true }).sort({ vendidos: 1 });
