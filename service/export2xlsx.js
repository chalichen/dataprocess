var Excel = require('exceljs');

module.exports = function save (计算结果) {
// read from a file
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile("./data/预约挂号上报模版—每日上报模板.xlsx")
        .then(function() {
            console.log("打开文件成功");
            var worksheet = workbook.getWorksheet('预约挂号统计表');
            worksheet.getCell('F12').value = 2008;

            workbook.xlsx.writeFile("./data/aa.xlsx")
                .then(function() {
                    console.log("保存文件 ok!");
                });
        });
}




// pipe from stream
// var workbook = new Excel.Workbook();
// stream.pipe(workbook.xlsx.createInputStream());



// write to a file
// var workbook = createAndFillWorkbook();
// workbook.xlsx.writeFile(filename)
//     .then(function() {
//         // done
//     });

// write to a stream
// workbook.xlsx.write(stream)
//     .then(function() {
//         // done
//     });





//Create a Workbook
// var workbook = new Excel.Workbook();
//
// //Set Workbook Properties
// workbook.creator = 'Me';
// workbook.lastModifiedBy = 'Her';
// workbook.created = new Date(1985, 8, 30);
// workbook.modified = new Date();
// workbook.lastPrinted = new Date(2016, 9, 27);
// // Set workbook dates to 1904 date system
// workbook.properties.date1904 = true;
// // workbook.views = [
// //     {
// //         x: 0, y: 0, width: 10000, height: 20000,
// //         firstSheet: 0, activeTab: 1, visibility: 'visible'
// //     }
// // ]
// var sheet = workbook.addWorksheet('My Sheet');
//
//
// sheet.columns = [
//     { header: 'Id', key: 'id', width: 10 },
//     { header: 'Name', key: 'name', width: 32 },
//     { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
// ];
// workbook.xlsx.writeFile("aa.xlsx")
//     .then(function() {
//        console.log("save ok!");
//     });