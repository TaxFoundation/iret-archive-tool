# IRET Archive Tool

This project allows users to search the archives from iret.org. The [JSON file](https://github.com/TaxFoundation/iret-archive-tool/blob/master/src/iret.json) of titles and metadata is uploaded to [this Algolia index](https://www.algolia.com/apps/F69DU4TWEG/explorer/browse/iret?searchMode=search) to create a searchable database.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Update Algolia Search Index  

When new documents are uploaded, they must be indexed on the Algolia search admin dashboard. 

### Convert .csv to valid .json

Convert the provided .csv with document meta data into a json array and trim empty strings from authors, categories, and tags. For a larger update, it may be worth writing a script to do this automatically. 

### upload metadata 

[Go to Algolia Search Panel](https://www.algolia.com/apps/F69DU4TWEG/explorer/browse/iret?searchMode=search) and click the 'Upload file' button under the 'Add records' dropdown select. Upload the trimmed json file. This will add all new documents to the index. Afterwards, append the new documents metadata to iret.json in the src directory of the repository. Convert the newly appened iret.json to a csv and replace iret.csv with the new file. These files serve as a backup of the data indexed in Algolia.

### note on file extensions

The file extension of all documents added to the archives must be ".PDF", case sensitive, in all caps. The use of ".pdf" or any other variant will result in a server error due to unix based systems, such as the linux server, having case sensitive file extensions. 
