import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/global/Header';
import { ReservationProvider } from '@/contexts/ReservationContext';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  // title: 'The Wild Oasis',
  title: {
    default: 'Welcome | The Wild oasis',
    template: '%s | The Wild oasis',
  },
  description:
    'Luxurios cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-10">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
