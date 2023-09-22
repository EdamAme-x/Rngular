# Rngular

Rngular(Rungyurā)

## About
双方データバインディング
CSS, JS をスコープ
class型のコンポーネントなのでインスタンス生成時に
constructor でデータ取得も可能。


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

## CDN
```html
<script src="https://raw.githubusercontent.com/EdamAme-x/Rngular/main/dist/Rngular.min.js">
</script>
```

### Development
`npm run dev` で src/Rngular.jsを自動的にファイル変更を監視し、minify

main.jsはindex.htmlで読み込んでいるファイル