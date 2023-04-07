/* eslint-disable @next/next/no-head-element */
import './global.css';
import Link from "next/link"

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
        <Link href={'./'} className="link" style={{margin: '0px 10px'}}>Go back</Link>
        <br />
        {children}
      </body>
    </html>
  );
}
