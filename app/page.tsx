'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';
import { useRouter } from 'next/navigation';
import ReactPlayer from 'react-player';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog';
import { useState, useEffect } from 'react';

const images = [
  '/assets/images/mavericks.webp',
  '/assets/images/awkward.webp',
  '/assets/images/100dts_prod.webp',
  '/assets/images/growing_up_broke.webp',
  '/assets/images/mabt.webp',
  '/assets/images/maker_junior.webp',
];

export default function LandingPage() {
  const router = useRouter();
  const [playerWidth, setPlayerWidth] = useState('100%');
  const [playerHeight, setPlayerHeight] = useState('100%');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // mobile
        setPlayerWidth('100%');
        setPlayerHeight('240px');
      } else {
        // desktop
        setPlayerWidth('640px');
        setPlayerHeight('360px');
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/images/landing.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="px-4 md:px-6 flex justify-center w-full container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Inspiring Youth Through Engaging Content
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Youngpreneur Media: Where young minds find inspiration,
                  laughter, and relatable stories.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  variant="secondary"
                  onClick={() => router.push('/our-work')}
                >
                  Explore Shows
                </Button>
                <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
                  Watch Showreel
                </Button>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] p-4">
                    <DialogHeader className="mb-4">
                      <DialogTitle>YPM Showreel 2024</DialogTitle>
                      <DialogDescription>
                        A glimpse of our work and productions
                      </DialogDescription>
                    </DialogHeader>
                    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                      <ReactPlayer
                        url="https://youtu.be/iMI-Wn2fvv4"
                        width="100%"
                        height="100%"
                        className="absolute top-0 left-0"
                        controls={true}
                        config={{
                          youtube: {
                            playerVars: { 
                              showinfo: 1,
                              modestbranding: 1,
                              rel: 0
                            },
                          },
                        }}
                      />
                    </div>
                    <DialogFooter className="mt-4">
                      <Button
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Close
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="px-4 md:px-6 container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              🏆 SAFTA Nominated: 100 Day&apos;s to Succeed
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gold px-3 py-1 font-bold text-white text-md">
                  SAFTA Nominated: Best Youth Programme
                </div>
                <h3 className="text-2xl font-bold">
                  Laugh Out Loud with Our Latest Hit
                </h3>
                <p className="text-white dark:text-gray-400">
                  Join the hilarious adventures of high school friends, Esihle
                  and Rhandzu, as they navigate teen life, first crushes, and
                  the challenges of growing up. It&apos;s a rollercoaster of
                  emotions you won&apos;t want to miss!
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="inline-flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4" /> Watch Trailer
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] p-0">
                    <div className="relative w-full aspect-video">
                      <ReactPlayer
                        url="https://youtu.be/5z6d4LhNsPo"
                        width={playerWidth}
                        height={playerHeight}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        controls={true}
                        config={{
                          youtube: {
                            playerVars: {
                              showinfo: 1,
                              modestbranding: 1,
                              rel: 0,
                            },
                          },
                        }}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl">
                <Image
                  alt="Teen Comedy Show Poster"
                  className="object-cover w-full h-full"
                  height="300"
                  src="/assets/images/100dts.webp"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-500 overflow-x-hidden">
          <div className="px-4 md:px-6 container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-8">
                  Our Productions
                </h2>
                <ImageGallery images={images} />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="px-4 md:px-6 container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black mb-8 text-center">
              Our Clients
            </h2>
            <div className="flex sm:flex-row flex-col gap-4 justify-center items-center">
              <div className="w-[200px] h-[100px] relative">
                <Image src="/assets/images/sabc3.png" alt="SABC3 Logo" fill className="object-contain" />
              </div>
              <div className="w-[200px] h-[100px] relative">
                <Image src="/assets/images/nedbank.png" alt="Nedbank Logo" fill className="object-contain" />
              </div>
              <div className="w-[200px] h-[100px] relative">
                <Image src="/assets/images/kwese.png" alt="Kwese Logo" fill className="object-contain" />
              </div>
              <div className="w-[200px] h-[100px] relative">
                <Image src="/assets/images/riscura.svg" alt="RisCura Logo" fill className="object-contain" />
              </div>
              <div className="w-[200px] h-[100px] relative">
                <Image src="/assets/images/uct.png" alt="UCT Logo" fill className="object-contain" />
              </div>
              <div className="w-[200px] h-[100px] relative">
                <Image src="/assets/images/picknpay.svg" alt="Pick n Pay Logo" fill className="object-contain" />
              </div>
              <div className="w-[200px] h-[100px] relative">
                <Image src="/assets/images/rothko.png" alt="Client Logo" fill className="object-contain" />
                <div className="bg-black w-full h-full"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="px-4 md:px-6 container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Have a show idea?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Contact us, and let us breathe life into your vision.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Let&apos;s work</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By emailing, you agree to having one of our team members
                  reaching out to you via email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
