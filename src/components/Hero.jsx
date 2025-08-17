import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Darshan 👋</h1>
        <h2 className="text-2xl">
          <Typewriter
            words={['A Web Developer', 'A React Enthusiast', 'A Freelancer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
    </section>
  );
}
