import { getRepository } from "typeorm";

import Product from "../../server/entities/Product";

const productsRepository = getRepository(Product);

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const products = await productsRepository.find({
        ...("ean" in req.query && { ean: req.query.ean })
      });

      res.json(products);
      break;

    case "POST":
      const product = productsRepository.create(req.body);

      res.json(await productsRepository.save(product));
      break;

    default:
      res.status(405).end();
  }
};
