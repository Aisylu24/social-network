import React, {ChangeEvent} from 'react'

type ProfileStatusWithClassPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatusWithClass extends React.Component <ProfileStatusWithClassPropsType>{

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: { status: string }, prevState: any) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No Status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus value={this.state.status}
                               onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>
        )
    }
}