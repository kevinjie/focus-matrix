import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './task'

class Area extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        hstyle: PropTypes.string.isRequired,
        mstyle: PropTypes.string.isRequired,
        tasks: PropTypes.array.isRequired,
        onAddTask: PropTypes.func.isRequired,
        onEditTask: PropTypes.func.isRequired,
        onHandleChecked: PropTypes.func.isRequired
    }

    handleAdd() {
        this.props.onAddTask(this.props.title)
    }

    handleClick(task, index) {
        this.props.onEditTask(task, index)
    }

    handleChecked(task, index, checked = false) {
        this.props.onHandleChecked(task, index, checked)
    }

    render() {
        const headerBgc = this.props.hstyle
        const mainBgc = this.props.mstyle
        return (
            <div className="matrix">
                <div 
                  className="header"
                  style={{backgroundColor: headerBgc}}>
                    <h3>{this.props.title}</h3>
                    {
                        this.props.tasks.length === 0 ? null
                        : (<span className="count-task">{this.props.tasks.length}</span>)
                    }
                    <button 
                      type="button"
                      className="add-task"
                      onClick={this.handleAdd.bind(this)}
                      >
                        <i className="iconfont icon-icon_add"></i>
                    </button>
                </div>
                <div 
                  className="main"
                  style={{backgroundColor: mainBgc}}>
                    <ul>
                        {
                            this.props.tasks.length === 0 ? null
                            : (
                                this.props.tasks.map((task, i) => 
                                  <Task 
                                    task={task} 
                                    index={i} 
                                    key={i} 
                                    handleClick={this.handleClick.bind(this)}
                                    handleChecked={this.handleChecked.bind(this)} 
                                  />)
                              )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Area