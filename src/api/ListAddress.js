const Address = require("./Address").default
import Exceptions from "../exception/Exceptions"

const ListAddress = Object.freeze({
    DOMAIN: new Address("/test"),
    BACKEND: new Address("/test/backend"),
    LIST: new Address("list", Exceptions.ERROR_GET(), Exceptions.ERROR()),
    SAVE: new Address("save", Exceptions.ERROR_GET(), Exceptions.ERROR()),
})

export default ListAddress
