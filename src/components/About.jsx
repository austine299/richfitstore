import React from "react";
import { FaHandDots } from "react-icons/fa6";

function About() {
  return (
    <div className="pt-20 bg-slate-50">
      <div className="flex md:flex-row flex-col p-10 gap-5">
        <div className="md:w-[50%] w-full">
          <img src={`/videoimg/wh2.jpg`} alt="person"/>
        </div>
        <div className="flex flex-col gap-5 md:w-[50%] w-full pt-20">
          <h2 className="text-3xl font-bold">
            Richfitstore: About Us – Richfits
          </h2>
          <p className="text-xl">
            At Richfits, we believe hustle is more than a grind—it’s a calling.
            We were built for this: the long nights, the pressure, the setbacks,
            and the comebacks.
          </p>
          <p className="text-xl">
            Our brand was born out of the streets and fueled by faith, purpose,
            and persistence. Every piece we create carries the energy of
            hustlers who start with nothing and build something real.
          </p>
          <h3 className="text-2xl">
            Richfits is not just clothing—it’s a movement.
          </h3>
          <ul>
            <li className="flex items-center gap-2">
              <FaHandDots />{" "}
              <em>A movement for the dreamers who won’t quit.</em>
            </li>
            <li className="flex items-center gap-2">
              <FaHandDots />{" "}
              <em>For the believers who fight pressure with faith.</em>
            </li>
            <li className="flex items-center gap-2">
              <FaHandDots />{" "}
              <em>
                For the hustlers who know success is earned, not handed out.
              </em>
            </li>
          </ul>
          <p className="text-xl">
            When you wear Richfits, you’re not just rocking streetwear—you’re
            repping a lifestyle that says: “Pressure makes diamonds. Faith keeps
            me moving. I was built for this.”
          </p>
          <p className="text-xl">
            Join the Richfits Club and step into a community of hustlers,
            creatives, and believers who live by the same code.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse p-10 gap-5">
        <div className="flex flex-col gap-5 md:w-[50%] w-full pt-20">
          <h2 className="text-3xl font-bold">Return & Exchange Policy</h2>
          <p className="text-xl">
            At Richfits, customer satisfaction comes first.
          </p>
          <h3 className="text-2xl">
            Richfits is not just clothing—it’s a movement.
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-xl flex items-start gap-2">
              {" "}
              <FaHandDots  className="text-2xl"/>
              <em>
                Returns: You can return an item within 7 days of delivery if it
                is unused, unwashed, and in original condition with tags
              </em>
            </li>
            <li className="text-xl flex items-start gap-2">
              <FaHandDots  className="text-2xl"/>{" "}
              <em>
                Exchanges: We allow exchanges for size or color (subject to
                availability)
              </em>
            </li>
            <li className="text-xl flex items-start gap-2">
              <FaHandDots  className="text-2xl"/>{" "}
              <em>
                Non-Returnable Items: Accessories such as caps, beanies, and
                headwear are final sale for hygiene reasons
              </em>
            </li>
            <li className="text-xl flex items-start gap-2">
              <FaHandDots  className="text-2xl"/>{" "}
              <em>
                Refunds: Refunds are issued only if the product is defective or
                we shipped the wrong item.
              </em>
            </li>
          </ul>
          <p className="text-xl">
            To start a return or exchange, contact us at:
          </p>
          <p className="text-xl">
            📧 support@richfitstore.com <br/>
            📱 WhatsApp: +234 805658214
          </p>
        </div>
        
        <div className="md:w-[50%] w-full">
          <img src={`/videoimg/wh15.jpg `}alt="person" />
        </div>
      </div>
    </div>
  );
}

export default About;
