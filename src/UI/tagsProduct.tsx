
const TagsProduct = ({tags}: {tags: string[]}) => {
    return (
        <>
            {tags.map((item, i) => 
                <span id="tags_product" key={i}>{item}</span>
            )}  
        </>
    );
}
 
export default TagsProduct;