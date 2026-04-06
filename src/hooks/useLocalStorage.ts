import { useState, useEffect } from 'react'

export function useLocalStorage(fieldName: string, initialValue: any) {
    const [output, setOutput] = useState(() => {
        if (!window.localStorage.getItem(fieldName)) {
            window.localStorage.setItem(fieldName, initialValue)
        }

        return window.localStorage.getItem(fieldName)
    })

    function updateValue(value: string) {
        window.localStorage.setItem(fieldName, value)
        setOutput(value)
    }

    return [output, updateValue]
}
