export function useLocalStorage(fieldName: string, initialValue: any) {
    function updateValue(value: string) {
        window.localStorage.setItem(fieldName, value)
    }

    function result() {
        if (!window.localStorage.getItem(fieldName)) {
            window.localStorage.setItem(fieldName, initialValue)
        }

        return window.localStorage.getItem(fieldName)
    }

    return [result(), updateValue]
}
