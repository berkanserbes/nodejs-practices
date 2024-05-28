const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

module.exports = sayHi;

console.log(module);
/*
{
  id: '.',
  path: 'C:\\Development\\nodejs\\course-freecodecamp',
  exports: [Function: sayHi],
  filename: 'C:\\Development\\nodejs\\course-freecodecamp\\sayhi.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Development\\nodejs\\course-freecodecamp\\node_modules',
    'C:\\Development\\nodejs\\node_modules',
    'C:\\Development\\node_modules',
    'C:\\node_modules'
  ]
}
*/
