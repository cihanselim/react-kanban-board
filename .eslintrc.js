module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	extends: [
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 11,
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	rules: {
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		],
		'object-curly-spacing': ['error', 'always'],
		'no-mixed-spaces-and-tabs': ['off'],
		'no-undef': ['off'],
		'no-tabs': ['off'],
		'no-use-before-define': ['off'],
		'react/jsx-tag-spacing': [
			'error',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'allow'
			}
		],
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line'
			}
		]
	}
};
