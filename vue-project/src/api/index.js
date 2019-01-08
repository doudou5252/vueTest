/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = '/api'

export const activity = (limit,dd) => ajax(BASE_URL+'/GoXhyh/LuckNearestList', {limit,dd}, 'POST')
/**
 *第一个请求
 */
export const firstRequest = (lesson_id) => ajax(BASE_URL + '/index.php?s=/Api/Lesson/LessonBuyUsers.html',{lesson_id},'POST')

/**
 * 获取商家评价数组
 */
export const secondRequest = (lesson_id) => ajax(BASE_URL + '/index.php?s=/Api/Lesson/LessonInfo.html',{lesson_id},'POST')

/**
 * 获取商家商品数组
 */
export const thirdRequest = (lesson_id) => ajax(BASE_URL + '/index.php?s=/Api/Lesson/KeshiInfo.html',{lesson_id},'POST')


