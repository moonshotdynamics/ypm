'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Play } from 'lucide-react';

// Helper function to get YouTube video ID
const getYouTubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper function to get YouTube thumbnail URL
const getYouTubeThumbnail = (url: string) => {
  const videoId = getYouTubeVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;
};

const placeholderImage =
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const creative = [
  {
    title: '100 Days to Succeed',
    description:
      'Esihle and Rhandzu put their non-existent talents to use, making video blogs for their online style guide channel. Upon reaching 10,000 subscribers for their fashion-forward videos, the friends are invited to attend a prestigious business & innovation school for talented kids where they are not taken seriously. There, they continue their quest to reach the top of the blogosphere, only the problem is, they have zero business acumen. The girls embark on a series of comedic adventures in hopes of becoming successful entrepreneurs.',
    imageUrl: '/assets/images/100dts_prod.webp',
    alt: '100 Days to Succeed',
  },
  {
    title: 'The Mavericks',
    description:
      'What happens when South Africa’s business elite pursue new dreams? People, passion and power are put to the test - as the big dream bigger. In a world of competition, conflict and innovation - South Africans strive forward to achieve the impossible. See what it takes to be a trailblazing entrepreneur as the business elite take on new challenges. Success recipes revealed; trade secrets uncovered: this is how to navigate the boardroom and economic transformation of a new South Africa. In The Mavericks we meet South Africa’s most successful entrepreneurs as they pursue new dreams. We are introduced to trailblazers, self-made millionaires, innovators who are the epitome of successful South Africans. The show unpacks the tools to success by uncovering the realities of the country’s self-made industry influencers as they pursue new business or social challenges - they have already achieved much, but the series captures them as they take a new turn in their journey.',
    imageUrl: '/assets/images/mavericks.webp',
    alt: 'The Mavericks',
  },
  {
    title: 'Awkward',
    description:
      "Welcome to Cape Town's quirky underbelly of publishing, where we dive into the lives of three friends — Lea, Sasha, and Melissa — who once aced their university classes together but now find their paths hilariously divergent. It's the perfect recipe for comedy and drama in '...Awkward,' because, as we all know, money between friends is always... well, awkward.",
    imageUrl: '/assets/images/awkward.webp',
    alt: 'Awkward',
  },
  {
    title: 'Growing Up Broke',
    description:
      "'Growing Up Broke' is a comedic romp through a country's rebirth, seen through the eyes of a boy who's just trying to make sense of it all. It’s a story about time: both history and one's future, fit together through the narrative of a child.",
    imageUrl: '/assets/images/growing_up_broke.webp',
    alt: 'Growing Up Broke',
  },
  {
    title: 'The Mysterious Adventures of the B-Team',
    description:
      "'The Mysterious Adventures of the B-Team' is a fun-filled comedy adventure series for children and early teens. Join a quirky group of friends as they stumble into exciting mysteries, tackle unexpected challenges, and learn to work together, all while navigating everyday life. With humor, teamwork, and a bit of chaos, this group takes on adventures that will leave audiences laughing and cheering for more",
    imageUrl: '/assets/images/mabt.webp',
    alt: 'The Mysterious Adventures of the B-Team',
  },
  {
    title: 'The Maker Junior',
    description:
      "'The Maker Junior: Unleash the Genius Within' is an exhilarating and electrifying television series that takes viewers on a thrilling journey into the minds of South Africa's brightest young STEAM prodigies.",
    imageUrl: '/assets/images/maker_junior.webp',
    alt: 'The Maker Junior',
  },
];

const corporate = [
  {
    title: 'Nedbank',
    description:
      'Nedbank Greenbacks Savings Program - A promotional video showcasing the benefits of the Nedbank Greenbacks Savings Program.',
    videoURL: 'https://youtu.be/KEfRCAYxia8',
  },
  {
    title: 'University of Cape Town',
    description:
      'A promotional video showcasing the University of Cape Town’s world-class facilities and academic programs.',
    videoURL: 'https://www.youtube.com/watch?v=z8OMTwcxjrM',
  },
  {
    title: 'LNL Group',
    description:
      'A corporate video introducing LNL Group’s services and showcasing their commitment to excellence.',
    videoURL: 'https://www.youtube.com/watch?v=77J2Gls-2U4',
  },
];

const film = [
  {
    title: 'Fulfilled',
    description:
      'A short film exploring the themes of love, loss, and redemption, set against the backdrop of a bustling city.',
    videoURL: 'https://youtu.be/6ayjsw2CipA',
  },
];

export default function Component() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleVideoClick = (videoURL: string) => {
    setSelectedVideo(videoURL);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 px-5">
        <section className="w-full pt-28 md:pt-32 lg:pt-40">
          <div className="container space-y-10 xl:space-y-16 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Image
                  src="/assets/images/logo.png"
                  width={220}
                  height={120}
                  alt="Production Company Logo"
                  className="mx-auto"
                  style={{ aspectRatio: '120/120', objectFit: 'contain' }}
                />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Youngpreneur Media
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Crafting visually stunning and captivating content for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              TV & Shows
            </h2>
          </div>

          <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {creative.map((show, idx) => {
              return (
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                  key={idx + show.title}
                >
                  <Image
                    src={show.imageUrl}
                    width={500}
                    height={300}
                    alt={show.alt}
                    className="aspect-video object-cover"
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">{show.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {show.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Film
            </h2>
          </div>

          <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {film.map((show, idx) => {
              const thumbnailUrl = getYouTubeThumbnail(show.videoURL);
              return (
                <div
                  key={idx + show.title}
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer"
                  onClick={() => handleVideoClick(show.videoURL)}
                >
                  <div className="relative aspect-video bg-gray-800">
                    {thumbnailUrl && (
                      <Image
                        src={thumbnailUrl}
                        alt={`${show.title} thumbnail`}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                      <Play className="w-12 h-12 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">{show.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {show.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Corporate
            </h2>
          </div>

          <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {corporate.map((show, idx) => {
              const thumbnailUrl = show.title.toLowerCase().includes('lnl')
                ? placeholderImage
                : getYouTubeThumbnail(show.videoURL);

              return (
                <div
                  key={idx + show.title}
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer"
                  onClick={() => handleVideoClick(show.videoURL)}
                >
                  <div className="relative aspect-video bg-gray-800">
                    {thumbnailUrl && (
                      <Image
                        src={thumbnailUrl}
                        alt={`${show.title} thumbnail`}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                      <Play className="w-12 h-12 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">{show.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {show.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">
                Ready to bring your vision to life?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your project and how we can help.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                href="/contact-us"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] p-4">
          <DialogHeader>
            <DialogTitle>Watch Video</DialogTitle>
            <DialogDescription>
              Click outside or use the ESC key to close
            </DialogDescription>
          </DialogHeader>
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            {selectedVideo && (
              <ReactPlayer
                url={selectedVideo}
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
                controls={true}
                playing={isDialogOpen}
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
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
