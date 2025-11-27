import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-blue">
            <div className="reponsive footer">
                <Link href="/">
                    <p className='font-ironManOfWar text-med'>CLORR</p>
                </Link>
            </div>
        </div>
    );
};

export default Footer;