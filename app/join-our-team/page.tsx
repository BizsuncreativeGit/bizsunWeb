"use client";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "../faq-section";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { title } from "process";



export default function JoinOurTeam() {

  const values = [
    {
      title: "Company Values",
      desc: "At Bizsun Creative, trust, transparency, and collaboration form the foundation of everything we do. We believe in learning together,supporting one another, and creating work that we can truly be proud of.",
      image: "/join 1.1.png",
    },
    {
      title: "Friendly & Supportive Culture",
      desc: "We foster a positive and inclusive work environment where ideas are respected, teamwork is encouraged, and open communication helps everyone feel valued and heard.",
      image: "/join 1.2.png",
    },
    {
      title: "Work–Life Balance",
      desc: "We understand that great work comes from a healthy balance. Flexible work practices and mutual respect help our team manage both professional goals and personal well-being.",
      image: "/join 1.3.png",
    },
    {
      title: "Continuous Growth",
      desc: "Learning never stops at Bizsun Creative. We support skill development through real projects, mentorship, and opportunities that help you grow both professionally and creatively.",
      image: "/join 1.4.png",
    },
    {
      title: "Meaningful Work & Ownership",
      desc: "At Bizsun Creative, your work has real impact. You get ownership of projects, the freedom to take initiative, and the opportunity to see your ideas turn into meaningful outcomes for real businesses.",
      image: "/join 1.5.png",
    },
  ]

  const images = [
    {
      image: "/join 1.1.png",
      title: "I truly appreciate the culture at Bizsun Creative. It’s a place where ideas are respected, collaboration is encouraged, and learning happens every day. The team is supportive, and there’s always room to grow, experiment, and improve your skills while working on meaningful projects.",
      name: "Dolly Singh",
      position: "Product Designer"
    },
    {
      image: "/join 1.2.png",
      title: "Bizsun Creative encourages innovation and teamwork. I love how every challenge here turns into a learning opportunity, pushing me to deliver my best work.",
      name: "Aman Verma",
      position: "UI/UX Designer"
    },
    {
      image: "/join 1.3.png",
      title: "The collaborative environment at Bizsun Creative makes problem-solving enjoyable. Everyone’s ideas matter, and that motivates me to think creatively every day.",
      name: "Neha Sharma",
      position: "Frontend Developer"
    },
    {
      image: "/join 1.4.png",
      title: "What I value most about Bizsun Creative is the trust and flexibility. It allows me to experiment, improve my skills, and work on impactful digital products.",
      name: "Rahul Mehta",
      position: "Digital Marketing Strategist"
    },
    {
      image: "/join 1.5.png",
      title: "Bizsun Creative is a place where passion meets purpose. The supportive culture and inspiring projects make it a great environment to grow your career.",
      name: "Priya Nair",
      position: "Content Strategist"
    }
  ];


  const [active, setActive] = useState(0);

  const nextImage = () => {
    setActive((prev) => (prev + 1) % images.length);
  };



  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background + pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-gray-400" />
          <div className="absolute top-40 right-32 w-48 h-48 rounded-full border border-gray-400" />
          <div className="absolute bottom-32 left-1/3 w-32 h-32 rounded-full border border-gray-400" />
          <div className="absolute top-1/2 right-1/4 w-96 h-px bg-gray-400 rotate-12" />
          <div className="absolute top-1/3 left-1/4 w-80 h-px bg-gray-400 -rotate-12" />
        </div>
      </div>

      {/* Hero background */}
      <div
        className="relative z-10"
        style={{
          background:
            "linear-gradient(200deg, rgba(88, 183, 95, 0.5), rgba(100, 203, 113, 0.15), rgba(100, 203, 113, 0.12))",
        }}
      >
        <Header />

        {/* Hero section */}
        <main className="container mx-auto px-6 pt-12 pb-24 relative min-h-[70vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-[0.25em] text-green-800 mb-3">
                JOIN OUR TEAM
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF9000] mb-4 leading-tight">
                Join Our Team
              </h1>
              <p className="text-base md:text-lg text-[#1F2933] leading-relaxed mb-6">
                At Bizsun Creative, we believe careers are built through
                meaningful work, continuous learning, and strong collaboration.
                We&apos;re a team of designers, marketers, developers, and
                strategists working together to solve real business challenges
                through creativity and technology.
              </p>
              <p className="text-base md:text-lg text-[#1F2933] leading-relaxed mb-8">
                Here, your ideas matter, your skills are nurtured, and your
                growth is supported at every stage. Whether you&apos;re
                starting your journey or looking to take the next step in your
                career, Bizsun Creative offers an environment where you can
                learn, contribute, and grow while creating impactful work that
                truly makes a difference.
              </p>
              <Link
                href="#open-roles"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm md:text-base font-semibold text-white shadow-lg hover:opacity-90 hover:scale-105 transition-transform"
                style={{
                  background:
                    "linear-gradient(to right, #64CB71, #418F40)",
                }}
              >
                Open Positions
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* ================= MAIN CONTENT WITH SECTION GAPS ================= */}
      <div
        className="w-full flex flex-col gap-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(100, 203, 113, 0.12) 0%,rgba(100, 203, 113, 0.12) 30%,rgba(255, 240, 150, 0.18) 70%,rgba(255, 240, 150, 0.18) 100%)",
        }}
      >
        {/* Section 1 */}
        <section className="container mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-[1360px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#181818] mb-10">
              What makes Bizsun a great place to work?
            </h2>

            <div
              className="grid gap-8 justify-content-center"
              style={{
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(180px, 1fr))",
              }}
            >

              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white shadow-md p-6 border border-[#E5F3E7]
                  flex flex-col items-center w-full max-w-[200px]"
                >
                  <div className="w-full mb-3">
                    <Image className="w-full h-auto object-contain"
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      sizes="(max-width: 200px) 100vw, 200px"
                    />
                  </div>

                  <div className="pt-8 text-center">
                    <h3 className="text-base font-semibold text-[#181818] mb-3 ">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-700 text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>



        {/* Section 2 – container up to 1374px per Figma */}
        <section className="container mx-auto max-w-[1400px] px-6 py-20 md:py-28">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181818] mb-2">
              Don&apos;t just take our word for it!
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              See the feedback from your teammates.
            </p>
          </div>



          {/* Container – Figma: 1374×651px, border-radius 18px */}
          <div
            className="w-full max-w-[1374px] mx-auto rounded-[18px] bg-white shadow-lg  border-[#E5F3E7] p-8 md:p-12 min-h-[400px] md:min-h-[651px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
          >


            {/* Left – active image */}
            <div className="flex-shrink-0 order-1 md:order-2">
              <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-56 md:h-64 lg:w-64 lg:h-80 rounded-[18px] overflow-hidden shadow-lg">
                <Image
                  src={images[active].image}
                  alt={images[active].name}
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Left – text content */}
            <div className="flex-1 max-w-md md:max-w-xl order-2 md:order-1">
              <div className="relative mb-4 md:mb-6">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-4 md:mb-6">
                {images[active].title}
              </p>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">{images[active].name}</h4>
                <span className="text-sm text-gray-500">{images[active].position}</span>
              </div>
            </div>

            {/* Right – Remaining images (Figma: 113×651px, left 1035px) */}
            {/* <div className="flex-shrink-0 relative order-3 w-[113px] min-h-[72px] md:min-h-[651px] flex items-center justify-end">
              {images
                .filter((_, i) => i !== active)
                .slice(0, 3)
                .map((item, index) => {
                  const offset = index * 8
                  const zIndex = 30 - index * 10
                  const size = 48
                  return (
                    <div
                      key={item.image}
                      onClick={() => setActive(images.findIndex((img) => img.image === item.image))}
                      className="absolute cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 rounded-full overflow-hidden border-[3px] border-white shadow-lg"
                      style={{
                        right: offset,
                        zIndex,
                        width: size,
                        height: size,
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={size}
                        height={size}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )
                })}
            </div> */}
          </div>


        </section>

        {/* Section 3 */}
        {/* <section className="container mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181818] mb-3">
              How to Become a Part of Bizsun Creative?
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Joining Bizsun Creative is simple and transparent. Follow the
              steps below to begin your journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-10 items-start">
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Find a Role That Fits You",
                  desc: "Explore our open positions and pick the one that best matches your skills and interests.",
                },
                {
                  step: "02",
                  title: "Submit Your Application",
                  desc: "Fill in a short application form and share your portfolio, GitHub, or past work samples.",
                },
                {
                  step: "03",
                  title: "Application Review",
                  desc: "Our team will carefully review your profile to understand your strengths and potential fit.",
                },
                {
                  step: "04",
                  title: "Interview & Skill Discussion",
                  desc: "Have a friendly conversation with our team to discuss your experience, approach, and way of working.",
                },
                {
                  step: "05",
                  title: "Start Your Journey",
                  desc: "If it&apos;s a match, we&apos;ll share an offer and help you onboard smoothly into Bizsun Creative.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex flex-col items-center mr-2">
                    <div className="w-10 h-10 rounded-full bg-[#64CB71] text-white flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                    <div className="w-px flex-1 bg-[#D1E8D5]" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-[#181818] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white shadow-md border border-[#E5F3E7] p-6">
              <h3 className="text-lg font-semibold text-[#181818] mb-3">
                Positions We&apos;re Always Looking For
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Graphic Designer",
                  "Video Editor",
                  "Digital Marketing Executive",
                  "Content Writer",
                  "UI/UX Designer",
                  "Web Developer",
                  "Social Media Manager",
                  "Business Development / Client Coordinator",
                ].map((role) => (
                  <span
                    key={role}
                    className="px-4 py-2 rounded-full text-xs md:text-sm bg-[#FDFBF5] border border-[#F2E3C5] text-[#181818]"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-4">
                Don&apos;t see a role that fits? Send us your portfolio anyway.
                We&apos;re always excited to meet passionate people.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center mt-5 px-6 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:opacity-90 hover:scale-105 transition-transform"
                style={{
                  background:
                    "linear-gradient(to right, #64CB71, #418F40)",
                }}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section> */}
      </div>

      {/* FAQ section reused */}
      <FAQSection />

      <Footer />
    </div>
  );
}
