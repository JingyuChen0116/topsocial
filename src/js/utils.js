import axios from "axios";
import path from "path-browserify";
import { control } from "/data/db.json"

export function isNumber(element) {
  return element === +element
}

export function isFalsy(element) {
  return (element !== 0 && !!element == false)
}

export function getHttpHeader() {
  // const mode = getWebSiteRunningMode()
  if ( getWebSiteRunningMode() === "development" || getWebSiteRunningMode() === "dev") {
    return 'http://'
  }
  return 'https://'
}

export function getWebSiteRunningMode() {
  return import.meta.env.MODE
}

// 获取数据库地址
export function getPath(...info) {
  const dbPath = import.meta.env.VITE_DB_PATH
  return getHttpHeader() + path.join(dbPath, ...info)
}

// 获取带有ID的数据库地址
export function getPathWithID(id, ...info) {
  return isNumber(id) ? getPath(...info, id) : getPath(...info)
}

// 获取数据库信息
export async function getInfo(path) {
  try {
    return await axios.get(path)
  } catch (error) {
    console.log(error)
  }
}

export function log(...props) {
  control.show_log ? console.log(...props): null;
  /* equivalent to:
  if (control.show_log) {
    console.log(...props)
  }
  */
}

// 创造dom节点
export const createDom = (domName = 'div') => {
  return document.createElement(domName)
}
