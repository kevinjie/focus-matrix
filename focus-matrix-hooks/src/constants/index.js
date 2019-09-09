const HIDE = ''

const SHOW = 'onlyMatrix'

const MATRIX = {
    'IU': 'Important & Urgent',
    'INU': 'Important & Not Urgent',
    'NIU': 'Not Important & Urgent',
    'NINU': 'Not Important & Not Urgent'
}

const TITLECOLOR = {
    'IU': '#FC9081',
    'INU': '#9FCD62',
    'NIU': '#48C0E5',
    'NINU': '#B5B5B5'
}

const CONTENTCOLOR = {
    'IU': '#FFEBE5',
    'INU': '#EFF2DF',
    'NIU': '#E3F2FF',
    'NINU': '#F0F0F0'
}

const ACTION = {
    ADD_TASK: 'ADD_TASK',
    EDIT_TASK: 'EDIT_TASK',
    SUBMIT_TASK: 'SUBMIT_TASK',
    HIDE_PANEL: 'HIDE_PANEL',
    CHECK_TASK: 'CHECK_TASK'
}

export default {
    HIDE,
    SHOW,
    MATRIX,
    TITLECOLOR,
    CONTENTCOLOR,
    ACTION
}