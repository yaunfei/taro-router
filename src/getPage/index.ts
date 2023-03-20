import { useLoad } from '@tarojs/taro';
import { useState } from 'react';

/**
 *  usePageData
 *  获取传递到当前页面参数
 * @returns
 */
export function usePageData() {
	const [option, setOption] = useState<Record<string, any>>();

	useLoad((option) => {
		setOption(option);
	});

	return option;
}
