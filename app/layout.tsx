/* eslint-disable @next/next/no-head-element */
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <nav>Marijáš</nav>
        {children}
      </body>
    </html>
  );
}
