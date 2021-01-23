import React,{useState} from 'react'

export const useLocalStorage = (key, initialValue) => {
    
    const [ storedValue, setStoredValue ] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item? JSON.parse(item) : initialValue;
        } catch (err){
            console.error(err);
            return initialValue;
        }
    });
    

    const setValue =(value)=>{
        try{
            const valueToShare = 
            value instanceof Function ? value(storedValue): value;
            setStoredValue(valueToShare);
            window.localStorage.setItem(key, JSON.stringify(valueToShare))
        } catch (error){
            console.log(error);
        }
    };
    return [storedValue, setValue];
}
export default useLocalStorage;