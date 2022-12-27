# コーディング研修

## 開発環境
Node: v16.17.0
npm: v6.14.17

## プロジェクトのセットアップ
依存モジュールのインストール
```
npm install
```
## 立ち上げ（開発時）
```
npm run start
```
## 立ち上げ（ビルド時）
```
npm run build
```
## ディレクトリ
```
.
├── README.md
├── src
│    ├── index.html
│    ├── img
│    ├── js
│    └── css
├── .babelrc
├── .git
├── .gitignore
├── package-lock.json
├── package.json
└── webpack.config.mjs
```
|ディレクトリもしくはファイル名|説明|
|---|---|
|src|ビルド前のソースコードを格納しているディレクトリ|
|.babelrc|[babel](https://babeljs.io/docs/en/babel-preset-env)が実行するトランスパイルの設定ファイル|
|.gitignore|git管理しないファイル/ディレクトリを記載するファイル|
|package-lock.json|package.jsonの情報をもとに自動生成されるファイル<br>開発者間が同一の依存関係をインストールするために必要|
|package.json|npmでインストールした[パッケージ情報や開発時に使用するnpm scriptsを管理しているファイル](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)|
|webpack.config.mjs|webpackの開発・本番ビルドに使用する共通の設定ファイル|

## Version
![node version](https://img.shields.io/badge/node-16.17.0-48C628.svg?style=flat-square)