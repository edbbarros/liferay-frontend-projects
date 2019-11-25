/**
 * © 2017 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: MIT
 */

function devDependencies(version) {
	const dependencies = {
		gulp: '3.9.1',
		'liferay-theme-tasks': '8.1.2',
	};

	if (version === '7.0') {
		dependencies['liferay-theme-deps-7.0'] = '8.1.2';
	} else if (version === '7.1') {
		dependencies['liferay-theme-deps-7.1'] = '8.1.2';
	}

	return dependencies;
}

module.exports = {
	devDependencies,
};
