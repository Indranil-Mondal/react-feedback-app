import PropTypes  from "prop-types";
import FeedbackItem from './FeedbackItem';

function FeedbackList({ listData, handleDelete }) { 

    return(

    <div className="feedback-list">
        {listData.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>))
        }
    </div>
    )
}

FeedbackList.propTypes= {
    listData: PropTypes.arrayOf( PropTypes.shape( {
        id: PropTypes.number.isRequired, 
        rating: PropTypes.number.isRequired, 
        text: PropTypes.string } ), )
}



export default FeedbackList