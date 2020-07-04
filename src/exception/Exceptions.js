import MyException from "./MyException"

const Exceptions = Object.freeze({
    ERROR: (param = "") => {
        return new MyException(1, "Ошибка!" + param)
    },
    ERROR_GET: (param = "") => {
        return new MyException(2, "Ошибка, не удалось получить данные!" + param)
    },
    EMPTY_RESPONSE_WARNING: (param = "") => {
        return new MyException(
            7,
            "Внимание! По введенным параметрам данные не найдены!" + param
        )
    },
    NOT_CHANGES: (param = "") => {
        return new MyException(10, "Внимание! Нет изменений." + param)
    },
    NOT_ERRORS: (param = "") => {
        return new MyException(10, "Внимание! Ошибки не найдены." + param)
    },
})

export default Exceptions
