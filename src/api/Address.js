import MyException from "../exception/MyException"
import Exceptions from "../exception/Exceptions"

class Address {
    constructor(
        url,
        errorGet = Exceptions.ERROR(),
        errorPost = Exceptions.ERROR()
    ) {
        if (typeof url === "string") this.url = url
        else throw new TypeError()

        if (errorGet instanceof MyException) this.errorGet = errorGet
        else throw new TypeError("error instanceof MyExceptions")

        if (errorPost instanceof MyException) this.errorPost = errorPost
        else throw new TypeError("error instanceof MyExceptions")
    }

    urlGet() {
        return this.url + "/"
    }

    urlPost() {
        return this.url
    }

    setParams(...params) {
        try {
            if (params === undefined || params[0][0].length === 0)
                this.params = []
            else if (params instanceof Array) this.params = params[0][0]
            else throw new TypeError("param instanceof Array")
        } catch (e) {
            throw new Error(e)
        }
    }

    getParamsString() {
        let url = ""
        let split = "/"

        this.params.forEach(function(param) {
            url += split + param
        })

        return url
    }

    getUrlParameterizedString(...params) {
        this.setParams(params)
        return String(this.url + this.getParamsString())
    }
}

export default Address
