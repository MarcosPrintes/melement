import { GridContainer } from './styles';

interface IProps {
    columns: number;
    columnsMd?: number;
    columnsSm?: number;
    columnsXs?: number;
}

export const Grid:React.FC<IProps> = ({ columns = 3, columnsMd, columnsXs, columnsSm,children }) => {
    return (
        <GridContainer
            columns={columns}
            columnsSm={columnsSm}
            columnsMd={columnsMd}
            columnsXs={columnsXs}
        >
            {children}
        </GridContainer>
    )
}