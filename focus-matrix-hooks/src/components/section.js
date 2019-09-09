import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../redux/actionCreators'
import Constants from '../constants'
import Task from './task'

const CountTask = (props) => {
    const { allTask, title } = props
    const tasks = allTask[title]
    return (
        !tasks || tasks.length === 0 ? null
        : <span className="count-task">{tasks.length}</span>
    )
}

const Section = (props) => {
    const { allTask, title, addTask } = props
    const headerBgc = { backgroundColor: Constants.TITLECOLOR[title] }
    const mainBgc = { backgroundColor: Constants.CONTENTCOLOR[title] }

    return (
        <div className="matrix">
            <div className="header" style={headerBgc}>
                <h3>{Constants.MATRIX[title]}</h3>
                <CountTask {...props} />
                <button type="button" className="add-task" onClick={addTask.bind(this, title)}>
                    <i className="iconfont icon-icon_add"></i>
                </button>
            </div>
            <div className="main" style={mainBgc}>
                <ul>
                    {
                        !allTask[title] || allTask[title].length === 0 ? null
                          :allTask[title].map((task, i) => <Task key={i} task={task} index={i}/>)
                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    allTask: state.allTask
})

const mapDispatchToProps = dispatch => ({
    addTask: (section) => dispatch(addTask(section))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Section)