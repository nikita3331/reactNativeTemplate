#!/usr/bin/env node
const replace = require('replace-in-file');
const projectPackage = require('./ProjectName/package.json')
const options = {
    files: 'ProjectName/.detoxrc.json',
    from: /ProjectName/g,
    to: projectPackage.name
};
replace(options)
    .then(changedFiles => {
        console.log('Modified files:', changedFiles.join(', '));
    }
)
.catch(error => {
    console.error('Error occurred:', error);
});