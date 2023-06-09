db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany(
  { tags: { $elemMatch: { $in: ["bovino"] } } },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { 
    tags: { $elemMatch: { $in: ["ave"] } },
  },
     { $inc: { avaliacao: 3 },
  },
);

db.produtos.find({}, { _id: false, nome: true, avaliacao: true });