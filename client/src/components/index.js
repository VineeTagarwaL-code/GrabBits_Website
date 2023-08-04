import {lazy} from 'react'
import Navbar from './Navbar/Navbar'
import GoToTop from './GoToTop';

/** import all components lazily*/
const Contact=lazy(()=>import('./Contact/Contact'))
const Footer=lazy(()=>import('./Footer/Footer'))
const Landing=lazy(()=>import('./Landing/Landing'))
const Team=lazy(()=>import('./Team/Team'))
const Opportunities=lazy(()=>import('./Opportunities/Opportunities'))
const Resources=lazy(()=>import('./Resources/Resources'))
const Podcast=lazy(()=>import('./Podcast/Podcast'))
const Highlights=lazy(()=>import('./Highlights/Highlights'))
const Hidden=lazy(()=>import('./Hidden/Hidden'))
const Faq=lazy(()=>import('./Faq/Faq'))
const Username=lazy(()=>import('./Username/Username'))
const Password=lazy(()=>import('./Password/Password'))
const Register=lazy(()=>import('./Register/Register'))
const Profile=lazy(()=>import('./Profile/Profile'))
const Recovery=lazy(()=>import('./Recovery/Recovery'))
const Reset=lazy(()=>import('./Reset/Reset'))
const PageNotFound=lazy(()=>import('./PageNotFound/PageNotFound'))
const Grabby=lazy(()=>import('./common/Grabby/Grabby'))

export{
    Username,
    Password,
    Recovery,
    Register,
    Profile,
    Reset,
    PageNotFound,
    Contact,
	Footer,
	Team,
	Opportunities,
    Resources,
	Hidden,
	Podcast,
    Highlights,
    Landing,
    Faq,
    Navbar,
    GoToTop,
    Grabby
}