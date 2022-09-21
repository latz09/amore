import Image from 'next/image'
import Link from 'next/link'
import bagel from '../../../public/images/food/bfastBagel.jpg'

const FoodHero = () => {
    return ( 		<div className='relative w-full h-[80vh]'>
    <Image
        src={bagel}
        alt=''
        priority='true'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        placeholder='blur'
    />

    <div className='relative flex justify-center items-center h-full bg-black bg-opacity-50'>
        <div className='text-white grid gap-4 place-items-center max-w-7xl mx-auto text-center px-1'>
            <h1 className='text-6xl md:text-8xl tracking-wider'>
                Our Kitchen
            </h1>
            <h2 className='text-3xl md:text-5xl font-amoreCursive'>
                Breakfast, lunch, and snacks.  We offer a wide variety, including Gluten Free!
            </h2>
            <div className='py-4'>
                <Link href={'/amore-coffee-menu'}>
                    <span className="btn bg-gray-200 text-gray-800 text-4xl">Menu</span>
                </Link>
            </div>
        </div>
    </div>
</div> );
}
 
export default FoodHero;