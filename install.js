const fs = require('fs')

module.exports = ({ project }) => {
  const templateName = 'graphql-boilerplate'
  replaceInFile('package.json', templateName, project)
  replaceInFile('graphcool.yml', templateName, project)
  replaceInFile('.env', templateName, project)

  console.log(`\
Next steps:

  1. Deploy database service: \`gc-db deploy\`
  2. Start local server: \`yarn start\`
  `)
}

function replaceInFile(filePath, searchValue, replaceValue) {
  const contents = fs.readFileSync(filePath, 'utf8')
  const newContents = contents.replace(searchValue, replaceValue)
  fs.writeFileSync(filePath, newContents)
}
