import "./globals.css";

import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: "Next Comment App",
  description: "Simple and Easy Comment App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container-fluid m-auto">
        {children}
      </body>
    </html>
  );
}
