import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({item}){

    const {deleteFeeback, editFeedback} = useContext(FeedbackContext)

    
   
    return (
        <Card Reversive={false}>
            <h5 className="rating">{item.rating}</h5>
            <p className="text">{item.text}</p>
            <button onClick={() => deleteFeeback(item.id)} className="close">
                <FaTimes color="black" />
            </button>
            <button onClick={()=>editFeedback(item)} className="edit">
                <FaEdit color="#5E8199" />
            </button>
        </Card>
    )



}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired ,
}


export default FeedbackItem