import Image from 'next/image';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from 'react'


gsap.registerPlugin(ScrollTrigger)


type IProps = {
    p: {
        serial: number,
        title: string,
        img_url: string
    }
}


const Popular = ({p}: IProps) => {

    const { serial, title, img_url } = p

    const container = useRef(null)

    useGSAP(()=>{
        gsap.to(".scl", {
            scrollTrigger: {
                trigger: container.current
            },
            height: 512,
            duration: 2
        })}, { scope: container })



    return (
        <>
        {
            serial%2 == 1 ? 
            <div ref={container} className='flex flex-col justify-end w-full m-auto relative'>
                <div className='scl bg-blue flex flex-col w-full h-[448px] rounded-2xl'>
                    <p className='text-center font-ironManOfWar pt-6 text-cyan text-reg'>{title}</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-2xl absolute'>
                    <Image
                        className="w-full h-full transition-transform hover:scale-110 object-cover"
                        src={img_url}
                        alt="Cover Picture 1"
                        width={778}
                        height={512}>
                    </Image>
                </div>
            </div>
            :
            <div ref={container} className='flex flex-col justify-start w-full m-auto relative'>
                <div className='scl bg-blue flex flex-col-reverse w-full h-[448px] rounded-2xl'>
                    <p className='text-center font-ironManOfWar pb-6 text-cyan text-reg'>{title}</p>
                </div>
                <div className='overflow-clip w-full h-[448px] rounded-2xl absolute'>
                    <Image
                        className="w-full h-full transition-transform hover:scale-110 object-cover"
                        src={img_url}
                        alt="Cover Picture 1"
                        width={778}
                        height={1024}>
                    </Image>
                </div>
            </div>
        }
        </>
    );
};

export default Popular;