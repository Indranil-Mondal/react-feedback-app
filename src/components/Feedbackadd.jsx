import { useContext, useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import { useState } from "react";
import Card from "./shared/Card";
import Ratings from "./Ratings";
import Button from "./shared/Button";
import Message from "./shared/Message";



function Feedbackadd() {

    const {handleAdd, editedFeedbackItem, handleUpdate} = useContext(FeedbackContext)

    const [textvalue, setTextvalue] = useState("")

    const [msgtext, setMsgtext] = useState("")

    const [selectedRate, setSelectedRate] = useState("")

    const [isDisabled, setIsDisabled] = useState(true)

    




    const chosenRating = (rate) => {
        setSelectedRate(rate)
    }

    
  
    const handleSubmit = (e) => {
        
        e.preventDefault()

        

        const newData= {
            id: Math.random() ,
            rating: selectedRate ,
            text: textvalue
        }

        if(editedFeedbackItem.editOn===true ){

            handleUpdate(editedFeedbackItem.item.id, newData)

        }

        else {
            handleAdd(newData)
        }

        
        setTextvalue('')

        
    }

    useEffect(() => {

        setTextvalue(editedFeedbackItem.item.text)
        setSelectedRate(editedFeedbackItem.item.rating)
        setIsDisabled(false)
        

    }, [editedFeedbackItem])

    

    const handleChange = (e) => {

        setTextvalue(e.target.value)

        if(textvalue === ''){
            setIsDisabled(true)
            setMsgtext("Please Enter Something")
        }

        else if(textvalue.trim().length <= 10){
            setIsDisabled(true)
            setMsgtext("Feedback Must be more than 10 charecters")
        }

        else {
            setIsDisabled(false)
            setMsgtext("")
        }
    
    }

    

    

    return (
        <Card Reversive={false}> 
            <form onSubmit={handleSubmit}>
                <p>How Would You Like to Rate Us ?</p>
                <Ratings selectedRating={chosenRating}/>
                <div className="inputbox">
                    <input type="text" value={textvalue} onChange={handleChange} placeholder="Enter Your Feedback"/>
                    <Button type="submit" version="primary" isDisabled={isDisabled} >Submit</Button>
                </div>
                <Message>{msgtext}</Message>
            </form>
        </Card>
    )


}

export default Feedbackadd
