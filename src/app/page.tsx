"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Crown, Diamond, Palette, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Top Man Clothing"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated-grid",
      }}
      title="Elegance Redefined"
      description="Discover exquisite Indian ethnic wear for the modern man. Handcrafted attire for every occasion, blending tradition with contemporary style."
      buttons={[
        {
          text: "Shop New Arrivals",
          href: "#products",
        },
        {
          text: "Explore Collection",
          href: "#products",
        },
      ]}
      buttonAnimation="slide-up"
      carouselItems={[
        {
          id: "hero-carousel-1",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-man-city-male-traditional-turban-hinduist-summer-city_1157-41030.jpg",
          imageAlt: "Man in elegant Indian kurta",
        },
        {
          id: "hero-carousel-2",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-posing-with-his-skateboard-city_23-2148823993.jpg",
          imageAlt: "Man in stylish traditional Indian outfit",
        },
        {
          id: "hero-carousel-3",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-stylish-man-black-traditional-clothes-with-white-scarf-posed-outdoor-against-yellow-autumn-leaves-tree_627829-2492.jpg",
          imageAlt: "Man in modern ethnic jacket",
        },
        {
          id: "hero-carousel-4",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-stylish-man-black-traditional-clothes-with-white-scarf-posed-outdoor-against-yellow-autumn-leaves-tree_627829-2481.jpg",
          imageAlt: "Man in classic Indian ethnic wear",
        },
        {
          id: "hero-carousel-5",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-beard-indian-man-with-bindi-forehead-wear-blue-suit-posed-outdoor-against-green-bushes-park_627829-1864.jpg",
          imageAlt: "Man in royal Indian sherwani",
        },
        {
          id: "hero-carousel-6",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-stylish-man-black-traditional-clothes-with-white-scarf-posed-outdoor_627829-12675.jpg",
          imageAlt: "Man in fusion ethnic wear",
        },
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Top Man Classic",
          name: "Emerald Green Silk Kurta",
          price: "₹4,999",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-floral-wear-standing-against-grey-wall-looking-away_23-2148122010.jpg",
          imageAlt: "Emerald Green Silk Kurta",
        },
        {
          id: "p2",
          brand: "Regal Attire",
          name: "Midnight Blue Embroidered Sherwani",
          price: "₹12,499",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-man-room-male-traditional-turban-hinduist-room_1157-41040.jpg",
          imageAlt: "Midnight Blue Embroidered Sherwani",
        },
        {
          id: "p3",
          brand: "Modern Maharaja",
          name: "Charcoal Grey Bandhgala Jacket",
          price: "₹7,899",
          rating: 5,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-black-rose-indoors_23-2150875026.jpg",
          imageAlt: "Charcoal Grey Bandhgala Jacket",
        },
        {
          id: "p4",
          brand: "Urban Ethnic",
          name: "Sage Green Pathani Suit",
          price: "₹3,799",
          rating: 4,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-light-gray-plaster_1194-6839.jpg",
          imageAlt: "Sage Green Pathani Suit",
        },
        {
          id: "p5",
          brand: "Festive Threads",
          name: "Floral Printed Nehru Jacket",
          price: "₹5,299",
          rating: 5,
          reviewCount: "70",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-man-mountains-male-traditional-turban-hinduist_1157-41080.jpg",
          imageAlt: "Floral Printed Nehru Jacket",
        },
        {
          id: "p6",
          brand: "Heirloom Collection",
          name: "Ivory Brocade Kurta Set",
          price: "₹6,199",
          rating: 5,
          reviewCount: "110",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-man-city-male-traditional-turban-hinduist-summer-city_1157-41037.jpg",
          imageAlt: "Ivory Brocade Kurta Set",
        },
      ]}
      title="Our Exquisite Collection"
      description="Explore our curated selection of ethnic wear, blending tradition with contemporary style and premium quality."
      tag="New Arrivals"
      buttons={[
        {
          text: "View All Products",
          href: "#products",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Handcrafted Excellence",
          description: "Each garment is meticulously crafted by skilled artisans, ensuring superior quality and intricate detailing.",
          bentoComponent: "reveal-icon",
          icon: Sparkles,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-businesman-summer-city_1157-25624.jpg",
          imageAlt: "Handsome businesman in a summer city",
        },
        {
          title: "Premium Fabrics",
          description: "We source only the finest silks, cottons, and blends for comfort, durability, and a luxurious feel.",
          bentoComponent: "reveal-icon",
          icon: Diamond,
          imageSrc: "http://img.b2bpic.net/free-photo/indian-man-city-male-traditional-turban-hinduist-summer-city_1157-41030.jpg",
          imageAlt: "Handsome businesman in a summer city",
        },
        {
          title: "Contemporary Designs",
          description: "Our collections feature modern cuts and styles that perfectly complement traditional Indian aesthetics.",
          bentoComponent: "reveal-icon",
          icon: Palette,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-posing-with-his-skateboard-city_23-2148823993.jpg",
          imageAlt: "Handsome businesman in a summer city",
        },
        {
          title: "Perfect Fit Guarantee",
          description: "Enjoy tailored elegance with our precise sizing and easy return policy to ensure your satisfaction.",
          bentoComponent: "reveal-icon",
          icon: Crown,
          imageSrc: "http://img.b2bpic.net/free-photo/indian-stylish-man-black-traditional-clothes-with-white-scarf-posed-outdoor-against-yellow-autumn-leaves-tree_627829-2492.jpg",
          imageAlt: "Handsome businesman in a summer city",
        },
      ]}
      title="Why Choose Top Man Clothing?"
      description="Experience unparalleled craftsmanship, premium fabrics, and designs that reflect your unique style. We blend tradition with modern aesthetics."
      tag="Our Promise"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Our Heritage of Style"
      description="Top Man Clothing is dedicated to bringing the finest Indian ethnic wear, blending age-old traditions with modern aesthetics for the discerning gentleman."
      subdescription="We believe in preserving cultural elegance while innovating for the contemporary man. Each piece tells a story of artistry, passion, and heritage."
      icon={Award}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-young-woman-wearing-sari_23-2149502993.jpg"
      imageAlt="Indian textile craftsman at work"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Rahul Sharma",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-indian-man-posing-studio_23-2150692793.jpg",
          imageAlt: "Rahul Sharma",
        },
        {
          id: "2",
          name: "Anil Kapoor",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-correcting-grammar-mistakes_23-2150171372.jpg",
          imageAlt: "Anil Kapoor",
        },
        {
          id: "3",
          name: "Vivek Singh",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-smiling-hipster-man-posing-studio_158538-25580.jpg",
          imageAlt: "Vivek Singh",
        },
        {
          id: "4",
          name: "Arjun Desai",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-plus-size-woman-holding-shopping-bags-looking-excited-outdoors-street_58466-16106.jpg",
          imageAlt: "Arjun Desai",
        },
        {
          id: "5",
          name: "Kabir Khan",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-african-american-man-with-moustache-smiling-white-teeth-looking-happy-confident-standing-checked-shirt-against-white-background_176420-46881.jpg",
          imageAlt: "Kabir Khan",
        },
        {
          id: "6",
          name: "Siddharth Rao",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-with-cancer-picking-clothes-with-her-friend_23-2151056059.jpg",
          imageAlt: "Siddharth Rao",
        },
      ]}
      cardTitle="Our customers look and feel their best in Top Man Clothing. Hear from them:"
      cardTag="Customer Stories"
      buttons={[
        {
          text: "Read All Reviews",
          href: "#testimonials",
        },
      ]}
      buttonAnimation="slide-up"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "India Style",
        "Ethnic Vogue",
        "Culture Couture",
        "Desi Threads",
        "Runway India",
        "Fashion Bharat",
        "Heritage Chic",
      ]}
      title="Trusted by Fashion Enthusiasts"
      description="Our designs have graced stages and been featured by leading voices in Indian fashion."
      tag="As Seen In"
      speed={40}
      showCard={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "What payment methods do you accept?",
          content: "We accept major credit cards (Visa, Mastercard, Amex), UPI, Net Banking, and popular digital wallets.",
        },
        {
          id: "faq2",
          title: "How do I choose the right size?",
          content: "Please refer to our detailed sizing guide available on each product page. We recommend measuring yourself and comparing it to our charts.",
        },
        {
          id: "faq3",
          title: "What is your return policy?",
          content: "We offer a 7-day hassle-free return policy for unworn items with original tags. Please see our full policy for details.",
        },
        {
          id: "faq4",
          title: "Do you offer international shipping?",
          content: "Yes, we ship worldwide! Shipping costs and delivery times vary by destination. Details are available at checkout.",
        },
        {
          id: "faq5",
          title: "What materials are your garments made from?",
          content: "We primarily use premium natural fabrics like silk, cotton, linen, and blends, ensuring comfort and a luxurious feel. Specific material details are listed on each product page.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our products, sizing, shipping, and returns."
      tag="Support"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Connect With Us"
      description="Have questions or need assistance with your order? Our dedicated team is here to provide you with prompt and friendly support."
      imageSrc="http://img.b2bpic.net/free-photo/businessman-talking-mobile-outdoor_1368-6200.jpg"
      imageAlt="Customer service agent smiling"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
      termsText="By sending a message you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Shop All",
              href: "#products",
            },
            {
              label: "Kurtas",
              href: "#products",
            },
            {
              label: "Sherwanis",
              href: "#products",
            },
            {
              label: "Jackets",
              href: "#products",
            },
          ],
        },
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Why Choose Us",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Shipping & Returns",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Top Man Clothing"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
