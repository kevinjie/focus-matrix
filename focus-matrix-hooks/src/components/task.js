import React from 'react'
import { connect } from 'react-redux'
import { Checkbox } from 'antd'
import Constants from '../constants'
import { editTask, checkTask } from '../redux/actionCreators'

const Task = (props) => {
    const { task, index, edTask, checkTask } = props
    return (
        <li className="task">
            <Checkbox checked={task.checked} onChange={checkTask.bind(this, {task, index})}>{task.title}</Checkbox>
            <div className="timeAndMsg">
                {
                    !task.deadline ? null
                    : <span style={{
                        color: Constants.TITLECOLOR[task.section],
                        marginRight: '5px'
                    }} onClick={edTask.bind(this, {task, index})}>{task.deadline}</span>
                }
                {
                   !task.notes ? null
                   : <span 
                       style={{color: Constants.TITLECOLOR[task.section]}}><i className="iconfont icon-icon_community_line" onClick={edTask.bind(this, {task, index})}></i></span> 
                }
            </div>
        </li>
    )
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    edTask: ({task, index}) => dispatch(editTask({task, index})),
    checkTask: ({task, index}) => dispatch(checkTask({task, index}))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Task)