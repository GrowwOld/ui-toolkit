const fs = require('fs');

const fileTypes = [ '.js', '.ts', '.jsx', '.ts', '.tsx' ];

/*
  getModulePath generates an array of paths to components present in the atom or molecule
  for e.g. by calling getModulePaths('./src/components','molecules') the function will generate the following array:
  [
    './src/components/molecules/Carousel/index.jsx',
    './src/components/molecules/CheckBoxGroup/index.ts',
    './src/components/molecules/RadioButtonGroup/index.ts',
  ]
 */

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
    './src/index.ts',
    ...getModulePaths('./src/components', 'atoms'),
    ...getModulePaths('./src/components', 'molecules')
  ];
}
