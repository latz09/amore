import AboutBlurb from '../components/layout/about/aboutBlurb';
import ShortAbout from '../components/layout/about/shortAbout';
import CoffeeHero from '../components/layout/heros/CoffeeHero';
import FoodHero from '../components/layout/heros/FoodHero';
import LandingHero from '../components/layout/heros/LandingHero';

export default function Home() {
	return (
		<>
			<LandingHero />
			<div className=' bg-gray-200'>
				<AboutBlurb />
				<CoffeeHero />
				<ShortAbout />
				<FoodHero />
			</div>
		</>
	);
}
