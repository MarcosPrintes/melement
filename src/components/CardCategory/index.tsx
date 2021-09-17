import { Card } from './styes';

interface IProps {
    category: {
        name: string;
        url: string;
    }
}

export const CardCategory:React.FC<IProps> = ({ category }) => {
    const {name, url} = category;
    return (
        <Card href={url}>
            <img src="https://picsum.photos/id/1/350/355" alt={name} />
            <div className="card__bottom">
                <span>{ name }</span>
            </div>
        </Card>
    )
}