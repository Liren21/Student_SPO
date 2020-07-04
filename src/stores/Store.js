import TypesExceptions from "../exception/TypesExceptions"

class Store {
    constructor() {
        this.callbackToast = null
    }

    setCallBackToast(val) {
        this.callbackToast = val
    }

    displayToast(errorMessage, appearance = TypesExceptions.SUCCESS) {
        this.callbackToast(errorMessage.toString(), appearance)
    }
}

const store = new Store()
export default store
