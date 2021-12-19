import { createContext, useState } from "react";
import data from "../data/data";


const FeedbackContext = createContext("")

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(data);

    const [editedFeedbackItem, setEditedFeedbackItem] = useState(
      {
        item: {},
        editOn: false,
      }
    )

    

    const deleteFeeback = (id) => {
        setFeedback(feedback.filter((item) => item.id!== id))
      }

    const handleUpdate =(id, updatedItem) => {

      setFeedback(feedback.map((item) => item.id===id ? updatedItem : item),
      setEditedFeedbackItem({
        item: {},
        editOn: false,
      })
      
      
      )
      

    }
  
    const handleAdd = (newData) => {
      setFeedback( [newData, ...feedback])
    }

    const editFeedback = (item) => {
      setEditedFeedbackItem(
        {
          item,
          editOn: true,
        }
      )
      
    }

    return <FeedbackContext.Provider value={{

        feedback,
        deleteFeeback,
        handleAdd,
        editFeedback,
        editedFeedbackItem,
        handleUpdate,
        

    }}>
            {children}
        </FeedbackContext.Provider>

    

}

export default FeedbackContext
