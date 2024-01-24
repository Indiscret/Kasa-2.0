import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';
import { collapse } from '../../datas/collapse';

function About() {
    return (
        <div>
            <Banner/>
            <div className='Dropdown_contain'>
                {collapse.map (({title, content}) => (
                    <Dropdown title={title} content={content}/>
                ))}
            </div>
        </div>
    )
}

export default About