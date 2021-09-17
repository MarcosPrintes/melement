import { GridContainer } from './styles';

interface IProps {
    columns: number
}

export const Grid:React.FC<IProps> = ({ columns = 3, children }) => {
    return (
        <GridContainer colunas={columns}>
            {children}
        </GridContainer>
    )
}