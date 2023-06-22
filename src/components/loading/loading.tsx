import '../../style/loading.css'

const Loading = (): JSX.Element => {
    return (  
        <>
            <div className="loader">
                <div className="contant_load">
                    <div className="line_load"></div>
                    <div className="line_load"></div>
                    <div className="line_load"></div>
                    <div className="line_load"></div>
                    <div className="line_load"></div>
                </div>
            </div>
        </>
    );
}
 
export default Loading;