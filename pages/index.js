import AboutBlurb from '../components/layout/about/aboutBlurb';
import CoffeeHero from '../components/layout/heros/CoffeeHero';
import LandingHero from '../components/layout/heros/LandingHero';

export default function Home() {
	return (
		<>
			<LandingHero />
			<div className=' bg-gray-200'>
				<AboutBlurb />
				<CoffeeHero />
			</div>
		</>
	);
}
