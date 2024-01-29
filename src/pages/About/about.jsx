import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';
import { collapse } from '../../datas/collapse';

// Ajouter des key={id} pour le collapase.js

function About() {
    return (
        <div>
            <Banner/>
            <div className='Dropdown_contain'>
                {collapse.map (({title, id, content}) => (
                    <Dropdown title={title} key={id} content={content}/>
                ))}
            </div>
        </div>
    )
}

export default About