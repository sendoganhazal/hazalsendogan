import { FindOutMoreType } from "@/lib/type/dtype"
import Link from "next/link"

type FindProps = {
    data: FindOutMoreType
}

const FindOutMore = ({ data }: FindProps) => {
    return (
        <section className="find-out-more">
            <span className="eyebrow">{data.eyebrow}</span>
            <div className="teasers">
                {data.teasers.map((teaser, index) => (
                    <Link key={index} className="teaser-card reveal" href={teaser.cardActionUrl}>
                        <span className="eyebrow">{teaser.cardEyebrow}</span>
                        <h3>{teaser.cardTitle}</h3>
                        <p>{teaser.cardBody}</p>
                        <span className="arrow">{teaser.cardActionsName}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default FindOutMore