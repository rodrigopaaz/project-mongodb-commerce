db.resumoProdutos.insert({
    franquia: "McDonalds",
    totalProdutos: db.produtos.count(),
});

db.resumoProdutos.finf({}, { _id: 0, franquia: 1, totalProdutos: 1 });