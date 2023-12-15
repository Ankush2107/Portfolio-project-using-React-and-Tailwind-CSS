import socials from "../../aboutData";
import { HeroLg } from "../../assets";
import Scroller from "../../components/Scroller.jsx"; 
import ContactUs from "../../components/ContactUs.jsx"; 
function About() {
  return (
    <>
      <section className="p-12  border-x-2 border-black">

          <div className="container  mx-auto px-8 grid gap-8 lg:grid-cols-2 items-center justify-center">
              <div className="px-4 md:px-10">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4">My Story</h1>
                  <p className="mb-2 text-md">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti hic officiis possimus aspernatur esse vel odit, ipsa fugit soluta iste minus excepturi deleniti, reprehenderit consectetur nesciunt debitis? Voluptate, assumenda!
                  </p>
                  <p className="mb-4 text-md">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti hic officiis possimus aspernatur esse vel odit, ipsa fugit soluta iste minus excepturi deleniti, reprehenderit consectetur nesciunt debitis? Voluptate, assumenda! ipsa fugit soluta iste minus excepturi deleniti, reprehenderit consectetur nesciunt debitis? Voluptate, assumenda!
                  </p>

                  <div className="text-md font-bold">Find me on :</div>

                  <div className="mb-8">

                      <ul className="flex gap-6">
                          {socials.map((item, index) => (
                            <li key={ index }>
                                <a target="_blank" href={item.link} rel="noopener noreferrer" className="py-2 flex flex-col md:flex-row gap-2 items-center justify-center text-sm">
                                    <img src={item.icon} alt={item.alt} width="25" height="25" />
                                    {item.name}
                                </a>
                            </li>
                          ))}
                      </ul>
                  </div>
              </div>

              <div>
                <img src={HeroLg} alt="Me Programming" className="border-black border-2 rounded-xl " width="550" height="550" />           
              </div>
          </div>
      </section>

      <Scroller
        text={" ✨ Let's get to work! 💭 Have a project in mind? ✨ Let's get to work! 💭 Have a project in mind? ✨ Let's get to work! 💭 Have a project in mind? "}
        link={"/contact"}
       />

      <ContactUs />

    </>
  )
}

export default About;
