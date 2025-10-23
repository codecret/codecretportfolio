import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Mohamad | Full Stack Developer & Flutter Developer",
    template: "%s | Mohamad Portfolio",
  },
  description:
    "Experienced Full Stack Developer specializing in React, Node.js, MongoDB, and Flutter. Building efficient, scalable, and user-friendly web and mobile applications. View my portfolio of projects including Orseda, Hora, and more.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Flutter Developer",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Mobile Development",
    "Portfolio",
    "Mohamad",
  ],
  authors: [{ name: "Mohamad" }],
  creator: "Mohamad",
  publisher: "Mohamad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo-black.svg",
    apple: "/logo-black.svg",
  },
  metadataBase: new URL("https://github.com/Y7gn/codecretportfolio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Y7gn/codecretportfolio",
    title: "Mohamad | Full Stack Developer & Flutter Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Node.js, MongoDB, and Flutter. Building efficient, scalable, and user-friendly web and mobile applications.",
    siteName: "Mohamad Portfolio",
    images: [
      {
        url: "/herobg.png",
        width: 1200,
        height: 630,
        alt: "Mohamad - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad | Full Stack Developer & Flutter Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Node.js, MongoDB, and Flutter. Building efficient, scalable, and user-friendly solutions.",
    images: ["/herobg.png"],
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamad",
    jobTitle: "Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Node.js, MongoDB, and Flutter",
    url: "https://github.com/Y7gn/codecretportfolio",
    sameAs: [
      "https://github.com/Y7gn",
      "https://www.linkedin.com/in/your-profile",
      "https://twitter.com/your_twitter_handle",
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "MongoDB",
      "Flutter",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Mobile Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Flutter",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Redux",
        "Tailwind CSS",
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
