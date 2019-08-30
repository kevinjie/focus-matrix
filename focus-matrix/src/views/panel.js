import React, { Component } from 'react'
import { Select, Input, DatePicker, Button } from 'antd'
import Matrix from '../constants/base'

class Panel extends Component {
    render() {
        const { TextArea } = Input
        const { Option } = Select
        return (
            <div id="panel">
                <div className="header">
                    <i className="iconfont icon-icon_roundclose"></i>
                </div>
                <form className="main">
                    <div className="form-item">
                        <label>Title</label>
                        <Input type="text" name="title" value="" placeholder="input title"/>
                    </div>
                    <div className="form-item">
                        <label>Notes</label>
                        <TextArea 
                          placeholder="input notes"
                          autosize={{ minRows: 2, maxRows: 6 }} />
                    </div>
                    <div className="form-item">
                        <label>Section</label>
                        <Select defaultValue="Important & Urgent">
                            {
                                Matrix.matrix.map((area, i) => <Option key={i} value={area}>{area}</Option>)
                            }
                        </Select>
                    </div>
                    <div className="form-item">
                        <label>Deadline</label>
                        <DatePicker />
                    </div>
                    <div className="form-item">
                        <label>Remind</label>
                        <Select defaultValue="1 day before">
                            {
                                Matrix.remindDays.map((day, i) => <Option key={i} value={day}>{day}</Option>)
                            }
                        </Select>
                    </div>
                    <div className="form-item">
                        <Button type='primary' className="login-form-button">Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Panel