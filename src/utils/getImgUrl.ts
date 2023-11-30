/**
 * 处理图片路径
 * @description 返回解析后的静态资源路径
 * @function
 * @param name
 * @return string 解析后的静态资源路径
 * @author brook
 * @version 1.0.0
 * */
function getImgUrl(name: string):string {
return new URL(`@/assets/${name}`, import.meta.url).href
}
export default getImgUrl