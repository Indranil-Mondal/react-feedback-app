import { useState } from "react";

function Ratings({selectedRating}) {

    const [selected, setSelected] = useState(10)

    const radioHandler = (e) => {
        setSelected(+e.currentTarget.value)
        selectedRating(+e.currentTarget.value)
    }



    return (
        <div className="allratings">
            <div className="individual-rating">
                <label htmlFor="1" className="radio-label">1</label>
                <input type="radio" value="1" id="1" onChange={radioHandler} checked={selected===1} className="radio-btn"/>
            </div>

            <div className="individual-rating">
                <label htmlFor="2" className="radio-label">2</label>
                <input type="radio" value="2" id="2" onChange={radioHandler} checked={selected===2} className="radio-btn"/>
            </div>

            <div className="individual-rating">
                <label htmlFor="3" className="radio-label">3</label>
                <input type="radio" value="3" id="3" onChange={radioHandler} checked={selected===3} className="radio-btn"/>
            </div>

            <div className="individual-rating">
                <label htmlFor="4" className="radio-label">4</label>
                <input type="radio" value="4" id="4" onChange={radioHandler} checked={selected===4} className="radio-btn"/>
            </div>

            <div className="individual-rating">
                <label htmlFor="5" className="radio-label">5</label>
                <input type="radio" value="5" id="5" onChange={radioHandler} checked={selected===5} className="radio-btn"/>
            </div>

            <div className="individual-rating">
                <label htmlFor="6" className="radio-label">6</label>
                <input type="radio" value="6" id="6" onChange={radioHandler} checked={selected===6} className="radio-btn"/>
            </div>

            <div className="individual-rating">
                <label htmlFor="7" className="radio-label">7</label>
                <input type="radio" value="7" id="7" onChange={radioHandler} checked={selected===7} className="radio-btn"/>
            </div>

            <div className="individual-rating">
                <label htmlFor="8" className="radio-label">8</label>
                <input type="radio" value="8" id="8" onChange={radioHandler} checked={selected===8} className="radio-btn"/>
            </div>

            <div className="individual-rating">
                <label htmlFor="9" className="radio-label">9</label>
                <input type="radio" value="9" id="9" onChange={radioHandler} checked={selected===9} className="radio-btn"/>
            </div>

            <div className="individual-rating">
                <label htmlFor="10" className="radio-label">10</label>
                <input type="radio" value="10" id="10" onChange={radioHandler} checked={selected===10} className="radio-btn"/>
            </div>
            
        </div>
    )
}

export default Ratings
