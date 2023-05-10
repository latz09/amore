import AboutBlurb from '../components/about/aboutBlurb';
import ShortAbout from '../components/about/shortAbout';
import LocalMusiciansBlurb from '../components/Events/LocalMusiciansBlurb';
import CoffeeHero from '../components/layout/heros/CoffeeHero';
import EventSpaceHero from '../components/layout/heros/EventSpaceHero';
import FoodHero from '../components/layout/heros/FoodHero';
import LandingHero from '../components/layout/heros/LandingHero';

export default function Home() {
	return (
		<>
			<LandingHero />
			{/* <div className=' bg-gray-200'>
				<AboutBlurb />
				<CoffeeHero />
				<ShortAbout />
				<FoodHero />
				<LocalMusiciansBlurb />
				<EventSpaceHero />
				
			</div> */}
		</>
	);
}
