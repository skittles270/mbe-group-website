import HeroSection from '@/components/home/HeroSection';
import BrandShowcase from '@/components/home/BrandShowcase';
import StatsStrip from '@/components/home/StatsStrip';
import AdvantagesPreview from '@/components/home/AdvantagesPreview';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsStrip />
      <BrandShowcase />
      <AdvantagesPreview />
    </div>
  );
}