import { $fetch } from '@/src/app/api';

export interface ICategoriesResponse {
	statusCode: number;
	message: string;
	data: {
		categories: TCategory[];
	};
}

export type TCategory = {
	category_id: number;
	category_name: string;
	category_key: string;
};

export async function getCategoriesByLangCode(
	langCode: string
): Promise<ICategoriesResponse | undefined> {
	const response = await $fetch(
		`categories/category-translations?langCode=${langCode}`
	);
	if (!response.ok) return undefined;
	return await response.json();
}
