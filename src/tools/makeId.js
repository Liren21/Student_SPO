const makeId = function makeId(array, template) {
    function make() {
        let text = template !== undefined ? template : "",
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            possibleNums = "0123456789"

        for (let i = 0; i < 2; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length))

        for (let j = 0; j < 3; j++)
            text += possibleNums.charAt(Math.floor(Math.random() * 10))

        let flag = true

        if (Array.isArray(array)) {
            array.forEach(function(elem2) {
                if (
                    elem2.id !== undefined &&
                    elem2.id.toString().indexOf(text) >= 0
                ) {
                    return false
                }
            })
        } else {
            Object.keys(array).forEach(function(elem2) {
                if (
                    array[elem2].id !== undefined &&
                    array[elem2].id.toString().indexOf(text) >= 0
                ) {
                    return false
                }
            })
        }

        if (flag) return text
        else return make()
    }

    if (Array.isArray(array)) {
        array.forEach(function(elem) {
            if (elem.id === undefined || elem.id.length === 0) elem.id = make()
        })
    } else {
        Object.keys(array).forEach(function(elem) {
            if (array[elem].id === undefined || array[elem].id.length === 0)
                array[elem].id = make()
        })
    }
}

export default makeId
