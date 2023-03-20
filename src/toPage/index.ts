import Taro from '@tarojs/taro';
import { formatPath } from '../util';
import { emitCurrentPageData } from '../util/emitCurrentPageData';
/**
 * navigateToPage
 * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
 * 使用 Taro.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
 * @param pathname // 路由地址
 * @param options // 参数对象
 * @param events // 接收上个页面的emit 事件
 */
export function navigateToPage(
	pathname: string,
	options?: object,
	events?: object
) {
	if (!pathname) return;
	const url = formatPath(pathname, options);
	Taro.navigateTo({ url, events });
}

/**
 * redirectToPage
 * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
 * @param pathname // 路由地址
 * @param options // 参数对象
 */
export function redirectToPage(pathname: string, options?: object) {
	if (!pathname) return;
	const url = formatPath(pathname, options);
	Taro.redirectTo({ url });
}

/**
 * reLaunchPage
 * 关闭所有页面，打开到应用内的某个页面
 * @param pathname // 路由地址
 * @param options // 参数对象
 */
export function reLaunchPage(pathname: string, options?: object) {
	if (!pathname) return;
	const url = formatPath(pathname, options);
	Taro.reLaunch({ url });
}

/**
 * switchTabPage
 * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
 * @param pathname // 路由地址
 */
export function switchTabPage(pathname: string) {
	if (!pathname) return;
	const url = pathname;
	Taro.redirectTo({ url });
}

/**
 * navigateBackPage
 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
 * @param delta // 路由地址
 * @param name // 页面事件监听，唯一标识
 * @param data // 返回传递参数
 */
export function navigateBackPage(delta?: number, name?: string, data?: object) {
    if(data && name) {
        emitCurrentPageData(name, data);
    }
	if (!delta) {
		Taro.navigateBack();
        return;
	}
	Taro.navigateBack({
		delta,
	});
}
