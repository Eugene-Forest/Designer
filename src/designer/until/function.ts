/**
 * 函数防抖
 * @param func 需要防抖的函数
 * @param wait 防抖时间(ms)
 * @param immediate 是否立刻执行
 * @returns
 */
const debounceFunc = (func = (...args) => { }, wait, immediate = false) => {
    let timer = null;
    return (...args) => {
        immediate && !timer && func(...args);
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
            timer = null;
        }, wait, ...args);
    };
};
