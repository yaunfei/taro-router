/**
 * 拼接请求链接
 * @param pathname 路由地址
 * @param options 参数
 * @returns url
 */
export function formatPath(pathname: string, options?: object) {
	const searchArr: Array<string> = [];

	for (const key in options) {
		searchArr.push(`${key}=${options[key]}`);
	}
	const searchStr = searchArr.join('&');
    return `${pathname}?${searchStr}`;
}
