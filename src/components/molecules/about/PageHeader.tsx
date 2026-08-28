import {PageHeaderType } from "@/lib/type/dtype"
import Link from "next/link"

type PageHeaderProps = {
    data: PageHeaderType
}

const PageHeader = ({data}:PageHeaderProps) => {
    return (
        <section className="page-header">
            <div className="container">
                <Link className="back-link" href={data.backlink.url}>← {data.backlink.name}</Link>
                <span className="eyebrow">{data.eyebrow}</span>
                <h1>{data.title}.</h1>
            </div>
        </section>
    )
}

export default PageHeader