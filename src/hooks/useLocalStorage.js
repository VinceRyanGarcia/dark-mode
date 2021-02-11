import { useState } from 'react';


const useLocalStorage = ( key, invitialValue ) =>{
    const [ storedValue, setStoredValue ] = useState( () =>{
        const bagel = window.localStorage.getItem( key );
        return bagel ? JSON.parse( bagel ) : invitialValue;

    })


    const setValue = value => {
        setStoredValue( value );
        window.localStorage.setItem( key, JSON.stringify( value ) );
    }

    return [ storedValue, setValue ];
}

export default useLocalStorage;