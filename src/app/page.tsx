import HeroSection from '@/components/HeroSection';
import NewLaunchesCarousel from '@/components/NewLaunchesCarousel';
import AboutBlock from '@/components/AboutBlock';
import IndustryGrid from '@/components/IndustryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import CustomerReviews from '@/components/CustomerReviews';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <NewLaunchesCarousel />
      <AboutBlock />
      <IndustryGrid />
      <FeaturedProducts />
      <CustomerReviews />
    </div>
  );
}
