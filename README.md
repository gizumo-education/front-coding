# front-coding

## 各種バージョン

![node version](https://img.shields.io/badge/node-22.14.0-48C628.svg?style=flat-square) ![npm version](https://img.shields.io/badge/npm-10.9.2-2D7DBE.svg?style=flat-square) ![volta version](https://img.shields.io/badge/volta-1.0.8~-EDCF3A.svg?style=flat-square)

## 📝 要件

- [Volta](https://volta.sh/)がインストールされていること

## ⚙️ 環境構築

1. リポジトリをクローン

```sh
git clone https://github.com/gizumo-education/front-coding.git
```

2. 対象のディレクトリに移動

```sh
cd front-coding
```

3. 依存モジュールをインストール

```sh
npm ci
```

4. Git Hookを有効化

```sh
npm run lefthook
```

5. 開発サーバー立ち上げ

```sh
npm run dev
```

## 🚀 ディレクトリ構成

```
.
├── out
├── public
└── src
    ├── app
    ├── components
    ├── libs
    └── styles

```

| ディレクトリ名 | 説明                       |
| -------------- | -------------------------- |
| out            | 本番ビルド後のソースコード |
| public         | 画像を管理                 |
| app            | Next.js App Router         |
| components     | 汎用コンポーネントを管理   |
| styles         | グローバルなCSSを管理      |

## 🧞 コマンド

コマンドはプロジェクトルートで実行してください

| Command          | Action                                   |
| :--------------- | :--------------------------------------- |
| `npm install`    | 依存モジュールをインストール             |
| `npm run dev`    | `localhost:3000`で開発サーバーを立ち上げ |
| `npm run build`  | `out/`にビルドファイルを生成             |
| `npm run lint:*` | 各種Lint実行                             |
| `npm run format` | Prettierによるフォーマット               |
