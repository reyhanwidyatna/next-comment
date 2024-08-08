import "./globals.css";

import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Next Comment App",
  description: "Simple and Easy Comment App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container-fluid w-full h-screen flex m-auto">
        {children}
      </body>
    </html>
  );
}
