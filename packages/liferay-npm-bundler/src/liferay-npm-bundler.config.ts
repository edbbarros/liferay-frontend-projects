/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

/* eslint-disable @typescript-eslint/camelcase */

module.exports = {
	'create-jar': false,
	imports: {
		'frontend-js-components-web': {
			'/': '>=1.0.0',
		},
		'frontend-js-metal-web': {
			'incremental-dom': '>=0.5.1',
			'incremental-dom-string': '>=0.0.3',
			metal: '>=2.16.5',
			'metal-affix': '>=2.0.0',
			'metal-ajax': '>=2.1.1',
			'metal-anim': '>=2.0.0',
			'metal-aop': '>=3.0.0',
			'metal-assertions': '>=2.16.5',
			'metal-clipboard': '>=2.0.0',
			'metal-component': '>=2.16.5',
			'metal-debounce': '>=2.0.0',
			'metal-dom': '>=2.16.5',
			'metal-drag-drop': '>=3.0.1',
			'metal-events': '>=2.16.5',
			'metal-incremental-dom': '>=2.16.5',
			'metal-jsx': '>=2.16.5',
			'metal-key': '>=1.0.0',
			'metal-keyboard-focus': '>=2.0.1',
			'metal-multimap': '>=2.0.0',
			'metal-pagination': '>=2.0.1',
			'metal-path-parser': '>=1.0.3',
			'metal-position': '>=2.1.1',
			'metal-promise': '>=2.0.1',
			'metal-router': '>=3.6.3',
			'metal-scrollspy': '>=2.0.0',
			'metal-soy': '>=2.16.5',
			'metal-soy-bundle': '>=2.16.5',
			'metal-state': '>=2.16.5',
			'metal-storage': '>=1.1.0',
			'metal-structs': '>=1.0.1',
			'metal-throttle': '>=3.0.0',
			'metal-toggler': '>=2.3.0',
			'metal-uri': '>=2.4.0',
			'metal-useragent': '>=3.0.0',
			'metal-web-component': '>=2.16.5',
			querystring: '>=0.2.0',
			'xss-filters': '>=1.2.7',
		},
		'frontend-js-node-shims': {
			assert: '>=1.4.1',
			buffer: '>=5.0.7',
			'console-browserify': '>=1.1.0',
			'domain-browser': '>=1.1.7',
			events: '>=1.1.1',
			'os-browserify': '>=0.3.0',
			'path-browserify': '>=0.0.0',
			process: '>=0.11.10',
			punycode: '>=2.1.0',
			'querystring-es3': '>=0.2.1',
			setimmediate: '>=1.0.5',
			string_decoder: '>=1.0.3',
			'timers-browserify': '>=2.0.4',
			'tty-browserify': '>=0.0.0',
			url: '>=0.11.0',
			util: '>=0.10.3',
			'vm-browserify': '>=0.0.4',
		},
		'frontend-js-react-web': {
			'/': '>=1.0.0',
			classnames: '>=2.2.6',
			formik: '>=1.4.3',
			'prop-types': '>=15.7.2',
			react: '>=16.8.6',
			'react-dnd': '>=7.0.2',
			'react-dnd-html5-backend': '>=7.0.2',
			'react-dom': '>=16.8.6',
		},
		'frontend-js-spa-web': {
			senna: '>=2.6.1',
		},
		'frontend-js-web': {
			'/': '>=1.0.0',
			'liferay-amd-loader': '>=4.1.0',
			'lodash.escape': '>=4.0.1',
			'lodash.groupby': '>=4.6.0',
			'lodash.isequal': '>=4.5.0',
			'lodash.memoize': '>=4.1.2',
			'lodash.unescape': '>=4.0.1',
			svg4everybody: '>=2.1.9',
			uuid: '>=3.3.2',
		},
		'frontend-taglib': {
			'/': '>=1.0.0',
		},
		'frontend-taglib-chart': {
			'clay-charts': '>=2.9.0',
		},
		'frontend-taglib-clay': {
			'@clayui/alert': '>=3.0.0',
			'@clayui/autocomplete': '>=3.0.0',
			'@clayui/badge': '>=3.0.0',
			'@clayui/breadcrumb': '>=3.0.0',
			'@clayui/button': '>=3.0.0',
			'@clayui/card': '>=3.0.0',
			'@clayui/charts': '>=3.0.0',
			'@clayui/color-picker': '>=3.0.0',
			'@clayui/css': '>=3.0.0',
			'@clayui/data-provider': '>=3.0.0',
			'@clayui/date-picker': '>=3.0.0',
			'@clayui/drop-down': '>=3.0.0',
			'@clayui/form': '>=3.0.0',
			'@clayui/icon': '>=3.0.0',
			'@clayui/label': '>=3.0.0',
			'@clayui/link': '>=3.0.0',
			'@clayui/list': '>=3.0.0',
			'@clayui/loading-indicator': '>=3.0.0',
			'@clayui/management-toolbar': '>=3.0.0',
			'@clayui/modal': '>=3.0.0',
			'@clayui/multi-select': '>=3.0.0',
			'@clayui/multi-step-nav': '>=3.0.0',
			'@clayui/nav': '>=3.0.0',
			'@clayui/navigation-bar': '>=3.0.0',
			'@clayui/pagination': '>=3.0.0',
			'@clayui/pagination-bar': '>=3.0.0',
			'@clayui/panel': '>=3.0.0',
			'@clayui/popover': '>=3.0.0',
			'@clayui/progress-bar': '>=3.0.0',
			'@clayui/shared': '>=3.0.0',
			'@clayui/slider': '>=3.0.0',
			'@clayui/sticker': '>=3.0.0',
			'@clayui/table': '>=3.0.0',
			'@clayui/tabs': '>=3.0.0',
			'@clayui/time-picker': '>=3.0.0',
			'@clayui/tooltip': '>=3.0.0',
			clay: '>=2.9.0',
			'clay-alert': '>=2.9.0',
			'clay-autocomplete': '>=2.9.0',
			'clay-badge': '>=2.9.0',
			'clay-button': '>=2.9.0',
			'clay-card': '>=2.9.0',
			'clay-card-grid': '>=2.9.0',
			'clay-checkbox': '>=2.9.0',
			'clay-collapse': '>=2.9.0',
			'clay-component': '>=2.9.0',
			'clay-data-provider': '>=2.9.0',
			'clay-dataset-display': '>=2.9.0',
			'clay-dropdown': '>=2.9.0',
			'clay-icon': '>=2.9.0',
			'clay-label': '>=2.9.0',
			'clay-link': '>=2.9.0',
			'clay-list': '>=2.9.0',
			'clay-loading-indicator': '>=2.9.0',
			'clay-management-toolbar': '>=2.9.0',
			'clay-modal': '>=2.9.0',
			'clay-multi-select': '>=2.9.0',
			'clay-navigation-bar': '>=2.9.0',
			'clay-pagination': '>=2.9.0',
			'clay-pagination-bar': '>=2.9.0',
			'clay-portal': '>=2.9.0',
			'clay-progress-bar': '>=2.9.0',
			'clay-radio': '>=2.9.0',
			'clay-select': '>=2.9.0',
			'clay-sticker': '>=2.9.0',
			'clay-table': '>=2.9.0',
			'clay-tooltip': '>=2.9.0',
		},
	},
	'log-level': 'debug',
	output: 'build/node/packageRunBuild/resources',
	source: 'src/main/resources/META-INF/resources',
	webpack: {
		module: {
			rules: [
				{
					exclude: /node_modules/,
					test: /\.js$/,
					use: ['babel-loader'],
				},
			],
		},
	},
	workdir: 'build/node/bundler',
};
