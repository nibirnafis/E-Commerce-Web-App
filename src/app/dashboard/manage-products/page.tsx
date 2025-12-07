"use client";



const page = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        
        const form = e.currentTarget;

        const category = form.category.value;
        const title = form.Title.value;
        const details = form.details.value;
        const img_url = form.img_url.value;
        const price = Number(form.price.value);
        const color = form.color.value;

        const product = { category, title, details, img_url, price, color }

        const result = await fetch("http://localhost:3000/api/dashboard/manage-products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })

        console.log(result)
        form.reset()
    }


    return (
        <div className="flex flex-col md:flex-row mx-auto gap-8 max-w-[1440px] px-8 pb-24">
            <p>Add Products</p>
            <form onSubmit={handleSubmit} className='bg-blue flex flex-col'>
                <label htmlFor='category'>Category: </label>
                <input type="text" name='category' required/>

                <label htmlFor='Title'>Title: </label>
                <input type="text" name='Title' required/>

                <label htmlFor='details'>Details: </label>
                <input type="text" name='details' required/>
                
                <label htmlFor='img_url'>Image URL: </label>
                <input type="text" name='img_url' required/>

                <label htmlFor='price'>Price: </label>
                <input type="number" name='price' required/>

                <label htmlFor='color'>Color: </label>
                <input type="text" name='color' required/>

                {/* <label htmlFor='available'>Available: </label>
                <input type="text" name='available'/> */}

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default page;