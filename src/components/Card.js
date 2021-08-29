import React, { useState } from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateTodo}) => {
    const [modal, setModal] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [isInProgress, setIsInProgress] = useState(false);
    
    const Text = () => <p style={{color : "green"}}><span>&#10003; Done! &#9996;</span></p>;

    const Progress = () => 
        <p style={{paddingBottom : "5px"}}>In progress<br/>
        <progress max="100" value="50"></progress></p>;
  
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateTodo(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{backgroundColor: colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{backgroundColor: colors[index%5].secondaryColor, 
                borderRadius: "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">Deadline: {taskObj.Date}</p>
                <div>
                    {isDone ? <Text /> : null} 
                    {isInProgress ? <Progress /> : null}
                </div>

                <div style={{position: "absolute", right : "30px", bottom : "20px"}}>
                    <i className = "far fa-edit mr-3" style={{color : colors[index%5].primaryColor, 
                    cursor : "pointer"}} onClick = {() => setModal(true)}>
                    </i>

                    <button className="mr-3" style = {{color : colors[index%5].primaryColor, cursor : "pointer", 
                    borderRadius : "15px", border : "1px solid"}} onClick={() => setIsInProgress(!isInProgress)}>
                        { isInProgress ? 'Stop' : 'Start' }
                    </button>

                    <button className="mr-3" style = {{color : colors[index%5].primaryColor, 
                    cursor : "pointer", borderRadius : "15px", border : "1px solid"}} 
                    onClick={() => setIsDone(!isDone)}>
                        { isDone ? 'Undo' : 'Done' }
                    </button>

                    <i className="fas fa-trash-alt mr-3" style = {{color : colors[index%5].primaryColor, 
                    cursor : "pointer"}} onClick = {handleDelete}>
                    </i>
                </div>
            </div>
            <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;