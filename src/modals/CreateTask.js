import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [date, setDate] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDate(value)   
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Date"] = date
        save(taskObj)
        window.location.reload()
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <div className = "form-group">
                    <label>Task Name</label>
                    <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                </div>
                <div className = "form-group">
                    <label>Deadline</label>
                    <input type="datetime-local" className = "form-control" value = {date} onChange = {handleChange} name="date" />
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;