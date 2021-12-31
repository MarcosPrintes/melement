/* eslint-disable import/no-extraneous-dependencies */
import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

export type Category = {
  id: number;
  categoryTitle: string;
  image: string;
};

export type Product = {
  id: number;
  tag: string | undefined;
  productName: string;
  price: string;
  parcels: string;
  promo: string;
  image: string;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  createServer({
    models: {
      product: Model.extend<Partial<Product>>({}),
      category: Model.extend<Partial<Category>>({}),
    },
    factories: {
      product: Factory.extend({
        id(i: number) {
          return `prod-${i}`;
        },
        tag: "Novo",
        productName: () => faker.commerce.productName(),
        price: faker.commerce.price(),
        parcels: "10x sem juros de R$ 37,99",
        promo: "à vista com até 5% de desconto",
        image: faker.image.sports(255, 270),
      }),
      category: Factory.extend({
        id(id: number) {
          return `cat-${id}`;
        },
        categoryTitle: () => faker.commerce.department(),
        image: () => faker.image.sports(350, 355),
      }),
    },
    seeds(server) {
      server.createList("product", 10);
      server.createList("category", 6);
    },
    routes() {
      this.namespace = "api";
      // GET's
      this.get("/products", (schema, request) => {
        return schema.all("product");
      });
      this.get("/categories");
      //POST's
      /**
       * this.post('/product', (schema, request) => {
          let attrs = JSON.parse(request.requestBody);
          attrs.id = Math.floor(Math.random() * 100);
          return {movie: attrs}
        });
       */
    },
  });
}
