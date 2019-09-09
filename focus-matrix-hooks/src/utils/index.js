const common = {
    loadStorageData() {
        const data = window.localStorage.getItem('tasks-data')
        return data ? JSON.parse(data) : {}
    },
    saveStorageDate(allTask) {
        window.localStorage.setItem('tasks-data', JSON.stringify(allTask))
    }
}

export default {
    ...common
}