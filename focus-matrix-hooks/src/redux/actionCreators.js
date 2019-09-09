import Constants from '../constants'

export const addTask = (section) => ({
    type: Constants.ACTION.ADD_TASK,
    payload: section
})

export const editTask = ({task, index}) => ({
    type: Constants.ACTION.EDIT_TASK,
    payload: {
        task, 
        index
    }
})

export const submitTask = (task) => ({
    type: Constants.ACTION.SUBMIT_TASK,
    payload: task
})

export const hideThePanel = () => ({
    type: Constants.ACTION.HIDE_PANEL,
    payload: Constants.SHOW
})

export const checkTask = ({task, index}) => ({
    type: Constants.ACTION.CHECK_TASK,
    payload: { task, index}
})