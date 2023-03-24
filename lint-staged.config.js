/*
 * @Author: Gauche楽
 * @Date: 2023-03-25 02:36:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-25 02:36:44
 * @FilePath: /vite-project/lint-staged.config.js
 */
module.exports = {
	"*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
	"{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": ["prettier --write--parser json"],
	"package.json": ["prettier --write"],
	"*.{scss,less,styl}": ["stylelint --fix", "prettier --write"],
	"*.md": ["prettier --write"]
};
