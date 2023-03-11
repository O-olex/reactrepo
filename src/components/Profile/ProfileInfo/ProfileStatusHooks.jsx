import React, { useEffect, useState } from 'react';
import cl from './ProfileInfo.module.css';



const ProfileStatusHooks = (props) => {
   
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateMode = () => {
        props.isOwner && setEditMode(true);
    }

    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        
    }
    
    return (
        <div className={cl.status}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode} >{props.status || "-----" }</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true} value={status}></input>
                </div>
            }
        </div>
    );
}


export default ProfileStatusHooks;

