import Trips from '../components/Ourtrips';
import Testimonials from '../components/Testimonials';
import NewsletterSection from '../components/Newsletter';


export default function ToursPage() {
  return (
    <main className="pt-32">
      <Trips />
      <Testimonials/>
      <NewsletterSection/>
    </main>
  );
}
