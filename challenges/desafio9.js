db.produtos.find({
    proteinas: {
        $lt: 50,
    },
});