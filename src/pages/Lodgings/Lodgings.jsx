import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { lodgingsList } from "../../datas/lodgings";
import { Navigate, useParams } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import Carousel from "../../components/Carousel/Carousel";
import "../../styles/lodgings.css";
import "../../styles/carousel.css";

function Lodgings() {

        const { id } = useParams();
        const indexLodgings = lodgingsList.find((lodgings) => lodgings.id === id );
        if (!indexLodgings) {
            return <Navigate replace to="/*"/>
        }
        const range = [1, 2, 3, 4, 5];

        return (
            <main className="content">
                <section>
                    <Carousel pictures={indexLodgings.pictures}/>
                </section>
                <section>
                    <div className="Lodgings">
                        <div className="Lodgings_contain">
                            <h1 className="Lodgings_title">{indexLodgings.title}</h1>
                            <h2 className="Lodgings_location">{indexLodgings.location}</h2>
                            <ul className="Lodgings_location_tags">
                                {indexLodgings.tags.map((tags, index) => (
                                    <li className="Lodgings_tag" key={`${index}-${tags}`}>{tags}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="Host_contain">
                            <div className="Host">
                                <ul className="Host_list">
                                    <li className="Host_name">{indexLodgings.host.name}</li>
                                    <li><img className="Host_img" src={indexLodgings.host.picture} alt={indexLodgings.host.name}/></li>
                                </ul>
                            </div>
                            <div className="Rating">
                                {range.map((rangeElement) => indexLodgings.rating >= rangeElement ? <span key={rangeElement.toString()}><FontAwesomeIcon className="Full_rating_star" icon={faStar} /></span> :
                                    <span key={rangeElement.toString()}><FontAwesomeIcon className="Empty_rating_star" icon={faStar} /></span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="Dropdown_lodgings">
                        <Dropdown className="Dropdown_lodgings_description" title="Description" content={indexLodgings.description}/>
                        <Dropdown className="Dropdown_lodgings_equipement" title="Équipements" content={indexLodgings.equipments.map((equipment, index) => {
                            return (
                                <li className="Dropdown_equipement" key={index+id}>
                                    {equipment}
                                </li>
                            )
                        })} />
                    </div>
                </section>
            </main>
        )
}

export default Lodgings