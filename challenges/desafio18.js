db.produtos.updateMany(
    { nome: { $in: 
        ["Big Mac", "Quarteirão com queijo"] } }, {
    $addToSet: 
    { ingredientes: "bacon" },
},
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
