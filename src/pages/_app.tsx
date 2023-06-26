import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Spline_Sans_Mono, Montserrat } from "next/font/google";

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${spline.variable} ${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
