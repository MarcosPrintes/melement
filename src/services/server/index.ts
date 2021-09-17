import { createServer, Model } from 'miragejs';


// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  createServer({
    models: {
      product: Model
    },
    routes() {
      this.namespace = "api"

      this.post('/product', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = Math.floor(Math.random() * 100);

        return {movie: attrs}
      })

      //this.get("/products", () => {
      //  return {
      //    products: [
      //      {name: "marcos"},
      //      {name: "marcos"},
      //      {name: "marcos"},
      //      {name: "marcos"},
      //    ]
      //  }
      //})

      this.get('/products', (schema, request) => {
        return schema.all('product')
      })
    },
    seeds(server) {
      server.create('product', {name: 'Prod 1'} as object);
      server.create('product', {name: 'Prod 2'} as object);
    }
  })
}
