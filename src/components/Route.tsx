import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Route = ({route}: {route: string}) => {

    const href = usePathname()

    const upperCase = route.toUpperCase()

    return (
        <>
        <Link className={
            href === `/${route}` ? "text-orange" : ""
        } href={`/${route}`}>{upperCase}</Link>
        </>
    );
};

export default Route;