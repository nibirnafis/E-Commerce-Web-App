import Category from './Category';

const Categories = () => {

    const categories = [ "Shirt", "Jeans", "Hoodie", "Jacket", "Dress", "Sweater", "Shorts", "Skirt" ]

    return (
        <div className='bg-black'>
            <ul className='grid grid-cols-4 lg:grid-cols-8 gap-1 py-1 mx-auto responsive max-w-full lg:max-w-[1440px] font-bold'>
            {
                categories.map((category: string, key) => <Category category={category} key={key}></Category>)
            }
            </ul>
        </div>
    );
};

export default Categories; 