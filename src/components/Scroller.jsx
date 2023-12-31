import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom";

function Scroller({ text, link }) {
  return (
    <section>
        <Link to={ link }>
            <Marquee pauseOnHover gradient={false} className="bg-yellow-300 border-t-2 border-black py-1 md:py-2 font-bold text-sm md:text-xl">
                { text }
            </Marquee>
        </Link>
    </section>
  )
}

export default Scroller;
