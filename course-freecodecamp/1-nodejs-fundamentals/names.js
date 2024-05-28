const SECRET = "SUPER SECRET";

const john = "john";
const peter = "peter";

module.exports = { john, peter };

console.log(module);
/*
{
    id: '.',
    path: 'C:\\Development\\nodejs\\course-freecodecamp',
    exports: { john: 'john', peter: 'peter' },
    filename: 'C:\\Development\\nodejs\\course-freecodecamp\\names.js',
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
