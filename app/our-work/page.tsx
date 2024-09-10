import Link from 'next/link';
import Image from 'next/image';

const content = [
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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {content.map((show, idx) => {
            return (
              <div
                className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                key={idx + show.title}
              >
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View Project</span>
                </Link>
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
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From concept to completion, we offer a wide range of production
                services to bring your vision to life.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Video Production</h3>
                <p className="text-muted-foreground">
                  Crafting visually stunning videos for your brand.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Photography</h3>
                <p className="text-muted-foreground">
                  Capturing captivating images to elevate your brand.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Motion Graphics</h3>
                <p className="text-muted-foreground">
                  Bringing your ideas to life with dynamic animations.
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width={550}
              height={310}
              alt="Services"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Post-Production</h3>
                <p className="text-muted-foreground">
                  Polishing your content to perfection with our editing
                  expertise.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Live Events</h3>
                <p className="text-muted-foreground">
                  Capturing the energy and excitement of your live events.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Aerial Cinematography</h3>
                <p className="text-muted-foreground">
                  Capturing breathtaking aerial footage to elevate your
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
