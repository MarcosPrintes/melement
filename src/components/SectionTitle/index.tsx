import { Title } from "./styles";

interface IProps {
  title: string;
}

export const SectionTitle: React.FC<IProps> = ({ title }) => {
  return (
    <Title>
      {" "}
      <span>{title} </span>{" "}
    </Title>
  );
};
