export function getField(field, obj) {
    const keys = field.split('.')
    const lastKey = keys.pop()
    const desiredObj = keys.reduce((acc, key) => {
        if (!acc) return acc
        return acc[key] || null
    }, obj)

    return desiredObj ? desiredObj[lastKey] : null
}
