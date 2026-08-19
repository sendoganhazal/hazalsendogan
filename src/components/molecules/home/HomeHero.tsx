import Link from 'next/link'
import { HomeHeroType } from '@/lib/type/dtype'

type HeroProps = {
  data: HomeHeroType
}

const title = (
  <h1>
    I turn 
    <span className="sketch">
      designs
      <svg viewBox="0 0 200 20" preserveAspectRatio="none">
        <path d="M2 14 Q 50 4, 100 12 T 198 10" />
      </svg>
    </span> 
    into interfaces people actually enjoy using.
  </h1>
)

const HomeHero = ({ data }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-col">
          <div className="hero-kicker">{data.heroKicker}</div>
          {title}
          <p className="hero-role">{data.heroRole}</p>
          <p className="hero-lead">{data.heroRole}</p>
          <div className="hero-actions">
            {
              data.heroActions.map((action,index) => (
                <Link key={index} className={action.class} href={action.url}>{action.name}</Link>
              ))
            }
          </div>
        </div>
        <div className="hero-note-col">
          <ul className="note">
            {
              data.noteCol.map((i,index) =>(
                <li key={index}>{i}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeHero