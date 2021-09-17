import { Card } from './styles';

interface IProps {
    product: {
        tag: string | undefined;
        productName: string;
        price: string;
        parcels: string;
        promo: string;
    }

}

export const CardProduct:React.FC<IProps> = ({product}) => {
    const {tag, parcels, price, promo, productName} = product;

    return (
        <Card href="#">
            <div>
                <img src="https://picsum.photos/id/1/255/270" alt="Procut thumb" />
                <div className="tag"> {tag} </div>
                <button type="button"> Quickview </button>
            </div>
            <div>
                <p className="card__title"> {productName} </p>
                <p className="card__price"> {price} </p>
                <p className="card__parcels"> {parcels} </p>
                <p className="card__promo"> {promo} </p>
            </div>
        </Card>
    )
}