import React, { useEffect } from 'react';
import Loader from "./../components/Loader/Loader";
import { useGeneralContext } from "./../context/GeneralContext";

export const IsLoadingHOC = (WrappedComponent) => {

    function HOC(props) {
        const { isLoading, setLoading } = useGeneralContext();
        console.log(isLoading)

        useEffect(() => {
            //setLoading(true)
            setLoading(true)

            setTimeout(() => setLoading(false), 1000);
        }, []);

        return (
            <>
                {isLoading ?
                    <Loader></Loader>
                    :
                    <WrappedComponent {...props} />
                }
            </>
        )
    }
    return HOC;
}

export default IsLoadingHOC;