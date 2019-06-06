const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

/**
 *
 * @param {string} dir
 * @returns {Array}
 */
const getFiles = dir => {
  const files = fs.readdirSync(dir)
  let filelist = []

  files.forEach(file => {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = getFiles(dir + file + '/', filelist)
    } else {
      const markdownFile = fs.readFileSync(`content/work/${file}`, 'utf-8')
      const fileContents = parseMarkdown(markdownFile)
      const date = fileContents.date
      const slug = file
        .split('.')
        .slice(0, -1)
        .join('.')

      const obj = { date, slug }

      filelist.push(obj)
    }
  })
  return filelist
}

/**
 * Write blogs json file
 */
const writeBlogs = async () => {
  // Get the aray from files
  const fileArray = await getFiles('content/work/')
  // Order array by date (default asc)
  const sortedArray = await fileArray.sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
  })
  // Reverse array and write to JSON
  const reversedArray = await sortedArray.reverse()
  const jsonContent = await JSON.stringify(reversedArray)

  fs.writeFile('content/works.json', jsonContent, err => {
    if (err) throw new Error(err)
  })
}


/**
 *
 * @param {string} dir
 * @returns {Array}
 */
const getPages = dir => {
  const files = fs.readdirSync(dir)
  let filelist = []

  files.forEach(file => {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = getFiles(dir + file + '/', filelist)
    } else {
      const markdownFile = fs.readFileSync(`content/page/${file}`, 'utf-8')
      const fileContents = parseMarkdown(markdownFile)
      const date = fileContents.date
      const title = fileContents.title
      const slug = file
        .split('.')
        .slice(0, -1)
        .join('.')

      const obj = { date, slug, title }

      filelist.push(obj)
    }
  })
  return filelist
}

/**
 * Write blogs json file
 */
const writePages = async () => {
  // Get the aray from files
  const fileArray = await getPages('content/page/')
  // Order array by date (default asc)
  const sortedArray = await fileArray.sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
  })
  // Reverse array and write to JSON
  const reversedArray = await sortedArray.reverse()
  const jsonContent = await JSON.stringify(reversedArray)

  fs.writeFile('content/pages.json', jsonContent, err => {
    if (err) throw new Error(err)
  })
}

writePages()

writeBlogs()
