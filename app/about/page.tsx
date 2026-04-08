import AboutUsSection from "../components/AboutUs";
import NewsletterSection from "../components/Newsletter";
import Testimonials from "../components/Testimonials";

export default function AboutUsPage() {
  return (
    <main className="pt-32">
      <AboutUsSection />
      <Testimonials/>
      <NewsletterSection/>
    </main>
  );
}
