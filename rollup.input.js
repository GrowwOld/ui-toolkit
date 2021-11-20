const fs = require('fs');

const fileTypes = [ '.ts', '.jsx', '.ts', '.tsx' ];


function getModulePaths(path, componentType) {
  const moduleList = fs.readdirSync(path + '/' + componentType);

  const modulePaths = [];

  moduleList.forEach((module) => {
    fileTypes.every((fileType) => {
      const componentPathCandidate = `${path}/${componentType}/${module}/index${fileType}`;

      if (fs.existsSync(componentPathCandidate)) {
        modulePaths.push(componentPathCandidate);
        return false; // break loop
      }

      return true; // continue loop
    });

  });

  return modulePaths;
}


export function getInputFiles() {
  return [
    ...getModulePaths('./src/components', 'atoms'),
    ...getModulePaths('./src/components', 'molecules')
  ];
}
