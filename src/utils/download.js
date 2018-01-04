import fetch from 'dva/fetch';
import { notification } from 'antd';



function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    notification.error({
      message: `请求错误 ${response.status}: ${response.url}`,
      description: response.statusText,
    });
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
/** */
export default function download1(url, options) {
  // fake server request, getting the file url as response
  setTimeout(() => {
    const response = {
      file: url,
    };
    // server sent the url to the file!
    // now, let's download:
    window.open(response.file);
    // you could also do:
    // window.location.href = response.file;
  }, 100);
}


// export  default function download(url, options) {
//     console.log(url);
//     const defaultOptions = {
//       credentials: 'include',
//       headers : {
//         'Content-Type': 'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;',
//         ...options
//       }
//     };
//     // const newOptions = { ...defaultOptions, ...options };
  
//     // if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
//     //   newOptions.headers = {
//     //     Accept: 'application/json',
//     //     'Content-Type': 'application/json; charset=utf-8',
//     //     ...newOptions.headers,
//     //   };
//     //   newOptions.body = JSON.stringify(newOptions.body);
//     // }
//   // console.log(newOptions);
//     return fetch(url, defaultOptions)
//       .then(checkStatus)
//       // .then(response => response.json())
//       .catch((error) => {
//         if (error.code) {
//           notification.error({
//             message: error.name,
//             description: error.message,
//           });
//         }
//         if ('stack' in error && 'message' in error) {
//           notification.error({
//             message: `请求错误: ${url}`,
//             description: error.message,
//           });
//         }
//         return error;
//       });
//   }