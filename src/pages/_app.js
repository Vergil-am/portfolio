import Layout from "@/components/layout";
import "@/styles/globals.css";
import { TerminalContextProvider } from "react-terminal";
export default function App({ Component, pageProps }) {
  return (
    <TerminalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TerminalContextProvider>
  );
}
