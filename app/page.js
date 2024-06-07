import Head from "next/head";
import "../public/style.css"; // Import your CSS file
import React from "react"; // Make sure to import React

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-8 bg-white text-black">
      <div className="flex-col items-center justify-center mt-8 lg:grid-cols-2">
        <div>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-3xl">
            Hi. I'm Dylan Sy,{" "}
          </h1>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-3xl">
            I'm a software engineer.{" "}
          </h1>
        </div>

        <div className="mt-8 grid lg:mb-0 w-full lg:text-left max-w-[55ch]">
          <h2 className={`mb-2 text-2xl font-bold underline`}>
            What I'm Currently Working On
          </h2>
          <a
            href="https://www.youtube.com/@dylansy"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-2 text-2xl font-semibold`}>
              My YouTube Channel
            </h2>
            <p className={`m-0 max-w-[55ch] text-sm opacity-50`}>
              Modern-day explorer of life. september 11, 2023 - current
            </p>
          </a>
          <a
            href="https://twitter.com/cohort2303"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-2 text-2xl font-semibold`}>Cohort 2303</h2>
            <p className={`m-0 max-w-[55ch] text-sm opacity-50`}>
              Community of fullstack developers, graduates of Fullstack Academy,
              Cohort 2303. march 1, 2023 - current
            </p>
          </a>
        </div>

        {/* <div className="mt-8 grid lg:mb-0 w-full lg:text-left max-w-[55ch]">
          <h2 className={`mb-2 text-2xl font-bold underline`}>Projects</h2>
          <a
            href="https://genphrase.com"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <div>
                <h2 className={`mb-2 text-2xl font-semibold`}>genphrase.com</h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 mr-10`}>
                  Generate powerful random passphrases. Built in nights &
                  weekends by buildspace. A school for people to work on ideas
                  they're passionate about in 6 weeks. Backed by a16z + YC.
                  august 23, 2023
                </p>
              </div>
              <img
                src="/genphrase.jpg"
                alt="Genphrase"
                className="max-w-full h-auto w-32 sm:w-48 object-cover"
              />
            </div>
          </a>

          <a
            href="https://github.com/sydylan/sigmatime"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <div>
                <h2 className={`mb-2 text-2xl font-semibold`}>SigmaTime </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 mr-10`}>
                  SigmaTime is a productivity tool that offers a customizable
                  Pomodoro timer, complete with inspirational quotes and
                  soothing sounds, helping you stay focused and productive
                  during work and study sessions. august 8, 2023
                </p>
              </div>
              <img
                src="/SigmaTime.jpg"
                alt="SigmaTime Project"
                className="max-w-full h-auto w-32 sm:w-48 object-cover"
              />
            </div>
          </a>
          <a
            href="https://github.com/Dynamo-Dark-Aid/GoVibeFE"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <div>
                <h2 className={`mb-2 text-2xl font-semibold`}>Go Vibe </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 mr-10`}>
                  Go Vibe is an adventurous app that presents five thrilling
                  attractions with a single tap, offering users unforgettable
                  experiences and opportunities to explore their current
                  location. july 21, 2023
                </p>
              </div>
              <img
                src="/goVibe.jpg"
                alt="Go Vibe Project"
                className="max-w-full h-auto w-32 sm:w-48 pr-20 object-cover"
              />
            </div>
          </a>
          <a
            href="https://twitter.com/boosted_odds"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <div>
                <h2 className={`mb-2 text-2xl font-semibold`}>Boosted Odds </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 mr-10`}>
                  Finding +EV and Arbitrage Bets so you don't have to. I worked
                  at Boosted Odds as a Social Media Manager and took this from
                  Zero to One. july 21, 2023
                </p>
              </div>
              <img
                src="/boostedodds.jpg"
                alt="Genphrase"
                className="max-w-full h-auto w-32 sm:w-48 object-cover"
              />
            </div>
          </a>
        </div> */}

        <div>
          <h2 className={`mt-8 text-2xl font-semibold underline`}>About Me</h2>
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
        </div>

        <div>
          <h2 className={`mt-8 text-2xl font-semibold underline`}>
            My time at buildspace s4{" "}
          </h2>
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
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>

        <h2 className={`mt-8 text-2xl font-semibold underline`}>
          I Tweeted Everyday During My Bootcamp
        </h2>
        <div>
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
            charSet="utf-8"
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
          GitHub
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/dylan-sy/"
        >
          LinkedIn
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/dylansyyyy"
        >
          Twitter
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href="https://dylansy.substack.com/"
        >
          Substack
        </a>
      </div>
    </main>
  );
}
