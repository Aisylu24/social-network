import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [state, setState] = useState({editMode: false, status: props.status})

    const activateEditMode = () => {
        setState({...state, editMode: true})
    }

    const deactivateEditMode = () => {
        setState({...state, editMode: false})
        props.updateUserStatus(state.status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setState({...state, status: e.currentTarget.value})
    }

    useEffect(() => {
        setState({...state, status: props.status})
    }, [props.status])

    return (
        <div>
            {!state.editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status ? props.status :'no status' }
                    </span>
                </div>
            }
            {state.editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        value={state.status}
                        autoFocus={true}
                        onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    );
};

export default ProfileStatus;