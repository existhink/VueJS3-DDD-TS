import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please provide a module name.');
} else {
  const moduleName = args[0];
  const camelCaseModuleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  const modulePath = path.join('src', 'modules', moduleName);

  try {
    fs.mkdirSync(modulePath, { recursive: true });
    const listFolderNames = ['components', 'constants', 'interfaces', 'routes', 'services', 'store', 'views'];

    // Create seperates folders and files
    listFolderNames.forEach(folderName => {
      fs.mkdirSync(path.join(modulePath, folderName));

      switch (folderName) {
        case 'components':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, '.gitkeep'), 'w'));
          break;
        case 'constants':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `index.ts`), 'w'));
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${moduleName}.constant.ts`), 'w'));
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${moduleName}Api.constant.ts`), 'w'));
          break;
        case 'routes':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${moduleName}.route.ts`), 'w'));
          break;
        case 'services':
          fs.closeSync(
            fs.openSync(path.join(modulePath, folderName, `use${camelCaseModuleName}.service.ts`), 'w'),
          );
          break;
        case 'views':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${camelCaseModuleName}UI.vue`), 'w'));
          break;
        default:
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, 'index.ts'), 'w'));
          break;
      }
    });

    console.log(`Module "${moduleName}" directory structure created successfully. Let's check it out!`);
  } catch (err) {
    console.error(`Error creating module "${moduleName}": ${err}`);
  }
}
