import { useContext, useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import { useState } from "react";
import Card from "./shared/Card";
import Ratings from "./Ratings";
import Button from "./shared/Button";
import Message from "./shared/Message";



function Feedbackadd() {

    const {handleAdd, editedFeedbackItem, handleUpdate, isDisabled, setIsDisabled} = useContext(FeedbackContext)

    const [textvalue, setTextvalue] = useState("")

    const [msgtext, setMsgtext] = useState("")

    const [selectedRate, setSelectedRate] = useState("")

    

    

    
    useEffect(() => {
       
       if(editedFeedbackItem.editOn===true){
        setTextvalue(editedFeedbackItem.item.text)
        setSelectedRate(editedFeedbackItem.item.rating)
       }
        
        

    }, [editedFeedbackItem])



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

        else if(newData.text.trim().length>0 && newData.rating>0) {
            handleAdd(newData)
        }

        else {
            setMsgtext("Can't Add Blank Feedback")
        }

        
        setTextvalue("")
        setIsDisabled(true)

        
    }

    

    

    const handleChange = (e) => {

        setTextvalue(e.currentTarget.value)
        

        
        if(e.currentTarget.value === ''){
            setIsDisabled(true)
            setMsgtext("Please Enter Something")
        }

        else if(e.currentTarget.value.trim().length <= 10){
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
