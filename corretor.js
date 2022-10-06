const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: "Users.csv",
    header: [
        { id: 'id', title: 'id' },
        { id: 'name', title: 'name' },
        { id: 'senha', title: 'senha' }
    ],
});
const userJsonData = [{
    id: 1,
    name: 'Ana K',
    senha: 123456
}, {
    id: 2,
    name: 'Shara',
    senha: 654321
}];

csvWriter
    .writeRecords(userJsonData)
    .then(() => {
        console.log('Done!');
    });