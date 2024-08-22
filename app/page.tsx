import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Welcome to Next.js + Tailwind CSS</h1>
      <Image src='/nextjs.svg' width={200} height={200} alt='logo' />
      <p className='text-lg text-center'>
        Get started by editing <code>pages/index.tsx</code>
      </p>
    </main>
  );
}
