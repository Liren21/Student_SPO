import axios from "axios/index"

const Address = require("./Address").default
const ListAddress = require("./ListAddress").default
import history from "./History"
import store from "../stores/Store"
import TypesExceptions from "../exception/TypesExceptions"

class API {
    static async get(address, ...params) {
        const splitter = "\n"
        if (address instanceof Address) {
            const url =
                ListAddress.BACKEND.urlGet() +
                address.getUrlParameterizedString(params)

            return await axios
                .get(url)
                .then(function(response) {
                    if (response.data.data === undefined) {
                        const errorMessage = new Error(
                            url + splitter + address.errorGet.message
                        )

                        store.displayToast(errorMessage, TypesExceptions.ERROR)
                        throw errorMessage
                    } else return response.data.data
                })
                .catch(function(error) {
                    const errorMessage = new Error(
                        url + splitter + error.message
                    )

                    console.log(errorMessage)
                    store.displayToast(errorMessage, TypesExceptions.ERROR)

                    if (error.response.status === 401) {
                        history.push(ListAddress.BACKEND.urlGet())
                        history.go(ListAddress.BACKEND.urlGet())
                    } else if (error.response.status === 404) {
                        history.push(ListAddress.DOMAIN.urlGet())
                    }
                })
        } else throw new TypeError("API: address instanceof Address")
    }

    static async post(address, data, ...params) {
        const splitter = "\n"

        if (address instanceof Address) {
            const url =
                ListAddress.BACKEND.urlGet() +
                address.getUrlParameterizedString(params)

            return await axios
                .post(url, data)
                .then(function(response) {
                    const typeMess =
                        response.data.success.toString() === "true"
                            ? TypesExceptions.SUCCESS
                            : TypesExceptions.ERROR

                    store.displayToast(response.data.message, typeMess)
                    return response.data
                })
                .catch(function(error) {
                    const errorMessage = new Error(
                        url + splitter + error.message
                    )

                    console.log(errorMessage)
                    store.displayToast(errorMessage, TypesExceptions.ERROR)

                    if (error.response.status === 401) {
                        history.push(ListAddress.BACKEND.urlGet())
                        history.go(ListAddress.BACKEND.urlGet())
                    } else if (error.response.status === 404) {
                        history.push(ListAddress.DOMAIN.urlGet())
                    }

                    return error
                })
        } else throw new TypeError("API: address instanceof Address")
    }
}

export default API
