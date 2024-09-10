'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player';

const creative = [
  {
    title: '100 Days to Succeed',
    description:
      "Join the hilarious adventures of high school friends, Esihle and Rhandzu, as they navigate teen life, first crushes, and the challenges of growing up. It's a rollercoaster of emotions you won't want to miss!",
    imageUrl: '/assets/images/100dts_prod.webp',
    alt: '100 Days to Succeed',
  },
  {
    title: 'The Mavericks',
    description:
      'Follow the journey of a group of young entrepreneurs as they navigate the challenges of starting a business and making their mark on the world.',
    imageUrl: '/assets/images/mavericks.webp',
    alt: 'The Mavericks',
  },
  {
    title: 'Awkward',
    description:
      'Experience the awkward, funny, and relatable moments of high school life with our teen drama series.',
    imageUrl: '/assets/images/awkward.webp',
    alt: 'Awkward',
  },
  {
    title: 'Growing Up Broke',
    description:
      'A heartwarming and inspiring documentary series that follows the lives of young people overcoming adversity and pursuing their dreams.',
    imageUrl: '/assets/images/growing_up_broke.webp',
    alt: 'Growing Up Broke',
  },
  {
    title: 'The Mysterious Adventures of the B-Team',
    description:
      'Join the B-Team on their thrilling adventures as they solve mysteries, uncover secrets, and save the day!',
    imageUrl: '/assets/images/mabt.webp',
    alt: 'The Mysterious Adventures of the B-Team',
  },
  {
    title: 'The Maker Junior',
    description:
      'Get ready for creativity, innovation, and fun with our DIY show for kids and teens.',
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
    videoURL: 'https://www.youtube.com/watch?v=77J2Gls-2U4&t=7s',
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
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
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
            return (
              <div
                className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                key={idx + show.title}
              >
                <ReactPlayer
                  url={show.videoURL}
                  width="640px"
                  height="480px"
                  className="flex justify-center"
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
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
            Corporate
          </h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {corporate.map((show, idx) => {
            return (
              <div
                className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                key={idx + show.title}
              >
                <ReactPlayer
                  url={show.videoURL}
                  width="640px"
                  height="480px"
                  className="flex justify-center"
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
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
    </div>
  );
}
