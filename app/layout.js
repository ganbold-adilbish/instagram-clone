import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Instagram Clone",
  description:
    "The Instagram Clone project is a web application designed to \
     replicate the core functionality and design of the Instagram Web App. \
     This project showcases features like user authentication, photo sharing, \
     commenting, liking, and following other users, mimicking the behavior and \
     user experience of the original platform. It was built using \
     modern web development technologies, emphasizing scalability, \
     responsive design, and an engaging user interface. This project \
     highlights the ability to design, develop, and optimize a complex application \
     with attention to detail and performance. \
     P.S. This project was a labor of love and \
     a testament to my dedication to mastering web development. \
     Every feature was carefully crafted to mirror Instagram's functionality \
     while learning best practices in design and coding. \
     Just for demonstration, not for production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
