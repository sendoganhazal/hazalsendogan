import Navlist from '@/components/molecules/navlist/Navlist'
import Link from 'next/link'
import { HeaderType } from '@/lib/type/dtype'

type Hdata = {
    data: HeaderType
}

const Header = ({data}: Hdata) => {
    return (
        <header>
            <nav>
                <Link className="nav-mark" href={"/"}>{data.title}</Link>
                <Navlist navLinks={data.navLinks} />
            </nav>
        </header>
    )
}

export default Header