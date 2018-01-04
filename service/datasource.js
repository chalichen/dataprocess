interface RootObject {
  GetYYGHToJsonResult: GetYYGHToJsonResult;
}

interface GetYYGHToJsonResult {
  DTFDRYY: DTFDRYY[];
  DTHYZS: DTHYZ[];
  DTDRYSJH: DTDRYSJH[];
  DTDRYYS: DTDRYY[];
  DTCYFZYY: DTCYFZYY[];
}

interface DTCYFZYY {
  '科室代码': string;
  '科室名称': string;
  '班次': string;
  '需要出院复诊预约'?: number;
  '出院复诊预约'?: number;
}

interface DTDRYY {
  '科室代码': string;
  '科室名称': string;
  '班次': string;
  '当日自助机普通人次'?: number;
  '当日自助机专家人次'?: number;
  '当日自费APP普通人次'?: number;
  '当日自费APP专家人次'?: number;
  '当日医保APP普通人次'?: number;
  '当日医保APP专家人次'?: number;
  '当日窗口普通人次'?: number;
  '当日窗口专家人次'?: number;
}

interface DTDRYSJH {
  '科室': string;
  '班次': string;
  '当日医生预约总数'?: number;
  '当日医生预约普通总数'?: number;
  '当日医生预约专家总数'?: number;
}

interface DTHYZ {
  '科室代码': string;
  '班次': string;
  '挂号总数'?: number;
  '普通挂号总数'?: number;
  '专家挂号总数'?: number;
  '非当日预约总数'?: number;
  '非当日预约普通总数'?: number;
  '非当日预约专家总数'?: number;
  '非当日失约数'?: number;
}

interface DTFDRYY {
  '科室代码': string;
  '科室名称': string;
  '班次': string;
  '普通号'?: number;
  '专家号'?: number;
  '窗口预约'?: number;
  '电话预约'?: number;
  '网络预约'?: any;
  '其他预约'?: number;
}