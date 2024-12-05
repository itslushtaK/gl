import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <main className="land relative z-10">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </ThemeProvider>
    </LanguageProvider>
  );
}
