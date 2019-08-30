import React, { Component } from 'react'
import Task from './task'

class Area extends Component {
    handleAdd() {
        this.props.onAddTask()
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
                        : (<span>{this.props.tasks.length}</span>)
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
                            : (this.props.tasks.map((task, i) => <Task task={task} key={i} />))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Area