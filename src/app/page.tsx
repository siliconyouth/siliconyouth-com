
import { CodeBracketIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
}

async function getRepos(): Promise<Repo[]> {
  const res = await fetch('https://api.github.com/users/siliconyouth/repos');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

function Header() {
  return (
    <header className="bg-background/75 backdrop-blur-lg sticky top-0 z-50 w-full border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <CodeBracketIcon className="h-6 w-6 text-foreground" />
            <span className="ml-2 text-lg font-bold text-foreground">Silicon Youth</span>
          </div>
        </div>
      </div>
    </header>
  )
}

async function ProjectsList() {
  const repos = await getRepos();

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Our Projects
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            A selection of our public projects on GitHub.
          </p>
        </div>
        <div className="mt-10">
          <ul role="list" className="divide-y divide-foreground/10">
            {repos.map((repo) => (
              <li key={repo.id} className="flex items-center justify-between gap-x-6 py-5">
                <div className="min-w-0">
                  <div className="flex items-start gap-x-3">
                    <p className="text-sm font-semibold leading-6 text-foreground">{repo.name}</p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-foreground/60">
                    <p className="whitespace-nowrap">{repo.description}</p>
                  </div>
                   {repo.language && (
                    <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-foreground/60">
                        <p className="whitespace-nowrap">Language: {repo.language}</p>
                    </div>
                   )}
                </div>
                <div className="flex flex-none items-center gap-x-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-md bg-background px-2.5 py-1.5 text-sm font-semibold text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 hover:bg-foreground/5 sm:block"
                  >
                    View Project<span className="sr-only">, {repo.name}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-foreground/80">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Innovating for the Future
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Silicon Youth is a dynamic company dedicated to building cutting-edge technology. We specialize in software development and project management, turning innovative ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

function Bio() {
  return (
    <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <UserCircleIcon className="mx-auto h-24 w-24 text-foreground/20" />
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Vladimir Dukelic</h2>
                <p className="mt-4 text-base font-semibold leading-7 text-foreground/80">Founder & Project Manager</p>
                <p className="mt-6 text-lg leading-8 text-foreground/80">
                    Vladimir is the visionary behind Silicon Youth. With a passion for technology and a knack for leadership, he guides the company in creating innovative solutions and managing projects from conception to completion.
                </p>
            </div>
        </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-foreground/80">
            We&apos;d love to hear from you.
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-foreground">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-foreground">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-foreground px-3.5 py-2.5 text-center text-sm font-semibold text-background shadow-sm hover:bg-foreground/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <p className="text-center text-xs leading-5 text-foreground/60">
          &copy; 2025 Silicon Youth. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <ProjectsList />
      <About />
      <Bio />
      <Contact />
      <Footer />
    </main>
  );
}
