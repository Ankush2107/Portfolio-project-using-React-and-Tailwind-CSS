import { HeroSm, HeroMd, HeroLg } from "../../assets"
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

              <h2 className="text-lg md:text-xl font-bold uppercase">Hi 👋 I'm Ankush.</h2>

              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
                Developer<span className="text-yellow-400">.</span><br/>
                Life long learner<span className="text-violet-900">.</span>
              </h1>
              
              <p className="text-lg max-w-xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis nostrum, enim sit quasi exercitationem, facilis error ex officia rerum a.
              </p>

            </div>
        </div>
       </section>
    </div>
  )
}

export default Home
