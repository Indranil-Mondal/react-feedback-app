import { createContext, useState } from "react";
import data from "../data/data";


const FeedbackContext = createContext("")

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(data);

    const deleteFeeback = (id) => {
        setFeedback(feedback.filter((item) => item.id!== id))
      }
  
    const handleAdd = (newData) => {
      setFeedback( [newData, ...feedback])
    }

    return <FeedbackContext.Provider value={{

        feedback,
        deleteFeeback,
        handleAdd,

    }}>
            {children}
        </FeedbackContext.Provider>

    

}

export default FeedbackContext
