import '../styles/index.css';

import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en" className={ebGaramond.className}>
    <head>
      <title>One Page Portfolio UI</title>
    </head>

    <body>
      <div id="root">
        {children}
      </div>
    </body>
  </html>
  
  );
}