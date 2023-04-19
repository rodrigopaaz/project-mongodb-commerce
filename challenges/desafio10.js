db.produtos.find({
    valoresNutricionais: {
        $elemMatch: {
            tipo: "proteínas",
            percentual: {
                $gte: 30,
                $lt: 40,
            },
        },
    },
  }, { _id: 0, nome: 1 });