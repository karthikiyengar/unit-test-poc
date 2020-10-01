"use strict";
const fs = require('fs')

module.exports = {
  process(fileContent, filename ) {
    const replaced = filename.replace('.web.spec', '.ext.spec');
    if (fs.existsSync(replaced)) {
        return `test.skip('skipping web test for ${filename}', () => {})`
    }
    return fileContent
  },
};