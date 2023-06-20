import { useRouteError } from 'react-router-dom';
import { IErrorPage } from '../types/types';

const ErrorPage = (): JSX.Element => {
    const error = useRouteError() as IErrorPage;

    return (
        <div>
            <p><b>Error</b  ></p>
            <p>Данной ссылки не существует</p>
            <p>{error.status}</p>
        </div>
    );
}
 
export default ErrorPage;