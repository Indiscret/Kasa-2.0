import { useLocation } from "react-router-dom";
import BannerHome from '../../assets/Banner_Home.png';
import BannerAbout from '../../assets/Banner_About.png';

function Banner() {
    const { pathname } = useLocation();

    return (
        <div className="Banner">
            <div className="Banner_bg_dark">
                <img className="Banner_img" src={pathname === '/' ? BannerHome : BannerAbout} alt="Paysage" />
                {pathname === '/' && (<div className="Banner_title">Chez vous, partout et ailleurs</div>)}
            </div>
        </div>
    )
}

export default Banner