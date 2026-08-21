import React from 'react'
import HomeHero from '@/components/molecules/home/HomeHero'
import FindOutMore from '@/components/molecules/home/FindOutMore'
import homepage from "../../../lib/data/homepage.json"

const HomeContainer = () => {
    return (
        <div className='container'>
            <HomeHero data={homepage.hero} />
            <FindOutMore data={homepage.findMore}/>
        </div>
    )
}

export default HomeContainer