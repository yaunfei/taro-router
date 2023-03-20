import Taro from '@tarojs/taro';

/**
 * eventChannel 页面间事件通信通道，触发事件
 * @param name
 * @param data
 */
export function emitCurrentPageData(name: string, data: {}) {
	if (!name) return;
	const pages = Taro.getCurrentPages();
	const current = pages[pages.length - 1];
	const eventChannel = current.getOpenerEventChannel();
	eventChannel.emit(name, data);
}
