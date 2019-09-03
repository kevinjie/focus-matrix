import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Select, Input, DatePicker, Button } from 'antd'
import Matrix from '../constants/base'

class Panel extends Component {
    static propTypes = {
        onClosePanel: PropTypes.func.isRequired,
        currentTask: PropTypes.object.isRequired,
        onSubmitTask: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    componentDidMount() {
        this.setState({
            ...this.props.currentTask
        })
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleNoteChange(e) {
        this.setState({
            notes: e.target.value
        })
    }

    handleSectionChange(val) {
        this.setState({
            section: val
        })
    }

    handleDeadlineChange(moment, val) {
        this.setState({
            deadline: val
        })
    }

    handleRemindChange(val) {
        this.setState({
            remind: val
        })
    }

    handleClose() {
        this.props.onClosePanel()
    }

    handleSubmit() {
        this.props.onSubmitTask(this.state)
    }

    render() {
        const dateFormater = 'YYYY-MM-DD'
        const { TextArea } = Input
        const { Option } = Select
        const { title = '', 
                notes = '', 
                section,
                deadline = null,
                remind = null
              } = this.state
        return (
            <div id="panel">
                <div className="header">
                    <i 
                      className="iconfont icon-icon_roundclose"
                      onClick={this.handleClose.bind(this)}>
                    </i>
                </div>
                <form className="main">
                    <div className="form-item">
                        <label>Title</label>
                        <Input 
                          type="text" 
                          name="title" 
                          value={title} 
                          placeholder="input title"
                          onChange={this.handleTitleChange.bind(this)}/>
                    </div>
                    <div className="form-item">
                        <label>Notes</label>
                        <TextArea 
                          value={notes}
                          placeholder="input notes"
                          autosize={{ minRows: 2, maxRows: 6 }} 
                          onChange={this.handleNoteChange.bind(this)}
                          />
                    </div>
                    <div className="form-item">
                        <label>Section</label>
                        <Select 
                          value={section}
                          onChange={this.handleSectionChange.bind(this)}>
                            {
                                Matrix.matrix.map((area, i) => <Option key={i} value={area}>{area}</Option>)
                            }
                        </Select>
                    </div>
                    <div className="form-item">
                        <label>Deadline</label>
                        <DatePicker 
                          value={deadline ? moment(deadline, dateFormater) : deadline} 
                          onChange={this.handleDeadlineChange.bind(this)}/>
                    </div>
                    <div className="form-item">
                        <label>Remind</label>
                        <Select 
                          value={remind}
                          onChange={this.handleRemindChange.bind(this)}>
                            {
                                Matrix.remindDays.map((day, i) => <Option key={i} value={day}>{day}</Option>)
                            }
                        </Select>
                    </div>
                    <div className="form-item">
                        <Button 
                          type='primary' 
                          className="login-form-button"
                          onClick={this.handleSubmit.bind(this)}
                          >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Panel