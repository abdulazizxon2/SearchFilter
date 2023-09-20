import { useContext, useEffect } from "react";
import { ContextData } from "./Context";
export default function Config() {
    let { setApiData } = useContext(ContextData);
    let getApi1 = () => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => setApiData(json))
            
    };
    useEffect(() => {
        getApi1();
    }, []);
}