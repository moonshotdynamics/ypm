import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Play } from "lucide-react"
import Gallery from "@/components/Gallery"


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary bg-contain bg-no-repeat" style={{ backgroundImage: `url(/assets/images/landing.webp)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="px-4 md:px-6 flex justify-center w-full container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Inspiring Youth Through Engaging Content
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Youngpreneur Media: Where young minds find inspiration, laughter, and relatable stories.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="secondary">Explore Shows</Button>
                <Button variant="outline" className="bg-white text-primary">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="px-4 md:px-6 container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              SAFTA Nominated: 100 Day&apos;s to Succeed
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">SAFTA Nominated</div>
                <h3 className="text-2xl font-bold">Laugh Out Loud with Our Latest Hit</h3>
                <p className="text-white dark:text-gray-400">
                  Join the hilarious adventures of high school friends, Esihle and Rhandzu, as they navigate teen life, first crushes, and
                  the challenges of growing up. It&apos;s a rollercoaster of emotions you won&apos;t want to miss!
                </p>
                <Button className="inline-flex items-center justify-center">
                  <Play className="mr-2 h-4 w-4" /> Watch Trailer
                </Button>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
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
        <section>
          <Gallery/>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6 container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Have a show idea?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Contact us, and let us breathe life into your vision. We&apos;re always on the lookout for fresh ideas.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}