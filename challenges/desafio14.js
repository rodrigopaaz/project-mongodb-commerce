db.produtos.find(
  { ingredientes: {
    $eq: "picles",
  } },
  { nome: 1, _id: 0, ingredientes: 1 },
  );
