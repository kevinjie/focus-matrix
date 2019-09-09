import Constants from '../constants'
import Utils from '../utils'

const initState = {
    allTask: Utils.loadStorageData(),
    curTask: {},
    curIndex: 0,
    showPanel: false,
    showPanelClass: 'onlyMatrix'
}

const matrixReducer = (state, action) => {
    switch(action.type) {
        case Constants.ACTION.ADD_TASK:
            return {
                ...state,
                curTask: {
                    section: action.payload
                },
                curIndex: state.allTask[action.payload] ? (state.allTask[action.payload].length)++ : 0,
                showPanel: true,
                showPanelClass: Constants.HIDE
            }
        case Constants.ACTION.EDIT_TASK:
            return {
                ...state,
                curTask: action.payload.task,
                showPanel: true,
                showPanelClass: Constants.HIDE,
                curIndex: action.payload.index
            }
        case Constants.ACTION.SUBMIT_TASK:
            const { allTask, curIndex } = state
            const obj = {...allTask}
            const { section } = action.payload
            if (!obj[section]) {
                obj[section] = []
            }
            if (obj[section][curIndex]) {
                obj[section].splice(curIndex, 1, action.payload)
            } else {
                obj[section].unshift(action.payload)
            }

            const filterObj = obj[section].filter(item => {
                return typeof item === 'object'
            })

            obj[section] = filterObj

            Utils.saveStorageDate(obj)

            return {
                ...state,
                allTask: obj,
                curTask: action.payload,
                showPanel: false,
                showPanelClass: Constants.SHOW,
            }
        case Constants.ACTION.CHECK_TASK:
            const cIndex = action.payload.index
            let sec = action.payload.task.section
            let curTaskObj = {
                ...state.allTask[sec][cIndex],
                checked: !state.allTask[sec][cIndex].checked
            }

            let secTasks = [
                ...state.allTask[sec],
            ]

            secTasks[cIndex] = curTaskObj

            let allTaskObj = {
                ...state.allTask,
                [sec]: secTasks
            }

            Utils.saveStorageDate(allTaskObj)

            return {
                ...state,
                allTask: allTaskObj
            }
        case Constants.ACTION.HIDE_PANEL:
            return {
                ...state,
                showPanel: false,
                showPanelClass: action.payload
            }
        default:
            return initState
    }
}

export default matrixReducer