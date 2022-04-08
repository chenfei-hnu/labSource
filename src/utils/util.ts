/* eslint-disable @typescript-eslint/no-unused-vars */
import { notification } from 'antd';
import moment from 'moment';

/**
 * @desc 验证非空
 * @param { any } val 要验证的值
 * @return { boolean }
 */
export function verVal(val) {
  return val !== '' && typeof val !== 'undefined' && val !== null;
}

/**
 * @desc 验证是否是数组类型且数组长度大于0
 * @param { array } array 要验证的数组
 * @return { boolean }
 */
export function verArr(array) {
  return Array.isArray(array) && array.length > 0;
}

/**
 * @desc 验证是否是对象类型
 * @param { any } obj 要验证的值
 * @return { boolean }
 */
export function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * @desc 延迟执行
 * @param { number } timeout 要延迟的时间（毫秒）
 * @return { Promise }
 */
export const delayFunc = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

/**
 * @desc 函数节流 时间戳版 (在持续触发事件的过程中，函数会立即执行，并且每 n 秒执行一次)
 * @param { function } func 函数
 * @param { number } delay 延迟执行毫秒数
 */
export const throttle = (func, delay) => {
  let previous = 0;
  return function (...args) {
    const now = Date.now();

    if (now - previous > delay) {
      func(...args);
      previous = now;
    }
  };
};

/**
 * @desc 对象赋值方法
 * @param { object } initObj 原始对象
 * @param { string } name 要赋的值--名字
 * @param { string } value 要赋的值
 * @return { object } 操作后的值
 */
export const setObjVal = (initObj, name, value) => {
  return {
    ...initObj,
    [name]: value,
  };
};

/**
 * @desc 参数处理方法
 * @param { object } json 要处理的参数
 */
export const jsonString = (json = {}) => {
  if (isObj(json)) {
    for (const key in json) {
      if (verArr(json[key])) {
        json[key].forEach((item: any) => {
          switch (item) {
            case moment(item, 'YYYY-MM-DD').isValid():
              const arr: any = [];
              arr.push(moment(item).format('YYYY-MM-DD HH:mm'));
              json[key] = arr;
              break;
            case typeof item === 'object':
              jsonString(item);
              break;
            case verVal(item):
              json[key] = json[key].toString();
              break;
            default:
          }
        });
      } else {
        if (verVal(json[key]) && (key.indexOf('Date') > -1 || key.indexOf('Time') > -1)) {
          json[key] = moment(json[key]).format('YYYY-MM-DD HH:mm');
        }
      }
    }
  }
};

/**
 * @desc notification
 * @param { string } type 图标类型
 * @param { string } message 标题
 * @param { string } description 内容
 */
export const openNotificationWithIcon = (type: string, message: string, description: string) => {
  notification[type]({
    message,
    description,
  });
};
