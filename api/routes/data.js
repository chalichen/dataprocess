// var express = require('express');
// var router = express.Router();
import Path from "path";
import { stringify } from 'qs';
import app from '../../config/ExpressConfig';
// import fs from "fs";
var soap = require('soap');

// var getReportSummary = require('../../service/callWebservice')
var fs = require('fs')
var Excel = require('exceljs');



var options = {
    root: __dirname + '../../public/data/',
    // dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var xls_col_report = {
    // "ReportSummaryWS_Columns": 
    //   {
        
        "DEPTNAME": "B",
        "TIME":"C",
        
        "KPTJZZS": "F",
        "KPTYYZS": "G",
        "KZJJJZS": "H",
        "KZJYYZS": "I",
        
        "JZCZ": "K",
        "JZFZ": "L",
        "JZCYFZ":"M",
        
        "YHYPT":"P",
        "YHYZJ": "Q",
        "YCKYY": "R",
        "YDHYY": "S",
        "YWLYY": "T",
        
        "YLCZYY":"V",
        "YLFZYY": "W",
        "YLCYFZYY": "X",
        "YYSYHS": "Z",
        
        
    //   }  
  };
//   var xls_row_report =  {
//     // "ReportSummaryWS_Rows": 
//     //   {
//         "12": "NZ_01",
//         "13": "NZ_02",
//         "14": "102_01",
//         "15": "102_02",
//         "22": "10512_01",
//         "23": "10512_02",
//         "24": "10511_01",
//         "25": "10511_02",
//         "26": "106_01",
//         "27": "106_02",
//         "28": "107_01",
//         "29": "107_02",
//         "48": "103_01",
//         "49": "103_02"   
//     //   }  
//   };
  var xls_row_upload =  {
    // "ReportSummaryWS_Rows": 
    //   {
         "NZ_01":"12",
         "NZ_02":"13",
         "102_01":"14",
         "102_02":"15",
         "10512_01":"22",
         "10512_02":"23",
         "10511_01":"24",
         "10511_02":"25",
         "106_01":"26",
         "106_02":"27",
         "107_01":"28",
         "107_02":"29",
         "103_01":"48",
         "103_02":"49"   
    //   }  
  };
  var dept_dict ={
    "101"	:"内科",
    
    "102"	:"外科",
   
    "103"	:"中医科",
   
    "10511"	:"耳鼻喉科门诊",
    
    "10512"	:"眼科门诊",
    
    "106"	:"口腔科",
    
    "107"	:"皮科",
    
    "108"	:"血液病中心",
    
    "110"	:"心脏中心",
    
    "140"	:"特需门诊",
    
    "204"	:"神经科",
    
    "205"	:"康复科"
    
  };
  
  
//   外科
//   中医科
//   "耳鼻喉科门诊"
//   "眼科门诊"
//   口腔科
//   皮科
//   "血液病中心"
//   "神经康复中心"
//   "心脏中心"
//   "内科汇总"
  
  

  var xls_row_report =  {
    // "ReportSummaryWS_Rows": 
    //   {
         "ALL_01":1,
         "ALL_02":2,
         "140_101_01":3,
         "140_101_02":4,
         "102_01":5,
         "102_02":6,
         "103_01":7,
         "103_02":8,  
         "10511_01":9,
         "10511_02":10,
         "10512_01":11,
         "10512_02":12,     
         "106_01":13,
         "106_02":14,
         "107_01":15,
         "107_02":16,
         "108_01":17,
         "108_02":18,
         "204_205_01":19,
         "204_205_02":20,
         
         "110_01":21,
         "110_02":22,
         "NZ_01":23,
         "NZ_02":24
    //   }  
  };
  
export const getfile = (req, res) => {
   
    
    // if(app.locals.dataSource == null)
    // {
    //     res.send("请先查询数据");
    //     return;
    // }
    // var dataSource = app.locals.dataSource;
    // console.log(dataSource);

    var workbook = new Excel.Workbook();
    
    workbook.xlsx.readFile(Path.join(__dirname, '../../public/data', '预约挂号上报模版—每日上报模板.xlsx'))
        .then(function() {
            // 
            
                       // workbook.views = [
            //     {
            //     //   x: 0, y: 0, width: 10000, height: 20000,
            //       firstSheet: 0, activeTab: 1, visibility: 'visible'
            //     }
            //   ]
            // var worksheet = workbook.getWorksheet('预约挂号统计表');
            // for(var i = 0;i<dataSource.length;i++){

            //     if(dataSource[i].xls_row_up != null)
            //     {
            //         var row = dataSource[i].xls_row_up;
                    
            //         // $.each(xls_col_report,function(key,value)
            //         for(var dict in xls_col_report){ 

            //             // console.log("xls_col_report:" + dict);
            //             var cell = xls_col_report[dict] + row;

            //             worksheet.getCell(cell).value = dataSource[i][dict];
                       
            //         } 
                    
            //     }
                
            // }


            //var Sumsheet = workbook.getWorksheet('上报表');
            
            // Sumsheet.getCell("C5").value =100; 
            
            // var row = Sumsheet.getRow(8);
            // row.getCell(10).value = 100;

            // for(var i = 0;i<dataSource.length;i++){

                // if((dataSource[i].index != null)&&(dataSource[i].index != 0))
                // {
                //     var row = Sumsheet.getRow(dataSource[i].index + 4);
                //     console.log("row："+ dataSource[i].index + 4);
                //     // console.log("row："+ row);
                //     //var row = dataSource[i].index + 4;
                //     var x = 3;
                //     for(var dict in dataSource[i]){ 
                //     //for(var j=0;j< 22;j++){ 
                //         // var col = String.fromCharCode(67 + x);
                //         // var cell = String(col) + row;
                //         console.log("col:" + x);
                //         console.log(dataSource[i][dict]);
                //         // Sumsheet.getCell(cell).value = dataSource[i][dict];
                //         row.getCell(x).value = dataSource[i][dict];
                //         x++;
                //     }
                // }
                
            // }


            workbook.xlsx.writeFile(Path.join(__dirname, '../../public/data', '预约挂号上报数据.xlsx'))
                .then(function() {
                    res.download(Path.join(__dirname, '../../public/data', '预约挂号上报数据.xlsx'),"预约挂号上报数据.xlsx");
                    console.log("保存文件 ok!");
                });
        });








    // res.sendfile('预约挂号上报模版—每日上报模板.xlsx',options);
    // res.sendfile(Path.join(__dirname, '../../public/data', '预约挂号上报模版—每日上报模板.xlsx'));
    // res.download(Path.join(__dirname, '../../public/data', '预约挂号上报模版—每日上报模板.xlsx'),"预约挂号上报模版.xlsx");
    //res.send(y);
}
function callGetJsonReportSummary(query)
{
    console.log("调用webservice!");
    //var args = {minRQ: "2015-11-11",maxRQ:"2017-12-11"};

    const url = 'http://192.169.9.46:8080/ReportSummaryService.asmx?wsdl';
    
    soap.createClient(url, function(err, client) {
      if(err)
      { 
        throw error;
      }
      
      client.GetJsonReportSummary(query, function(err, ws_result) {
        if(err)
        {
            res.send("调用webservice失败");
        }
        var jsonobj = ws_result["GetJsonReportSummaryResult"]; 
        //console.log(jsonobj);
        var obj = JSON.parse(jsonobj);
        var dataSource = obj.ReportSummaryWS;
        for(var i = 0;i<dataSource.length;i++)
        {
            if(dataSource[i].BC == '01')
            {
                dataSource[i].TIME = '上午';
            }
            else
            {
                dataSource[i].TIME = '下午';
            }
            // if(xls_col_report[dataSource[i].DEPTCODE] !=null)
            // {
            //     dataSource[i].xls_col = xls_col_report[dataSource[i].DEPTCODE];
            // }
            // else
            // {
            //     dataSource[i].xls_col = 0;
            // }
            var combCode = dataSource[i].DEPTCODE + '_' + dataSource[i].BC;

            if(xls_row_report[combCode] != null)
                dataSource[i].index =  xls_row_report[combCode];
            else
                dataSource[i].index = 0;
            var  row_x =xls_row_upload[combCode] ;
            if(row_x!= null)
            {
                dataSource[i].xls_row_up = row_x;
            }
            
           
        } 
        return dataSource;
        });
    });
}

export const GetJsonReportSummary = (req, res) => {
    console.log("调用webservice!");
    //var args = {minRQ: "2015-11-11",maxRQ:"2017-12-11"};

    const url = 'http://192.169.9.46:8080/ReportSummaryService.asmx?wsdl';
    
    soap.createClient(url, function(err, client) {
      if(err)
      { 
        throw error;
      }
      
      client.GetJsonReportSummary(req.query, function(err, ws_result) {
        if(err)
        {
            res.send("调用webservice失败");
        }
        var jsonobj = ws_result["GetJsonReportSummaryResult"]; 
        //console.log(jsonobj);
        var obj = JSON.parse(jsonobj);
        var dataSource = obj.ReportSummaryWS;
        for(var i = 0;i<dataSource.length;i++)
        {
            if(dataSource[i].BC == '01')
            {
                dataSource[i].TIME = '上午';
            }
            else
            {
                dataSource[i].TIME = '下午';
            }
            // if(xls_col_report[dataSource[i].DEPTCODE] !=null)
            // {
            //     dataSource[i].xls_col = xls_col_report[dataSource[i].DEPTCODE];
            // }
            // else
            // {
            //     dataSource[i].xls_col = 0;
            // }
            var combCode = dataSource[i].DEPTCODE + '_' + dataSource[i].BC;

            if(xls_row_report[combCode] != null)
                dataSource[i].index =  xls_row_report[combCode];
            else
                dataSource[i].index = 0;
            var  row_x =xls_row_upload[combCode] ;
            if(row_x!= null)
            {
                dataSource[i].xls_row_up = row_x;
            }
            
           
        }
         console.log(dataSource);

         const result = {
            list: dataSource,
            pagination: {
              total: dataSource.length,
              pageSize:dataSource.length,
              current:  1,
            },
          };
        app.locals.dataSource = dataSource;
        res.json(result);
      });
    });
    
}



// export const GetYYGHToJson = (req, res) => {
//     const url = 'http://192.169.9.46:8080/ReportSummaryService.asmx?wsdl';
//     soap.createClient(url, function (err, client) {
//         if (err) {
//             throw error;
//         }
//         client.GetYYGHToJson(args, function (err, result) {
//             // console.log(result);
//             res.send(result);
//             // return result;
//         });
//     });
// };




// router.get('/file', function(req, res, next) {
//     console.log("取数据!");
//     var y = fs.readFileSync('../public/data/data1.json','utf-8');
//     res.send(y);
// });

// router.get('/ws', function(req, res, next) {
//     console.log("取数据!");
//     var args1 = {minRQ: "2015-11-11",maxRQ:"2017-12-11"};
//     a = getReportSummary(args1);
//     console.log(a);
//      var Jobj = JSON.parse(a);
//     var y = fs.readFileSync('../public/data/data1.json','utf-8');
//     res.send(y);
// });


// router.get('/', function(req, res, next) {
//     console.log("取数据!");
// 	//logger.info("This is an index page! -- log4js");

    
//     var y = fs.readFileSync(Path.join(__dirname, '../public/data', 'data1.json'),'utf-8');
//     console.log(y);
//     console.log("取数据成功!");
//     var Jobj = JSON.parse(y);
//     res.send(Jobj);

    
//     //  fs.writeFileSync('../data.json',JSON.stringify(Jobj));


// //     x = JSON.stringify(a);
// //     console.log(x);
//     // fs.writeFileSync('./data.json',JSON.stringify(a));

   
//     // var y = fs.readFileSync('./data1.json','utf-8');
//     // console.log(y);
//     // var Jobj = JSON.parse(y);
//     // fs.writeFileSync('../data.json',JSON.stringify(Jobj));


//     // logger.info(a);
// //   console.log(a)
//     res.send(y);
//     // res.send("test data ok");
// //   res.render('index', { title: a });
// });
// module.exports = router;
