import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
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
      showTaskPanel: false,
      onlyMatrix: 'onlyMatrix' 
    }
  }

  componentDidMount() {
    this._loadStorageData()
  }

  onAddTask(title) {
    this.setState({
      currentTask: {...this.state.currentTask, section: title},
      onlyMatrix: '',
      showTaskPanel: true
    })
  }

  onEditTask(task, index) {
    this.setState({
      currentIndex: index,
      currentTask: {...this.state.currentTask, ...task},
      onlyMatrix: '',
      showTaskPanel: true
    })
  }

  onHandleChecked(task, index, checked = false) {
    this.setState({
      currentIndex: index,
      currentTask: {...this.state.currentTask, ...task}
    })
  }

  onClosePanel() {
    this.setState({
      onlyMatrix: 'onlyMatrix',
      showTaskPanel: false
    })
  }

  onSubmitTask(data) {
    const { section } = data
    const { allTask, currentIndex } = this.state
    if (!allTask[section]) {
      allTask[section] = []
    }
    if (allTask[section][currentIndex]) {
      allTask[section].splice(currentIndex, 1, data)
    } else {
      allTask[section].unshift(data)
    }
    
    this.setState({ 
      allTask,
      onlyMatrix: 'onlyMatrix',
      showTaskPanel: false
    })
    this._saveStorageData(allTask)
  }

  _saveStorageData(allTask) {
    window.localStorage.setItem('tasks-data', JSON.stringify(allTask))
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
    const { allTask, onlyMatrix } = this.state
    return (
      <ConfigProvider>
        <div id="container">
          <div id="matrix-wrapper" className={onlyMatrix}>
            {
              Matrix.matrix.map((area, i) => (
                <Area 
                  title={area}
                  hstyle={Matrix.colorMap[area]} 
                  mstyle={Matrix.bgcMap[area]}
                  tasks={allTask[area] ? allTask[area] : []}
                  onAddTask={this.onAddTask.bind(this)}
                  onEditTask={this.onEditTask.bind(this)}
                  onHandleChecked={this.onHandleChecked.bind(this)}
                  key={i} />
              ))
            }
          </div>
          {
            !this.state.showTaskPanel ? null
            : (
              <Panel 
                onClosePanel={this.onClosePanel.bind(this)}
                currentTask={this.state.currentTask} 
                onSubmitTask={this.onSubmitTask.bind(this)}/>
            )
          }
        </div>
      </ConfigProvider>
    )
  }
}


export default App;
