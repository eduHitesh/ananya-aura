import Hero from "@/components/marketing/Hero";
import Footer from "@/components/marketing/Footer";
import JsonLd from "@/components/marketing/JsonLd";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container max-w-6xl mx-auto px-4">
        <Hero />
      </section>
      <Footer />
      <JsonLd />
    </main>
  );
};

export default Index;
