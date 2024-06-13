import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "app/lp-items"

export const metadata: Metadata = {
  title: "Open Autonomous Systems",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://www.openautonomoussystems.com",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/open-autonomous-systems/openautonomoussystems.com/main/public/oas-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Open Autonomous Systems
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              At Open Autonomous Systems, our mission is to revolutionize industries through the power of Vision AI. We
              are dedicated to enhancing workplace compliance and safety, while pioneering autonomous drone solutions
              that enable businesses to operate more efficiently, safely, and intelligently. By integrating advanced AI
              technology into practical applications, we aim to solve today's challenges and anticipate tomorrow's
              needs, driving a future where technology seamlessly enhances the quality of life and work.
            </p>

            {/* Open Autonomous Systems
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Let&apos;s collaborate on your next autonomous robotics application. We are experts in the Vision AI domain.
            </p> */}
            <Button href="#GetInTouch" className="mr-3">
              Get started
            </Button>
            <Button
              href="#aboutUS"
              intent="secondary"
            >
              About us
            </Button>

          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  <a href={singleItem.url}>{singleItem.icon}</a>
                </div>
                <Button href="" className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</Button>
                {/* className="mb-2 text-xl font-bold dark:text-white" */}
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>

                {/* <h3 href={singleItem.url} className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p href={singleItem.url} className="text-gray-500 dark:text-gray-400">{singleItem.description}</p> */}

              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <h2 className="mb-2 text-xl font-bold dark:text-white">
            Get In Touch
          </h2>
          <p id="GetInTouch">How can we Help ?</p>
          <form id="fs-frm" name="contact-form" accept-charset="utf-8" action="https://formspree.io/f/xayzojle" method="post">
            <fieldset id="fs-frm-inputs">
              <label htmlFor="full-name">Full Name</label>
            </fieldset>
            <input type="hidden" name="_subject" value="Contact request from OAS" />
            <input type="email" name="email" placeholder="Your Email" required="" />
            <textarea name="message" placeholder="Your message" required=""></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  )
}
