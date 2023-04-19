    db.produtos.find({ nome: { $nin: ["Big Mac", "MacChicker"] } },
     { _id: 0, nome: 1, curtidas: 1, vendidos: 1 });