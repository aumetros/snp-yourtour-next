import "styles/globals.css";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

export const metadata = {
  title: "YourTour",
  description:
    "На сайте вы сможете найти готовые туры, собрать собственные, прочитать отзывы о турах и посмотреть фотографии увлекательных путешествий",
  keywords:
    "Путешествия, туры, идеальные туры, найти тур, собрать тур, отзывы о турах, впечатления о туре, истории из туров, фотографии из путешествия",
  author: "Алексей Шевляков",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
