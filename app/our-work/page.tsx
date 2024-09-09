import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <img
                src="/placeholder.svg"
                width={120}
                height={120}
                alt="Production Company Logo"
                className="mx-auto"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Youngpreneur Media
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Crafting visually stunning and captivating content for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              width={500}
              height={300}
              alt="Project 1"
              className="aspect-video object-cover"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Corporate Video</h3>
              <p className="text-sm text-muted-foreground">A sleek and professional corporate video for our client.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              width={500}
              height={300}
              alt="Project 2"
              className="aspect-video object-cover"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Product Explainer</h3>
              <p className="text-sm text-muted-foreground">
                An engaging product explainer video for our client&apos;s new launch.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              width={500}
              height={300}
              alt="Project 3"
              className="aspect-video object-cover"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Brand Promo Video</h3>
              <p className="text-sm text-muted-foreground">
                A visually stunning brand promo video for our client&apos;s new campaign.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              width={500}
              height={300}
              alt="Project 4"
              className="aspect-video object-cover"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Event Highlights</h3>
              <p className="text-sm text-muted-foreground">
                Capturing the energy and excitement of our client&apos;s annual event.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              width={500}
              height={300}
              alt="Project 5"
              className="aspect-video object-cover"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Social Media Content</h3>
              <p className="text-sm text-muted-foreground">
                Engaging social media content to showcase our client&apos;s brand.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              width={500}
              height={300}
              alt="Project 6"
              className="aspect-video object-cover"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Documentary Film</h3>
              <p className="text-sm text-muted-foreground">
                A captivating documentary film that tells a powerful story.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From concept to completion, we offer a wide range of production services to bring your vision to life.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Video Production</h3>
                <p className="text-muted-foreground">Crafting visually stunning videos for your brand.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Photography</h3>
                <p className="text-muted-foreground">Capturing captivating images to elevate your brand.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Motion Graphics</h3>
                <p className="text-muted-foreground">Bringing your ideas to life with dynamic animations.</p>
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
                  Polishing your content to perfection with our editing expertise.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Live Events</h3>
                <p className="text-muted-foreground">Capturing the energy and excitement of your live events.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Aerial Cinematography</h3>
                <p className="text-muted-foreground">Capturing breathtaking aerial footage to elevate your projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet Our Talented Team</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of experienced professionals is dedicated to delivering exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h4 className="text-lg font-semibold">John Doe</h4>
              <p className="text-sm text-muted-foreground">Director</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <h4 className="text-lg font-semibold">Jane Smith</h4>
              <p className="text-sm text-muted-foreground">Cinematographer</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>KW</AvatarFallback>
              </Avatar>
              <h4 className="text-lg font-semibold">Kate Wilson</h4>
              <p className="text-sm text-muted-foreground">Editor</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <h4 className="text-lg font-semibold">Michael Reeves</h4>
              <p className="text-sm text-muted-foreground">Motion Designer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to bring your vision to life?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today to discuss your project and how we can help.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}