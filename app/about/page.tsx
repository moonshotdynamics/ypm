import Image from 'next/image';
interface QrCodeIconProps {
  [key: string]: string | number | boolean;
}

function QrCodeIcon(props: Readonly<QrCodeIconProps>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  );
}

interface WorkflowIconProps {
  [key: string]: string | number | boolean;
}

function WorkflowIcon(props: Readonly<WorkflowIconProps>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}
const values = [
  {
    title: 'Innovation',
    description:
      "We constantly explore new techniques and technologies to push the boundaries of what's possible in video production.",
    icon: <LightbulbIcon className="h-10 w-10 text-primary-foreground" />,
  },
  {
    title: 'Collaboration',
    description:
      'We believe in the power of teamwork and work closely with our clients to bring their vision to life.',
    icon: <WorkflowIcon className="h-10 w-10 text-primary-foreground" />,
  },
  {
    title: 'Excellence',
    description:
      "We are committed to delivering the highest quality video content, ensuring that every project exceeds our clients' expectations.",
    icon: <QrCodeIcon className="h-10 w-10 text-primary-foreground" />,
  },
];

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="space-y-10 xl:space-y-16 container mx-auto">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-black">
                  About Us
                </div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Youngpreneur Media
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We are a South African Film and Television Award Nominated
                  full-service production company specializing in creating
                  high-quality, cinematic, shows and films.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  src="/assets/images/logo.png"
                  width="400"
                  height="200"
                  alt="Acme Productions Logo"
                  className="mx-auto"
                  style={{ aspectRatio: '200/200', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="space-y-12 px-4 md:px-6 container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Our Story
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Youngpreneur Media was founded in 2010 by a team of passionate
                  filmmakers who wanted to create visually stunning and
                  impactful content for businesses. Over the years, we&apos;ve
                  grown into a full-service production company, offering a wide
                  range of services from video production to script writing, motion graphics and
                  animation.
                </p>
              </div>
            </div>
            {/* <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="rounded-full bg-primary p-1">
                  <img
                    src="/placeholder.svg"
                    width="80"
                    height="80"
                    alt="John Doe"
                    className="h-20 w-20 rounded-full object-cover"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Indira Aliyana Tshiteta</h3>
                  <p className="text-sm text-muted-foreground">Founder &amp; Executive Producer</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-full bg-primary p-1">
                  <img
                    src="/placeholder.svg"
                    width="80"
                    height="80"
                    alt="Jane Smith"
                    className="h-20 w-20 rounded-full object-cover"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Isaac Tshiteta</h3>
                  <p className="text-sm text-muted-foreground">Post Production Supervisor</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-full bg-primary p-1">
                  <img
                    src="/placeholder.svg"
                    width="80"
                    height="80"
                    alt="Michael Johnson"
                    className="h-20 w-20 rounded-full object-cover"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Tonga Isango</h3>
                  <p className="text-sm text-muted-foreground">Director</p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="space-y-12 px-4 md:px-6 container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Values
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Youngpreneur Media, we believe in creating exceptional
                  video content that not only looks great but also tells a
                  compelling story. We are committed to innovation, collaboration and excellence in everything we do.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {values.map((value, index) => {
                return (
                  <div className="grid gap-4" key={index + value.title}>
                    <div className="rounded-full bg-primary p-1 flex gap-4 justify-center items-center">
                      {value.icon}
                      <h3 className="text-lg font-bold">{value.title}</h3>
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface LightbulbIconProps {
  [key: string]: string | number | boolean;
}

function LightbulbIcon(props: Readonly<LightbulbIconProps>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
