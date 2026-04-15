import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ToyLand - The Magical Kids Toy Store',
  description: 'Discover a world of fun and imagination at ToyLand. Shop the best toys for kids of all ages!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white">{children}</body>
    </html>
  );
}
