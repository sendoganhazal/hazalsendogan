import Hero from "@/components/molecules/about/Hero"
import PageHeader from "@/components/molecules/about/PageHeader"
import data from "@/lib/data/about.json"


const AboutContainer = () => {
    return (
        <>

            <PageHeader data={data.pageHeading} />
            <Hero data={data.hero}/>
        </>
    )
}

export default AboutContainer