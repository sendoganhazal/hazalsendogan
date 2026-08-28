
import { AboutHeroType } from "@/lib/type/dtype"

type HeroProps = {
    data: AboutHeroType
}

const Hero = ({ data }: HeroProps) => {


    return (
        <section className='about'>
            <div className="container hero-inner">
                <div className="about-text reveal hero-col">
                    {
                        data.text.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))
                    }
                </div>
                <ul className="facts reveal hero-note-col">
                    {
                        data.facts.map((fact) => (
                            <li key={fact.id}><span className="tag">{fact.tag}</span>{fact.text} </li>
                        ))
                    }
                </ul>
            </div>
        </section>

    )
}

export default Hero