db.produtos.updateOne(
    { nome: "Big Mac" }, 
    {
    $unset: { curtidas: 0 },
},
);
db.produtos.find(
    { nome: { $ne: "Big Mac" } }, 
{ nome: 1, _id: 0, curtidas: 1 },
);