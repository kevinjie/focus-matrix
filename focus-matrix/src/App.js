import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Area from './views/area'
import Panel from './views/panel'
import Matrix from './constants/base'
import './resources/index.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allTask: {},
      currentTask: {},
      showTaskPanel: true 
    }
  }

  componentDidMount() {
    this._loadStorageData()
  }

  onAddTask() {
    this.setState({
      showTaskPanel: !this.state.showTaskPanel
    })
  }

  _loadStorageData() {
    const data = window.localStorage.getItem('tasks-data')
    if (data) {
      this.setState({
        allTask: JSON.parse(data)
      })
    }
  }

  render() {
    const { allTask } = this.state
    return (
      <ConfigProvider locale={zhCN}>
        <div id="container">
          <div id="matrix-wrapper">
            {
              Matrix.matrix.map((area, i) => (
                <Area 
                  title={area}
                  hstyle={Matrix.colorMap[area]} 
                  mstyle={Matrix.bgcMap[area]}
                  tasks={allTask[area] ? allTask[area] : []}
                  onAddTask={this.onAddTask.bind(this)}
                  key={i} />
              ))
            }
          </div>
          {
            !this.state.showTaskPanel ? null
            : (
              <Panel {...this.state.currentTask}/>
            )
          }
        </div>
      </ConfigProvider>
    )
  }
}


export default App;
