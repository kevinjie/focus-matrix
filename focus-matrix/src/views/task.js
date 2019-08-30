import React, { Component } from 'react'

class Task extends Component {
    render() {
        const task = this.props
        return (
            <li className="task">
                <input 
                  type="checkbox"
                  checked={task.checked}
                />
                <span>{task.title}</span>
                {
                    !task.deadline ? null
                    : (<span>{task.deadline}</span>)
                }
                {
                    !task.notes ? null
                    : (<span><i className="iconfont icon-icon_community_line"></i></span>)
                }
            </li>
        )
    }
}

export default Task