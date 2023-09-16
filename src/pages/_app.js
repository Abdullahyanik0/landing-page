import { useEffect, useState } from "react";
import "styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useHotkeys } from "@mantine/hooks";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import MainLayout from "layouts/MainLayout";
import { Notifications } from "@mantine/notifications";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const App = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [colorScheme, setColorScheme] = useState();
  const [splashScreen, setSplashScreen] = useState(true);

  const toggleColorScheme = (value) => {
    const newMode = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    const localStorageMode = localStorage.getItem("theme");
    if (!localStorageMode) {
      localStorage.setItem("theme", "light");
      setColorScheme("dark");
    } else {
      setColorScheme(localStorageMode);
    }
  }, []);

  useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorScheme]);

  useEffect(() => {
    setSplashScreen(false);
  }, []);

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>{`Ai Parrots `}</title>
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: colorScheme || "dark",
          }}
        >
          <Notifications position="top-right" />
          {splashScreen && <div className="w-screen h-screen bg-white sticky top-0 left-0 z-[500]"></div>}
          <MainLayout>
            <main className={inter.className}>
              <Component {...pageProps} />
            </main>
          </MainLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
