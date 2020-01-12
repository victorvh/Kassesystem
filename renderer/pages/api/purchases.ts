import { getRepository } from "typeorm";

import Purchase from "../../server/entities/Purchase";

const purchaseRepository = getRepository(Purchase);

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const purchases = await purchaseRepository.find();

      res.json(purchases);
      break;

    case "POST":
      const purchase = purchaseRepository.create(req.body);

      res.json(await purchaseRepository.save(purchase));
      break;

    default:
      res.status(405).end();
  }
};
