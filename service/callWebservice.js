// import soap from 'soap';
// require.ensure([], function(require){
//   var list = require('soap');
// });
var soap = require('soap');

// var args = { minRQ: '2015-1-1',maxRQ:'2017-12-1'};
 function GetYYGHToJson(args) {
  const url = 'http://192.169.9.46:8080/ReportSummaryService.asmx?wsdl';
  soap.createClient(url, function(err, client) {
    if(err)
    {
      throw error;
    }
    client.GetYYGHToJson(args, function(err, result) {
      // console.log(result);
      return result;
    });
  });
}

function getReportSummary(args) {
  const url = 'http://192.169.9.46:8080/ReportSummaryService.asmx?wsdl';

  soap.createClient(url, function(err, client) {
    if(err)
    {
      throw error;
    }
    client.GetJsonReportSummary(args, function(err, result) {
      
      var jsonobj = result["GetJsonReportSummaryResult"]; 
      // console.log(jsonobj);
      return jsonobj;
    });
  });
}

module.exports=getReportSummary;
