import Site from '$lib/config/common';
import type { LayoutServerLoad } from './$types';
import { measurePerformance } from '$lib/utils/performance';

export const load: LayoutServerLoad = async () => {
	const { abacus } = Site;
	if (!abacus.enabled || !abacus.instance || !abacus.namespace || !abacus.key) {
		return {
			footerData: {
				value: '∞'
			}
		};
	}

	let footerData;
	try {
		footerData = await measurePerformance('abacus-api-fetch', async () => {
			const response = await fetch(`${abacus.instance}/hit/${abacus.namespace}/${abacus.key}`, {
				signal: AbortSignal.timeout(600)
			});
			return response.json();
		});
		footerData.value = footerData.value.toLocaleString();
	} catch (error) {
		console.error('Error fetching footer data:', error);
		return {
			footerData: {
				value: '∞'
			}
		};
	}
	return { footerData };
};
