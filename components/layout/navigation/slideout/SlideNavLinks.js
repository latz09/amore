import { navLinks } from "../../../../data/navLinks";
import Link from "next/link";

const SlideNavLinks = ({open, setOpen}) => {
    return ( <div className="grid place-items-center gap-8">
    {navLinks.map((link) => (
        <div
            key={link.name}
            className='text-lg'
            onClick={() => setOpen(!open)}
        >
            <Link href={link.link}>
                <a className='text-gray-700 text-xl'>{link.name}</a>
            </Link>
        </div>
    ))}
</div> );
}
 
export default SlideNavLinks;