import React from "react";

const travels = [
    {
        destination : "Lakey Peak",
        country : "Indonésie",
        photo : "http://i.cdn-surfline.com/surfnews/images/2015/04_april/spotcheck_lakeypeak/full/MICK-CURLEY_SURFLINE_LAKEYS_2015-5777.jpg",
        distance : "5468",
    },
    {
        destination : "Siargao",
        country : "Philippines",
        photo : "http://siargao.surf/wp-content/uploads/2017/03/cloud-nine-surfing.jpg",
        distance : "7923",
    },
    {
        destination : "Ahangama",
        country : "Sri Lanka",
        photo : "https://www.errantsurf.com/static/images/accom/46/photos/Anutte.JPG",
        distance : "4509",
    },
    {
        destination : "Teahupoo",
        country : "Polynésie Française",
        photo : "https://imgv3.surf-report.com/pictures/2018/20180704/1807042933.png",
        distance : "23054",
    },
    {
        destination : "Imsouane",
        country : "Maroc",
        photo : "http://3.bp.blogspot.com/-w5hWQKQjEsE/Uj9o3nq_g2I/AAAAAAAAFig/ayckAocIyZM/s640/Pointed-Imessouane.jpg",
        distance : "1200",
    },
]

const Travel = ({destination, country, photo, distance}) => (
    <section>
        <h2>{destination}</h2>
        <p>{country}, {distance} km</p>
        <img
        src={photo}
        alt={destination}
        />
    </section>

);

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel {...travel}/>
        ))}
    </div>
);

export default Travels;