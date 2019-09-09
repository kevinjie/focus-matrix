import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Select, Input, DatePicker, Button } from 'antd'
import Constants from '../constants'
import { submitTask, hideThePanel } from '../redux/actionCreators'

const Panel = (props) => {
    const Options = Object.keys(Constants.MATRIX)
    const dateFormater = 'YYYY-MM-DD'
    const { TextArea } = Input
    const { Option } = Select
    const { showPanelClass, subTask, curTask, hidePanel } = props
    const {title, notes, section, deadline, checked = false} = curTask
    const [task, setTask] = useState({title, notes, section, deadline, checked});

    useEffect(() => {
        setTask({
            ...task,
            title, 
            notes, 
            section, 
            deadline,
            checked
        })
        return () => {
            setTask({})
        };
    }, [title, notes, section, deadline, checked])

    const handleTitleChange = (e) => {
        setTask({
            ...task,
            title: e.target.value
        })
    }

    const handleNoteChange = (e) => {
        setTask({
            ...task,
            notes: e.target.value
        })
    }

    const handleSectionChange = (val) => {
        setTask({
            ...task,
            section: val
        })
    }

    const handleDeadlineChange = (moment, val) => {
        setTask({
            ...task,
            deadline: val
        })
    }

    return (
        <div id="panel" className={showPanelClass}>
            <div className="header">
                <i 
                  className="iconfont icon-icon_roundclose"
                  onClick={hidePanel.bind(this)}
                  ></i>
            </div>
            <form className="main">
                <div className="form-item">
                    <label>Title</label>
                    <Input
                    type="text"
                    name="title"
                    value={task.title} 
                    onChange={handleTitleChange}/>
                </div>
                <div className="form-item">
                    <label>Notes</label>
                    <TextArea
                    value={task.notes}
                    autosize={{minRows: 2, maxRows: 6}} 
                    onChange={handleNoteChange}/>
                </div>
                <div className="form-item">
                    <label>Section</label>
                    <Select
                    value={task.section}
                    onChange={handleSectionChange}>
                    {
                        Options.map((option, i) => <Option key={i} value={option}>{Constants.MATRIX[option]}</Option>)
                    }
                    </Select>
                </div>
                <div className="form-item">
                    <label>Deadline</label>
                    <DatePicker 
                    value={task.deadline ? moment(task.deadline,  dateFormater) : task.deadline} 
                    onChange={handleDeadlineChange}/>
                </div>
                <div className="form-item">
                    <Button
                    type="primary"
                    className="login-form-button"
                    onClick={subTask.bind(this, task)}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    curTask: state.curTask,
    showPanelClass: state.showPanelClass
})

const mapDispatchToProps = dispatch => ({
    subTask: (task) => {
        if (Object.keys(task).length === 0) return
        dispatch(submitTask(task))
    },
    hidePanel: () => dispatch(hideThePanel())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel)