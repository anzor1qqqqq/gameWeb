
const DetailSummary = ({title, description}: {title: string, description: string}) => {
    return (
        <>
            <details>
                <summary>
                    <div>{title}</div>
                </summary>

                <div>{description}</div>
            </details>
        </>
    );
}
 
export default DetailSummary;