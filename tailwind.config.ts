import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const PX_TO_REM = 0.0625;
const generateScale = (scale: number[]) =>
	Object.fromEntries(scale.map((value) => [value, `${value * PX_TO_REM}rem`]));
const generateFontScale = (scale: [number, number][]) =>
	Object.fromEntries(
		scale.map(([fontSize, lineHeight]) => [
			`${fontSize}/${lineHeight}`,
			[`${fontSize * PX_TO_REM}rem`, `${lineHeight * PX_TO_REM}rem`] as [string, string]
		])
	);

const linearSpacingScale = generateScale([
	...Array(101).keys(),
	...[
		0.5, 1.5, 2.5, 3.5, 108, 112, 120, 128, 144, 150, 180, 194, 208, 220, 224, 240, 248, 256, 268,
		272, 300, 320, 342, 350, 384, 442, 480, 560, 656, 816, 1246
	]
]);
const linearBorderWidthScale = generateScale([0, 0.5, 1, 2, 4]);
const linearBorderRadiusScale = generateScale([0, 2, 4, 6, 8, 12, 16, 24, 32, 48, 64]);
const fontScale = generateFontScale([
	[10, 14],
	[14, 18],
	[14, 20],
	[14, 22],
	[14, 32],
	[16, 24],
	[18, 22],
	[18, 28],
	[18, 32],
	[20, 24],
	[20, 28],
	[20, 30],
	[22, 28],
	[24, 36],
	[24, 38],
	[28, 36],
	[28, 38],
	[32, 40],
	[36, 42],
	[40, 56],
	[40, 64],
	[48, 64],
	[54, 64],
	[64, 80]
]);

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		borderRadius: {
			full: '9999px',
			...linearBorderRadiusScale
		},
		extend: {
			borderWidth: linearBorderWidthScale,
			colors: {
				primary: '#FF1E6E'
			},
			fontSize: fontScale,
			height: linearSpacingScale,
			spacing: linearSpacingScale,
			fontFamily: {
				switzer: ['Switzer', ...fontFamily.sans]
			},
			zIndex: {
				0: '0',
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				10: '10'
			}
		}
	},

	plugins: []
} satisfies Config;
