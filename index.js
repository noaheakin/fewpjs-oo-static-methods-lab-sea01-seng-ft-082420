class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let arr = string.split(' ')
    let lowercase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let title = []
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || !lowercase.includes(arr[i])) {
        title.push(this.capitalize(arr[i]))
      } else {
        title.push(arr[i])
      }
    }
    return title.join(' ')
  }
}