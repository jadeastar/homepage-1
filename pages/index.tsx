import {
  faPaintBrush,
  faRunning,
  faUserShield,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { useMemo } from "react";
import { useQuery } from "react-query";
import axios from "axios";
const Home = () => {
  const { data: release } = useQuery("release", async () => {
    return (
      await axios.get<{
        assets: {
          browser_download_url: string;
          name: string;
        }[];
      }>("https://api.github.com/repos/skyebrowser/skye/releases/latest")
    ).data;
  });
  const macDownload = useMemo(() => {
    return release?.assets?.find((asset) => asset.name.endsWith(".dmg"));
  }, [release]);
  const winDownload = useMemo(() => {
    return release?.assets?.find((asset) => asset.name.endsWith(".exe"));
  }, [release]);
  const linuxDownload = useMemo(() => {
    return release?.assets?.find((asset) => asset.name.endsWith(".AppImage"));
  }, [release]);
  return (
    <>
      <div className="relative flex justify-center items-center">
        <img
          src="/background.png"
          className="w-full object-fill"
          style={{ height: "80vh", maxHeight: "1000px" }}
        />
        <div className="text-white flex header flex-col z-50 items-center text-center absolute">
          <h2 className="text-xl">The future of browsing is here...</h2>
          <h1 className="text-3xl font-black">
            Imagine a browser that
            <br />
            wasn’t absolute shit
          </h1>
          <a
            className="mt-5 p-3 bg-primary rounded-lg w-60"
            href={"/#downloads"}
          >
            Download Skye
          </a>
        </div>
        <img className="bottom-0 ml-auto  header-image" src="/preview.png" />
      </div>
      <div className="flex flex-col items-center dark:bg-black dark:text-white">
        <div className="m-10 md:m-20 max-w-7xl">
          <div className="w-100">
            <h1 className="uppercase">Features</h1>
            <h1 className="text-3xl font-black">
              World-class features. In a world-class browser.
            </h1>
          </div>
          <div className="w-100 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
              <div>
                <div
                  className={
                    "p-3 text-lg w-11 h-11 rounded-full bg-indigo-600 text-white flex justify-center items-center"
                  }
                >
                  <FontAwesomeIcon icon={faUserShield} />
                </div>
                <h1 className="font-black text-xl mt-1">
                  The Innatical ecosystem
                </h1>
                <p>
                  Sign in with your Innatical ID and sync your bookmarks.
                  Further integration with the rest of the Innatical ecosystem
                  is being worked on.
                </p>
              </div>
              <div>
                <div
                  className={
                    "p-3 text-lg w-11 h-11 rounded-full bg-yellow-500 text-white flex justify-center items-center"
                  }
                >
                  <FontAwesomeIcon icon={faRunning} />
                </div>
                <h1 className="font-black text-xl mt-1">Speed</h1>
                <p>
                  Skye is built to be fast and snappy, you won't need to
                  compromise speed ever again.
                </p>
              </div>
              <div>
                <div
                  className={
                    "p-3 text-lg w-11 h-11 rounded-full bg-purple-400 text-white flex justify-center items-center"
                  }
                >
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <h1 className="font-black text-xl mt-1">Design</h1>
                <p>
                  With Safari inspired design, combined with Innatical's design
                  language, Skye offers a simple, intuitive, and elegant UI.
                </p>
              </div>
              <div>
                <div
                  className={
                    "p-3 text-lg w-11 h-11 rounded-full bg-red-500 text-white flex justify-center items-center"
                  }
                >
                  <FontAwesomeIcon icon={faUserShield} />
                </div>
                <h1 className="font-black text-xl mt-1">Built in adblocking</h1>
                <p>
                  Block annoying ads and privacy invasive trackers with Skye's
                  built in adblocker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="downloads"
        className="flex flex-col items-center bg-blue-50 dark:bg-gray-900 dark:text-white"
      >
        <div className="m-10 md:m-20 max-w-7xl md:w-full">
          <div className="w-100">
            <h1 className="uppercase">Downloads</h1>
            <h1 className="text-3xl font-black">
              Download the future of browsing
            </h1>
          </div>
          <div className="w-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              <a
                href={macDownload?.browser_download_url}
                className="w-100 bg-black text-white p-5 rounded-lg flex items-center justify-center gap-2"
              >
                <p>Download for macOS</p> <FontAwesomeIcon icon={faApple} />
              </a>
              <a
                href={winDownload?.browser_download_url}
                className="w-100 bg-blue-400 text-white p-5 rounded-lg flex items-center justify-center gap-2"
              >
                <p>Download for Windows</p> <FontAwesomeIcon icon={faWindows} />
              </a>
              <a
                href={linuxDownload?.browser_download_url}
                className="w-100 bg-yellow-300 text-black p-5 rounded-lg flex items-center justify-center gap-2"
              >
                <p>Download for Linux</p> <FontAwesomeIcon icon={faLinux} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center dark:bg-black dark:text-white">
        <div className="mx-10 my-5 md:mx-20 max-w-7xl md:w-full">
          <div className="w-100">
            <h1 className="text-1xl font-light">
              Copyright © 2021 Innatical LLC
            </h1>
            <h1 className="text-1xl font-bold">
              Made with ❤️ in California & Minnesota
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
