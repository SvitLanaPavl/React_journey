import Swimmer from "../images/swimmer.png";
import Bride from "../images/bride.png";
import Bike from "../images/mountain-bike.png";
import Group1 from "../images/Group1.png";
import Group2 from "../images/Group2.png";
import Group3 from "../images/Group3.png";

export default function Card() {
    return (
       <section className="card-sctn">
        <div className="card">
            <img src={Swimmer}/>
            <img src={Group1}/>
        </div>
        <div className="card">
            <img src={Bride}/>
            <img src={Group2}/>
        </div>
        <div className="card">
            <img src={Bike}/>
            <img src={Group3}/>
        </div>
       </section>
    )
}