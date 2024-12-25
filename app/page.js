import "../public/style.css";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-8 bg-white text-black">
      <div className="flex-col items-center justify-center mt-8 lg:grid-cols-2">
        <div>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-3xl">
            dylan sy
          </h1>
          <h2 className="mt-1  font-extrabold leading-[1.15] text-black ">
            software engineer{" "}
          </h2>
        </div>

        <div>
          <h2 className={`mt-8 text-2xl font-semibold`}>some tweets</h2>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Hi everyone!
              <br />
              <br />
              I'm Dylan Sy and I'm 24 years old.
              <br />
              <br />
              I've changed my career paths 4x.
              <br />
              <br />
              Haven't made anything yet. Currently doing well because of a
              friend of mine who introduced me to crypto. Been "trading" since
              2017.
              <br />
              <br />
              I'm interested in making cool stuff. Feel free to reach out…{" "}
              <a href="https://t.co/28CSZfkaYV">pic.twitter.com/28CSZfkaYV</a>
            </p>
            &mdash; Dylan Sy (@mythicaldylan){" "}
            <a href="https://twitter.com/mythicaldylan/status/1677022718200360960?ref_src=twsrc%5Etfw">
              July 6, 2023
            </a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Last weekend at s4 irl
              <a href="https://twitter.com/_buildspace?ref_src=twsrc%5Etfw">
                @_buildspace
              </a>
              <br />
              <br />
              What an amazing weekend, and I'm so glad to have met you all.
              <br />
              <br />
              If you see yourself, say hi below!
              <br />
              <br />
              Shout out
              <a href="https://twitter.com/mayv_music?ref_src=twsrc%5Etfw">
                @mayv_music
              </a>
              for 'lay it down'. It's 🔥
              <a href="https://t.co/wIr1ukIJKe">pic.twitter.com/wIr1ukIJKe</a>
            </p>
            &mdash; Dylan Sy 💎 (@mythicaldylan)
            <a href="https://twitter.com/mythicaldylan/status/1707261167993782529?ref_src=twsrc%5Etfw">
              September 28, 2023
            </a>
          </blockquote>

          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Go Vibe.
              <br />
              <br />
              Where spontaneity meets adventure.{" "}
              <a href="https://t.co/lj8Oi6YB89">pic.twitter.com/lj8Oi6YB89</a>
            </p>
            &mdash; Dylan Sy (@dylansyyyy){" "}
            <a href="https://twitter.com/dylansyyyy/status/1681806946255421442?ref_src=twsrc%5Etfw">
              July 19, 2023
            </a>
          </blockquote>

          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Hi everyone!
              <br />
              <br />
              My name is Dylan Sy, and I just finished{" "}
              <a href="https://twitter.com/fullstack?ref_src=twsrc%5Etfw">
                @Fullstack
              </a>{" "}
              Academy's software engineering bootcamp.
              <br />
              <br />
              I've made it a point to tweet about it.
              <br />
              <br />
              Every single day.
              <br />
              <br />
              Share with friends and family looking to make that leap.
              <br />
              <br />
              Enjoy!
              <a href="https://twitter.com/hashtag/tech?src=hash&amp;ref_src=twsrc%5Etfw">
                #tech
              </a>{" "}
              <a href="https://twitter.com/hashtag/coding?src=hash&amp;ref_src=twsrc%5Etfw">
                #coding
              </a>{" "}
              <a href="https://t.co/eeXB11dTFs">https://t.co/eeXB11dTFs</a>
            </p>
            &mdash; Dylan Sy (@mythicaldylan){" "}
            <a href="https://twitter.com/mythicaldylan/status/1682498728576286720?ref_src=twsrc%5Etfw">
              July 21, 2023
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>

      <div className="mt-8">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sydylan"
        >
          github
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/dylan-sy/"
        >
          linkedin
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/dylansyyyy"
        >
          twitter
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href="https://dylansy.substack.com/"
        >
          substack
        </a>
      </div>
    </main>
  );
}
