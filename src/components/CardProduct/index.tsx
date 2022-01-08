import { Product } from '../../services/server';
import { Card } from './styles';

export interface IProps {
  product: Product;
  onQuickview: (prod: Product) => void;
}

export const CardProduct: React.FC<IProps> = ({ product, onQuickview }) => {
  const { tag, parcels, price, promo, productName, image } = product;

  return (
    <Card>
      <div>
        <img src={image} alt="Procut thumb" />
        <div className="tag"> {tag} </div>
        <button onClick={() => onQuickview(product)} type="button">
          Quickview
        </button>
      </div>
      <div>
        <p className="card__title"> {productName} </p>
        <p className="card__price"> {`R$ ${price.replaceAll('.', ',')}`} </p>
        <p className="card__parcels"> {parcels} </p>
        <p className="card__promo"> {promo} </p>
      </div>
    </Card>
  );
};
