import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({item}){

    const {deleteFeeback} = useContext(FeedbackContext)

    
   
    return (
        <Card Reversive={false}>
            <h5 className="rating">{item.rating}</h5>
            <p className="text">{item.text}</p>
            <button onClick={() => deleteFeeback(item.id)} className="close">
                <FaTimes color="black" />
            </button>
        </Card>
    )



}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired ,
}


export default FeedbackItem