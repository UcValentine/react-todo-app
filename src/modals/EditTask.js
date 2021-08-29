import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
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

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDate(taskObj.Date);
    },[taskObj]);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Date'] = date
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <div className = "form-group">
                    <label>Task Name</label>
                    <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name="taskName"/>
                </div>
                <div className = "form-group">
                    <label>Deadline</label>
                    <input type="datetime-local" className = "form-control" value = {date} onChange = {handleChange} name="date" />
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;