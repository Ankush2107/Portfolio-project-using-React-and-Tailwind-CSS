import { HashLink } from "react-router-hash-link";
import { HeroSm, HeroMd, HeroLg, portfolioPattern } from "../../assets";
import { Link } from "react-router-dom";
import Scroller from "../../components/Scroller.jsx"; 
import portfolioData from "../../data.js"

function Home() {
  return (
    <div className="border-black border-x-2">
       <section className="py-10 lg:py-36 xl:py-48">
          <div className="container mx-auto px-4 flex flex-col gap-8 md:flex-row">
              <div className="flex-1 order-2">
                  
                  <picture className='flex drop-shadow-[10px_-10px_0_rgba(250,204,21,1)] border-black rounded-tl-[150px] rounded-br-[150px] rounded-xl overflow-hidden'>

                      <source srcSet={HeroSm} width="363" height="222" media="(max-width: 400px)" type="image/jpg" />
                      <source srcSet={HeroMd} width="608" height="372" media="(max-width: 400px)" type="image/jpg" />
                      <img src={HeroLg} width="870" height="532" alt="Me working hard on computer" />

                  </picture>

              </div>
              <div className="flex-1 ">

                <h2 className="text-lg md:text-xl font-bold uppercase">Hi 👋 I&apos;m Ankush.</h2>

                <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
                    Developer<span className="text-yellow-400">.</span><br/>
                    Life long learner<span className="text-violet-900">.</span>
                </h1>
                
                <p className="text-lg max-w-xl mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis nostrum, enim sit quasi exercitationem, facilis error ex officia rerum a.
                </p>

                <div className="flex items-baseline gap-4">
                    <HashLink to='#work' className="px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white">
                        Selected Work
                    </HashLink>

                    <Link to='/contact' className="px-6 py-4 rounded-md text-black flex">
                      Let&apos;s Talk
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Link>
                </div>

              </div>
          </div>
       </section>

       <Scroller
        text={"✨ Let's get to work! 💭 Have a project in mind? ✨ Let's get to work! 💭 Have a project in mind? ✨ Let's get to work! 💭 Have a project in mind?"}
        link={"/contact"}
       />


       <section id="work" className="px-4 py-12 border-black border-t-2 bg-teal-600 bg-fixed" style={{backgroundImage: "url(" + portfolioPattern + ")"}}>
         
           <div className="container mx-auto">
              <div className="text-white text-center py-12">
                  <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">Selected Work</h1>
                  <p className="max-w-xl mx-auto text-lg">
                    I&apos;ve been developing websites for a while, but I also equally enjoy learning new things.  
                  </p>
              </div>
           </div> 

            <div className="grid md:grid-cols-2 gap-8 mb-28">

                {portfolioData.map((item, index) => (
                  <Link to={ item.link } key={ index } className="md:even:pt-12 ease-in-out duration-75 hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]">

                    <div className="border-2 border-black rounded-xl overflow-hidden bg-black">
                        <img src={ item.thumbnail } alt={ item.alt } loading="lazy" />
                    </div>

                    <div className="bg-white border-x-2 border-black border-b-2 rounded-bl-xl rounded-br-xl mx-4 p-4 text-lg flex justify-between items-center gap-4">
                          <div>
                              <span className="font-bold">{ item.title }</span>
                              <span className="text-zinc-400">&#9679; { item.category }</span>
                          </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                  </Link>
                ))}
            </div>


            <Link to={'/work'} className="flex gap-4 font-bold text-xl text-white justify-center mb-8">
                  View all work  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
            </Link>

      </section>

      <section className="border-black border-t-2 px-4 py-12">
          <div className="container mx-auto">
              <div className="text-black text-center py-12">
                  <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">Services</h1>
                  <p className="max-w-xl mx-auto text-lg">
                    I&apos;ve been developing websites for a while, but I also equally enjoy learning new things.  
                  </p>
              </div>
              <div className="text-black py-12 grid lg:grid-cols-4 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Web Development</h3>
                    <p className="mb-4 text-lg">
                      I&apos;ve been developing websites for a while, but I also equally enjoy learning new things.
                    </p>
                    <Link to={'/web-design'} className="flex gap-2 items-center font-bold mb-14 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex justify-center mb-12 md:mb-0 col-span-2">Image</div>
                  <div>Right</div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Home;
