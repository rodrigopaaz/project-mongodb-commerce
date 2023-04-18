db.produtos.find({}, { nome: true }).sort({ vendidos: 1 });
