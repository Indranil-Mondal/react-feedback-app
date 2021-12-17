import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import { useState } from "react";
import Card from "./shared/Card";
import Ratings from "./Ratings";
import Button from "./shared/Button";
import Message from "./shared/Message";

let isDisabled = false
let selectedRate;

function Feedbackadd() {

    const {handleAdd} = useContext(FeedbackContext)




    const chosenRating = (rate) => {
         selectedRate = rate
    }
  
    const handleSubmit = (e) => {
        
        e.preventDefault()

        

        const newData= {
            id: Math.random() ,
            rating: selectedRate ,
            text: textvalue
        }

        handleAdd(newData)

        
        setTextvalue('')

        
    }

    const [textvalue, setTextvalue] = useState("")

    const [msgtext, setMsgtext] = useState("")

    const handleChange = (e) => {

        setTextvalue(e.target.value)

        if(textvalue === ''){
            isDisabled = true
            setMsgtext("Please Enter Something")
        }

        else if(textvalue.trim().length <= 10){
            isDisabled = true
            setMsgtext("Feedback Must be more than 10 charecters")
        }

        else {
            isDisabled = false
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
