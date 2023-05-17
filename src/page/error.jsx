import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <p><b>Error</b  ></p>
            <p>Данной ссылки не существует</p>
            <p>{error.status}</p>
        </div>
    );
}
 
export default ErrorPage;