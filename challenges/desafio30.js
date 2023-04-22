db.produtos.updateOne({ nome: "Big Mac" }, {
    $unset: { curtidas: "" },
});
db.produtos.find({ nome: { $ne: "Big Mac" } }, { nome: 1, _id: 0, descricaoSite: 1 });