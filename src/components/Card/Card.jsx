import { lodgingsList } from '../../datas/lodgings';
import { Link } from 'react-router-dom';
import '../../styles/card.css';

function Card() {
    return (
        <ul className='Card_contain'>
            {lodgingsList.map(({title, id, cover}) => (
                <li className='Lodgings_card' key={id}>
                    <Link to={`/Lodgings/${id}`}>
                    <div className='Lodgings_card_bg'></div>
                        <h2 className='Lodgings_card_title'>{title}</h2>
                        <img className='Lodgings_card_img' src={cover} alt={title}/>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Card