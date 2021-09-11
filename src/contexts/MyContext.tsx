import { createContext, useState, useCallback} from "react";

interface MyContextData {
    counter: number
    increment: () => void
}

export const MyContext = createContext<MyContextData>({
    counter: 0,
    increment: () => {}
});

export const MyContextProvider:React.FC = ({children}) => {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
            setCounter((prevState) => prevState + 1 )
        },[])

    return (
        <MyContext.Provider value={{counter, increment}}>
            {children}
        </MyContext.Provider>
    )
}