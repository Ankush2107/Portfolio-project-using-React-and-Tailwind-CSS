import socials from '../../aboutData';

function Contact() {
  return (
    <>

    <section className= 'p-12  border-x-2 border-black'>

        <div className='container  mx-auto px-8 grid gap-8 lg:grid-cols-2 items-center justify-center'>
            <div>
                <h1 className='text-4xl lg:text-5xl font-bold mb-4'>Contact</h1>
                <p className='mb-6 text-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, facere libero non repellat provident quae. Natus animi sapiente esse illum!
                </p>
                <p className='mb-6 text-lg font-bold'>
                Want my email: ankush@gmail.com
                </p>

                <div className='text-lg font-bold'>Find me on:</div>

                <div className='mb-8'>

                <ul className='flex gap-6'>
                    {socials.map((item, index) => (
                    <li key={index}>
                        <a target='_blank' href={item.link} rel='noopener noreferrer'
                        className='py-2 flex flex-col md:flex-row gap-2 items-center justify-center text-sm'>
                        <img src={item.icon} alt={item.alt} width="25" height="25" />
                        {item.name}
                        </a>
                    </li>
                    ))}
            
                </ul>
                </div>
            </div>
            <div>
                <form action="https://public.herotofu.com/v1/a6ee4770-9b40-11ee-bd16-0d70bf7b86f5" method="post" className='px-32'>

                    <div className='w-full mb-4'>
                    <label htmlFor="name" className='form-label inline-block mb-1 text-gray-700'>Your Name</label>
                    <input name="Name" id="name" type="text" required className='block w-full px-2 py-1 border-black border-2 rounded' />
                    </div>

                    <div className='w-full mb-4'>
                    <label htmlFor="email" className='form-label inline-block mb-1 text-gray-700'>Your Email</label>
                    <input name="Email" id="email" type="email" required className='block w-full px-2 py-1 border-black border-2 rounded' />
                    </div>

                    <div className='w-full mb-4'>
                    <label htmlFor="message" className='form-label inline-block mb-1 text-gray-700'>Message</label>
                    <textarea name="email" id="email" cols="10" rows="9" className='block w-full px-2 py-1 border-black border-2 rounded'></textarea>
                    </div>
            
                    <div>
                    <input type="submit" value="Send it!" className='px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white' />
                    </div>

                </form>
            </div>
        </div>

    </section>


    </>
  )
}

export default Contact