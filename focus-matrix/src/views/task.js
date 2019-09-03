import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import Matrix from '../constants/base'

class Task extends Component {
    static propTypes = {
        task: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        handleClick: PropTypes.func.isRequired,
        handleChecked: PropTypes.func.isRequired
    }

    handleClick() {
        this.props.handleClick(this.props.task, this.props.index)
    }

    handleChecked(e) {
        this.props.handleChecked(this.props.task, this.props.index, e.target.checked)
    }

    render() {
        const { task } = this.props
        return (
            <li className="task">
                <Checkbox 
                  onChange={this.handleChecked.bind(this)} >{task.title}</Checkbox>
                <div onClick={this.handleClick.bind(this)}>
                    {
                        !task.deadline ? null
                        : (<span style={{color: Matrix.colorMap[task.section], marginRight: '5px'}}>{task.deadline}</span>)
                    }
                    {
                        !task.notes ? null
                        : (<span style={{color: Matrix.colorMap[task.section]}}><i className="iconfont icon-icon_community_line"></i></span>)
                    }
                </div>
            </li>
        )
    }
}

export default Task