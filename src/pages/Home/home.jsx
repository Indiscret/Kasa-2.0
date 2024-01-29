import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../styles/home.css';

function Home() {
    return(
        <div className='Home'>
            <Banner/>
            <div className='Card'>
                <Card/>
            </div>
        </div>
    )
}

export default Home