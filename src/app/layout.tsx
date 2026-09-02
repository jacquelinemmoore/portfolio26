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
      <title>Jacqueline Moore</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>

    <body style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
      <div id="root">
        {children}
      </div>
    </body>
  </html>
  
  );
}
