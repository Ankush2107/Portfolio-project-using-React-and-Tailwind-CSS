import { HarleyCover, HarleyWebsite } from "../../../assets"
function harley() {
  return (
    <>
        <section className="text-white py-28 bg-center bg-cover px-28" style={{ backgroundImage: "url(" + HarleyCover + ")"}}>
                <div className="container mx-auto ">
                    <h2 className="text-lg font-bold uppercase">Customer</h2>
                    <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6">Harley Davidson</h1>
                    <div className="text-lg md:flex gap-12">

                        <div className="mb-4 md:mb-0">
                            <span className="font-bold block mb-4">Role</span>
                            Website Design
                        </div>

                        <div>
                            <span className="font-bold block mb-4">Visit Website</span>
                            <a target='_blank' href='http://harley-davidson.com' rel="noopener noreferrer" className="hover:underline">www.harley-davidson.com</a>
                        </div>

                    </div>

                </div>
        </section>

        <section className="border-black border-t-2 py-16 px-28">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Involvement</h1>
                <p className="text-md max-w-xl mb-16">
                    Harley-Davidson, Inc. H-D, or simply Harley is an American motorcycle manufacturer headquartered in Milwaukee, Wisconsin, United States. Founded in 1903, it is one of two major American motorcycle manufacturers to survive the Great Depression along with its historical rival, Indian Motorcycles. The company has survived numerous ownership arrangements, subsidiary arrangements, periods of poor economic health and product quality.
                </p>

                <img src={HarleyWebsite} alt="Harley davidson website" width="1053" height="539" loading="lazy" className="mx-auto mb-16" />

                <h1 className="text-3xl font-bold mb-4">Result</h1>
                <p className="text-md max-w-xl mb-16">
                    Harley-Davidson, Inc. H-D, or simply Harley is an American motorcycle manufacturer headquartered in Milwaukee, Wisconsin, United States. Founded in 1903, it is one of two major American motorcycle manufacturers to survive the Great Depression along with its historical rival, Indian Motorcycles. The company has survived numerous ownership arrangements, subsidiary arrangements, periods of poor economic health and product quality.
                </p>

                <ul className="text-lg flex gap-8">
                    <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-4">
                        <span className="font-bold text-2xl">10%</span>
                        <span className="text-sm">Increase in Sales</span>
                    </li>

                    <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-4">
                        <span className="font-bold text-2xl">10%</span>
                        <span className="text-sm">Increase in Website engagement</span>
                    </li>
                </ul>

            </div>
        </section>
    </>
  )
}

export default harley
