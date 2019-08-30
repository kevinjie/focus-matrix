const matrix = [
    'Important & Urgent',
    'Important & Not Urgent',
    'Not Important & Urgent',
    'Not Important & Not Urgent'
]

const colorMap = {
    'Important & Urgent': '#FC9081',
    'Important & Not Urgent': '#9FCD62',
    'Not Important & Urgent': '#48C0E5',
    'Not Important & Not Urgent': '#B5B5B5'
}

const bgcMap = {
    'Important & Urgent': '#FFEBE5',
    'Important & Not Urgent': '#EFF2DF',
    'Not Important & Urgent': '#E3F2FF',
    'Not Important & Not Urgent': '#F0F0F0'
}

const remindDays = [
    '1 day before',
    '2 day before',
    '3 day before'
]

export default {
    matrix,
    colorMap,
    bgcMap,
    remindDays
}