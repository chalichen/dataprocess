import { stringify } from 'qs';
import request from '../utils/request';
import download from '../utils/download';


export async function RegisterSum(params) {
  var result = request(`/api/GetJsonReportSummary?${stringify(params)}`);
  
  
  return result;
}

export async function DownloadXLS(params) {  
  return download(`/api/getfile`);
}
