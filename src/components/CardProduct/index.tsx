import { Card } from './styles';

interface IProps {
    product: {
        tag: string | undefined;
        productName: string;
        price: string;
        parcels: string;
        promo: string;
        image: string,
    }
}

export const CardProduct:React.FC<IProps> = ({product}) => {
    const {tag, parcels, price, promo, productName, image} = product;

    return (
        <Card href="#">
            <div>
                <img src={image} alt="Procut thumb" />
                <div className="tag"> {tag} </div>
                <button onClick={() => alert("Em construção ...")} type="button"> Quickview </button>
            </div>
            <div>
                <p className="card__title"> {productName} </p>
                <p className="card__price"> {`R$ ${price.replaceAll('.',',')}`} </p>
                <p className="card__parcels"> {parcels} </p>
                <p className="card__promo"> {promo} </p>
            </div>
        </Card>
    )
}