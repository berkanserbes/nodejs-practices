module.exports.items = ["item1", "item2"]; // export as items

const person = {
  name: "bob",
};

module.exports.singlePerson = person; // export as singlePerson

console.log(module);
/*
{
    id: '.',
    path: 'C:\\Development\\nodejs\\course-freecodecamp',
    exports: { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } },
    filename: 'C:\\Development\\nodejs\\course-freecodecamp\\info3.js',
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
