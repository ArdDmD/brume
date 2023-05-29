export function getField(field, obj) {
    const keys = field.split('.')
    const lastKey = keys.pop()
    const desiredObj = keys.reduce((acc, key) => {
        if (!acc) return acc
        return acc[key] || null
    }, obj)

    return desiredObj ? desiredObj[lastKey] : null
}

export function setField(field, val, item) {
  const keys = field.split('.')
  keys.reduce((acc, key, id) => {
    const isLast = id === keys.length - 1
    acc[key] = isLast ? val : acc[key] || {}
    return acc[key]
  }, item)
  return item
}



// where: {
//   '$colors.keyWord$': { [Op.eq]: 'RED' },
//   '$categories.keyWord$': { [Op.eq]: 'TEST' },
// },
