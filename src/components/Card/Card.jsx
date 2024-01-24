import { lodgingsList } from '../../datas/lodgings';

function Card() {
    return (
        <ul className='Card_contain'>
            {lodgingsList.map(({title, id, cover}) => (
                <li className='Lodgings_card' key={id}>
                    <div className='Lodgings_card_bg'>
                        <h2 className='Lodgings_card_title'>{title}</h2>
                        <img className='Lodgings_card_img' src={cover} alt={title}/>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Card