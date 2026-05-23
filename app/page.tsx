'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';
import { useRouter } from 'next/navigation';
import ReactPlayer from 'react-player';
import { motion, useScroll, useTransform } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Magnetic from '@/components/Magnetic';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog';
import { useState } from 'react';

const images = [
  '/assets/images/mavericks.webp',
  '/assets/images/awkward.webp',
  '/assets/images/100dts_prod.webp',
  '/assets/images/growing_up_broke.webp',
  '/assets/images/mabt.webp',
  '/assets/images/maker_junior.webp',
];

const clients = [
  { src: '/assets/images/sabc3.png', alt: 'SABC3' },
  { src: '/assets/images/nedbank.png', alt: 'Nedbank' },
  { src: '/assets/images/kwese.png', alt: 'Kwese' },
  { src: '/assets/images/riscura.svg', alt: 'RisCura' },
  { src: '/assets/images/uct.png', alt: 'UCT' },
  { src: '/assets/images/picknpay.svg', alt: 'Pick n Pay' },
  { src: '/assets/images/rothko.png', alt: 'Rothko' },
];

export default function LandingPage() {
  const router = useRouter();
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  // Scroll effects for Hero
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);
  
  // Parallax for featured section
  const featuredImageY = useTransform(scrollY, [500, 1500], [100, -100]);
  const featuredTextY = useTransform(scrollY, [500, 1500], [-50, 50]);

  const titleWords = "Inspiring Youth Through Engaging Content".split(" ");

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden pt-16">
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0 origin-center"
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <Image
              src="/assets/images/landing.webp"
              alt="Hero Background"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          <div className="relative z-20 px-4 md:px-6 flex flex-col items-center justify-center w-full container mx-auto text-center mt-[-10vh]">
            <div className="space-y-6 max-w-5xl flex flex-col items-center">
              
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 py-4">
                {titleWords.map((word, i) => (
                  <div key={i} className="overflow-hidden inline-block -mb-4">
                    <motion.span
                      className={`block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter drop-shadow-2xl leading-[1.1] pb-4 ${
                        i > 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500' : 'text-white'
                      }`}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-[700px] text-white/80 md:text-xl lg:text-2xl font-light"
              >
                Youngpreneur Media: Where young minds find inspiration, laughter, and relatable stories.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
              >
                <Magnetic strength={0.4}>
                  <Button
                    className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-8 text-xl transition-all hover:scale-105 duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)]"
                    onClick={() => setIsShowreelOpen(true)}
                  >
                    <Play className="mr-3 h-6 w-6 fill-black" /> Watch Showreel
                  </Button>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <Button
                    variant="outline"
                    className="rounded-full px-10 py-8 text-xl border-white/20 hover:bg-white/10 text-white transition-all duration-300"
                    onClick={() => router.push('/our-work')}
                  >
                    Explore Shows
                  </Button>
                </Magnetic>
              </motion.div>
            </div>
          </div>

          <Dialog open={isShowreelOpen} onOpenChange={setIsShowreelOpen}>
            <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] p-1 bg-black/60 backdrop-blur-3xl border-white/10 rounded-[32px] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.8)]">
              <DialogHeader className="p-6 absolute top-0 left-0 z-50 pointer-events-none">
                <DialogTitle className="text-white text-2xl drop-shadow-md">YPM Showreel 2024</DialogTitle>
                <DialogDescription className="text-white/70 drop-shadow-md">A glimpse of our work and productions</DialogDescription>
              </DialogHeader>
              <div className="relative w-full aspect-video bg-black rounded-[28px] overflow-hidden mt-20">
                <ReactPlayer
                  url="https://youtu.be/iMI-Wn2fvv4"
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                  controls={true}
                  playing={isShowreelOpen}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1, modestbranding: 1, rel: 0 },
                    },
                  }}
                />
              </div>
              <DialogFooter className="mt-4 p-4 justify-center sm:justify-center">
                <Magnetic strength={0.2}>
                  <Button variant="ghost" className="text-white/60 hover:text-white rounded-full px-8 py-6" onClick={() => setIsShowreelOpen(false)}>
                    Close
                  </Button>
                </Magnetic>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        {/* FEATURED PRODUCTION (100 Days to Succeed) */}
        <section className="w-full py-32 md:py-48 lg:py-64 bg-[#050505] relative overflow-hidden">
          <div className="px-4 md:px-6 container mx-auto">
            <motion.div 
              style={{ y: featuredTextY }}
              className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center"
            >
              <div className="space-y-10 z-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="inline-block rounded-full bg-white/5 border border-white/10 px-5 py-2 font-medium text-white/80 text-sm mb-8 backdrop-blur-md">
                    🏆 SAFTA Nominated: Best Youth Programme
                  </div>
                  <h2 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6">
                    100 Days <br/>to Succeed
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-light text-white/80 mb-6">
                    Laugh Out Loud with Our Latest Hit
                  </h3>
                  <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-lg">
                    Join the hilarious adventures of high school friends, Esihle
                    and Rhandzu, as they navigate teen life, first crushes, and
                    the challenges of growing up. It&apos;s a rollercoaster of
                    emotions you won&apos;t want to miss!
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="inline-block">
                        <Magnetic strength={0.4}>
                          <Button className="rounded-full bg-white text-black hover:bg-white/90 px-10 py-8 text-xl transition-all hover:scale-105 duration-300">
                            <Play className="mr-3 h-6 w-6 fill-black" /> Watch Trailer
                          </Button>
                        </Magnetic>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] p-1 bg-black/60 backdrop-blur-3xl border-white/10 rounded-[32px] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.8)]">
                      <div className="relative w-full aspect-video rounded-[28px] overflow-hidden">
                        <ReactPlayer
                          url="https://youtu.be/5z6d4LhNsPo"
                          width="100%"
                          height="100%"
                          className="absolute top-0 left-0"
                          controls={true}
                          config={{
                            youtube: { playerVars: { showinfo: 1, modestbranding: 1, rel: 0 } },
                          }}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              </div>

              <motion.div 
                style={{ y: featuredImageY }}
                className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.4)] group z-10"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <Image
                  alt="Teen Comedy Show Poster"
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  fill
                  src="/assets/images/100dts.webp"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PRODUCTIONS */}
        <section className="w-full py-32 md:py-48 bg-black relative">
          <div className="px-4 md:px-6 container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-white mb-6">
                Productions
              </h2>
              <p className="text-2xl text-white/50 font-light max-w-2xl mx-auto">
                A showcase of our premium cinematic content.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <ImageGallery images={images} />
            </motion.div>
          </div>
        </section>

        {/* CLIENTS MARQUEE */}
        <section className="w-full py-32 bg-[#050505] overflow-hidden border-t border-b border-white/5">
          <div className="container mx-auto px-4 md:px-6 mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-semibold tracking-tighter text-white/60 text-center"
            >
              Trusted by Industry Leaders
            </motion.h2>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
            <Marquee speed={50} gradient={false} className="py-12 flex items-center">
              {clients.map((client, idx) => (
                <Magnetic key={idx} strength={0.3} className="mx-16 lg:mx-24">
                  <div className="w-[180px] h-[80px] relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-110">
                    <Image src={client.src} alt={client.alt} fill className="object-contain" />
                  </div>
                </Magnetic>
              ))}
            </Marquee>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="w-full py-40 md:py-64 bg-black relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="px-4 md:px-6 container mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-10 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-6xl md:text-8xl lg:text-[100px] font-extrabold tracking-tighter text-white leading-none">
                Have a show idea?
              </h2>
              <p className="text-2xl md:text-3xl text-white/50 font-light max-w-2xl">
                Contact us, and let us breathe life into your vision.
              </p>
              
              <div className="w-full pt-12">
                <form className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <div className="relative w-full max-w-lg group">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
                    <Input
                      className="relative w-full h-20 bg-white/5 border border-white/10 rounded-full px-8 text-xl text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all backdrop-blur-xl"
                      placeholder="Enter your email address"
                      type="email"
                    />
                  </div>
                  <Magnetic strength={0.4}>
                    <Button type="submit" className="h-20 rounded-full px-12 bg-white text-black hover:bg-white/90 font-medium text-xl w-full md:w-auto transition-transform hover:scale-105 duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                      Let&apos;s talk
                    </Button>
                  </Magnetic>
                </form>
                <p className="text-base text-white/30 mt-8 font-light">
                  By emailing, you agree to having one of our team members reaching out to you.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
