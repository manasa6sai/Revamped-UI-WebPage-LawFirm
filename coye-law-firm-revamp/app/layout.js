// app/layout.js
import '../styles/globals.css';
import Header from './components/Header/Header';
import { MyProvider } from './context/MyContext';

export const metadata = {
  title: 'Coye Law Firm - Justice for You',
  description: 'Trusted legal representation for veterans, Social Security claimants, and injured employees across the U.S.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyProvider>
          <Header />
          <main>{children}</main>
          {/* Consider adding a <Footer /> component here later */}
        </MyProvider>
      </body>
    </html>
  );
}
