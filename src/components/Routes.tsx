import { useState } from 'react';
import Route from './Route';


const Routes = () => {

    const routes = [ "products", "cart", "about", "contact" ]
    const [ isOpen, setIsOpen ] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <div className='hidden md:flex gap-8 font-inter text-exsml text-cyan'>
        {
            routes.map((route, key) => <Route route={route} key={key}></Route>)
        }
        </div>
        <div className='flex flex-col items-end md:hidden relative'>
            {
                !isOpen ?
                <button onClick={handleOpen}>{"<"}</button>
                :
                <button onClick={handleOpen}>{"v"}</button>
            }
            <div onClick={handleOpen} className={!isOpen ? "hidden" : "flex flex-col absolute top-4 bg-black gap-4 p-4"}>
            {
                routes.map((route, key) => <Route route={route} key={key}></Route>)
            }
            </div> 
        </div>
        </>
    );
};

export default Routes;