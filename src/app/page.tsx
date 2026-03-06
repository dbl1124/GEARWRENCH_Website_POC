import HeroSection from '@/components/HeroSection';
import NewLaunchesCarousel from '@/components/NewLaunchesCarousel';
import AboutBlock from '@/components/AboutBlock';
import IndustryGrid from '@/components/IndustryGrid';
import FeaturedCategories from '@/components/FeaturedCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import CustomerReviews from '@/components/CustomerReviews';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <NewLaunchesCarousel />
      <AboutBlock />
      <IndustryGrid />
      <FeaturedCategories />
      <FeaturedProducts />
      <CustomerReviews />
    </div>
  );
}
