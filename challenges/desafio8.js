use("projeto");

db.produtos.deleteOne({
    curtidas: {
        $lt: 50,
    },
});