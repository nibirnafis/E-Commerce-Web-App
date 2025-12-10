// SSR
import CustomerReview from '@/components/CustomerReview';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';


const Page = async( { params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id

    const loadData = async() => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products/${id}`, {
            // cache: "no-store",
        })

        const data =  await res.json()

        return data.res

    }

    const product = await loadData()



    if (!product) {
        return <p className='text-center'>Loading...</p>;
    }


    return (
        <>
        <div className='flex flex-col  md:flex-row gap-8 max-w-[1440px] mx-auto my-16 md:my-24 px-8'>

            <div className='flex flex-col bg-blue max-w-[448px] max-h-[512px] rounded-4xl'>
                <div className='w-full h-full mx-auto'>
                    <Image
                        className="max-w-full max-h-full object-cover rounded-4xl"
                        src={product.img_url}
                        alt="Cover Picture 1"
                        width={480}
                        height={480}>
                    </Image>
                </div>
                <div className='flex justify-center items-center w-full h-16 gap-4'>
                    <div className='bg-amber-500 w-4 h-4 rounded-full'></div>
                    <div className='bg-green-500 w-4 h-4 rounded-full'></div>
                    <div className='bg-blue-500 w-4 h-4 rounded-full'></div>
                </div>
            </div>

            <div className='flex flex-col grow justify-between max-w-[896px] h-[320px] md:h-[448px]'>
                <div className='flex'>
                    <p className='text-sml bg-blue py-2 px-4'>{product.category}</p>
                </div>
                <div className='flex justify-between '>
                    <p className='font-ironManOfWar text-med md:text-lrg'>{product.title}</p>
                    <ShoppingCart className=''/>
                </div>
                <p className='font-inter text-sml md:text-reg text-orange'>{product.price} tk</p>
                <p className='text-white text-sml'>{product.details}</p>
                <p className='text-white text-sml'>Stock: {product.available ? "Available" : "Not Available"}</p>
                <button className='bg-[#55C33A] text-blue py-2 px-4 rounded-lg max-w-32 font-inter font-bold'>BUY NOW</button>
            </div>
                     
        </div>


        <div>
            <h1 className='font-ironManOfWar text-med md:text-lrg  text-center my-[64px] md:my-[88px]'>CUSTOMERS REVIEW</h1>
            <CustomerReview></CustomerReview>
        </div>

        </>
    );
};

export default Page;










// CSR
/* "use client"
import CustomerReview from '@/components/CustomerReview';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


const Page = () => {

    const params = useParams()

    const [ product, setProduct ] = useState(null)

    useEffect(()=>{
        const loadData = async() => {
            const res = await fetch(`http://localhost:3000/api/products/${params.id}`, {
                // cache: "no-store",
            })
            const data =  await res.json()

            setProduct(data.res)
        }

        loadData()
    }, [params.id])


    if (!product) {
        return <p className='text-center'>Loading...</p>;
    }


    return (
        <>
        <div className='flex flex-col  md:flex-row gap-8 max-w-[1440px] mx-auto my-16 md:my-24 px-8'>

            <div className='flex flex-col bg-blue max-w-[448px] max-h-[512px] rounded-4xl'>
                <div className='w-full h-full mx-auto'>
                    <Image
                        className="max-w-full max-h-full object-cover rounded-4xl"
                        src={product.img_url}
                        alt="Cover Picture 1"
                        width={480}
                        height={480}>
                    </Image>
                </div>
                <div className='flex justify-center items-center w-full h-16 gap-4'>
                    <div className='bg-amber-500 w-4 h-4 rounded-full'></div>
                    <div className='bg-green-500 w-4 h-4 rounded-full'></div>
                    <div className='bg-blue-500 w-4 h-4 rounded-full'></div>
                </div>
            </div>

            <div className='flex flex-col grow justify-between max-w-[896px] h-[320px] md:h-[448px]'>
                <p className='text-sml bg-blue py-2 px-4'>{product.category}</p>
                <div className='flex justify-between '>
                    <p className='font-ironManOfWar text-med md:text-lrg'>{product.title}</p>
                    <ShoppingCart className=''/>
                </div>
                <p className='font-inter text-sml md:text-reg text-orange'>{product.price} tk</p>
                <p className='text-white text-sml'>{product.details}</p>
                <p className='text-white text-sml'>Stock: {product.available ? "Available" : "Not Available"}</p>
                <button className='bg-[#55C33A] text-blue py-2 px-4 rounded-lg max-w-32 font-inter font-bold'>BUY NOW</button>
            </div>
                     
        </div>


        <div>
            <h1 className='font-ironManOfWar text-med md:text-lrg  text-center my-[64px] md:my-[88px]'>CUSTOMERS REVIEW</h1>
            <CustomerReview></CustomerReview>
        </div>

        </>
    );
};

export default Page; */