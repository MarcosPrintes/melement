import { Card } from "./styes";

interface IProps {
  category: {
    id: number;
    categoryTitle: string;
    image: string;
  };
}

export const CardCategory: React.FC<IProps> = ({ category }) => {
  const { categoryTitle, image } = category;
  return (
    <Card href="#">
      <img src={image} alt={categoryTitle} />
      <div className="card__bottom">
        <span>{categoryTitle}</span>
      </div>
    </Card>
  );
};
