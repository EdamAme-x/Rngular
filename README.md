# Rngular

Rngular(Rungyurā)

#### Size

| Name | Size |
| ---- | ---- |
| Rngular | 1 KB|
| React (+RDOM) | 130 KB | 
| Vue.js | 65 KB |
| PReact | 13 KB |
| jQuery | 87 KB |

RngularはjQeuryやVue.js, Reactとの併用も可能です。
また 通常のサーバーで動きます。
そして moduleモードを使えばコンポーネントごとの分割や、 再利用も出来ます。

## About
双方データバインディング
CSS, JS をスコープ
class型のコンポーネントなのでインスタンス生成時に
constructor でデータ取得も可能。 (this.html経由で定義)


### 簡単な説明

classのインスタンスを一つのコンポーネントとし、UUIDで管理
classにはhtmlやstyle、scriptのkeyが有り、そこに各コードを入れる。
$this が自身のUUIDに置き換わりレンダリングされる、UUIDはコンポーネントの親のタグの名前なので例えばCSSなら 以下のようなスコープを実現できる。
```css
$this > p {
    color: red;
}
```

JSではquerySelectorにも利用できる。
また関数名にも使用可能で、擬似的にローカルスコープを実現できる

$parentは親のコンポーネントのUUIDに置き換わる。
Rngular.getChildId(ここにDOM要素) で要素のUUIDも取得可能

これにより双方データバインディングが可能。

詳しくはコードを見てくれると有り難い。


## Document

WIP.
今は個人的に連絡お願いします。 (Issue等でも可)

## CDN
```html
<script src="https://edamame-x.github.io/Rngular/dist/Rngular.min.js">
</script>
```

## Playground
[https://codepen.io/EdamAme-x/pen/OJrQzWX](https://codepen.io/EdamAme-x/pen/OJrQzWX)

### Development
`npm run dev` で src/Rngular.jsを自動的にファイル変更を監視し、minify

main.jsはindex.htmlで読み込んでいるファイル
