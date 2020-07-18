const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const writeFileAsync = util.promisify(fs.writeFile);


async function generateReadMe() {
   try{
       
        const {
            Title,Description, TableofContents,Installation,Usage,License,Contributing,Tests,Feedback,RelatedProjects,BundledExtensions,CodeofConduct,
        } = await inquirer.prompt([{
            message: 'What is the title of your Project?',
            name: 'Title',
        }, {
            message: 'Give a Description of the Project',
            name: 'Description',
        }, {
            message: 'List out Table of Contents of the Project',
            name: 'Table Of Contents',
        }, {
            message: 'What Installation did you do for the Project',
            name: 'Installation',
        }, {
            message: 'What is the Usage of the Project',
            name: 'Usage',
        }, {
            message: 'What License(s) did you use for the Project',
            name: 'License(s)',
        }, {
            message: 'Who Contributed to the Project',
            name: 'Contributing',
        }, {
            message: 'What Tests were run on the Project',
            name: 'Tests',
        }, {
            message: 'What and how can Feedback be made on the Project?',
            name: 'Feedback',
        }, {
            message: 'What are the related Projects to the Project',
            name: 'RelatedProjects',
        }, {
            message: 'What are the Bundled Extensions on the Project?',
            name: 'BundledExtensions',
        }, {
            message: 'What is the Code of Conduct on the Project',
            name: 'CodeofConduct',
            }
        ])
        const md = generateMD(Title,Description, TableofContents,Installation,Usage,License,Contributing,Tests,Feedback,RelatedProjects,BundledExtensions,CodeofConduct)
        await writeFileAsync('.index.md',md);
        console.log('CHECK FILE');  
   }catch (error) {
        throw error;
        
   }

}

function generateMD(...args) {
    const[
        Title,
        TableOfContents,
        Description,
        Installation,
        Usage,
        License,
        Contributing,
        Tests,
        Feedback,
        RelatedProjects,
        BundledExtensions,
        CodeofConduct,
    ] = args;
    const md = `
        # ${Title}

## ${TableOfContents}
        *[Description](#Description)
        *[Installation](#Installation)
        *[Usage](#Usage)
        *[License](#License)
        *[Contributing](#Contributing)
        *[Tests](#Tests)
        *[Feedback](#Feedback)
        *[RelatedProjects](#RelatedProjects)
        *[BundledExtensions](#BundledExtensions)
        *[CodeofConduct](#CodeofConduct)

## ${Description}

## ${Installation}

## ${Usage}

## ${License}

## ${Contributing}

## ${Tests}



## ${Feedback}


## ${RelatedProjects}

## ${BundledExtensions}

## ${CodeofConduct}`;
    return md;
}
generateReadMe();


