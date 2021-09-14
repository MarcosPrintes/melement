import { createServer } from 'miragejs';

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    createServer({
        routes() {
          this.namespace = 'api'

          this.get('/products', () => [
            {categoryTitle: 'Moleton', id: 1},
            {categoryTitle: 'Juvenil', id: 2},
            {categoryTitle: 'Shapes', id: 3},
            {categoryTitle: 'Acessórios', id: 4},
            {categoryTitle: 'Jaqueta', id: 4},
            {categoryTitle: 'Camisa', id: 4},
          ])
        }
    })
}