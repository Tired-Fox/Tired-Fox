---
title: 'Markdown Style'
description: 'This article is a representation of the markdown styling for this website.'
img: 'https://picsum.photos/900/600'
tags: [Markdown]
---

[Internal Link](/articles/snippets/rust/sample_snippet)
[Internal ID](#paragraph)
[External Link](https://www.example.com)
[External Link](//www.example.com)

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![This is a placeholder image description](/img/TiredFox.png)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use *Markdown syntax* within a blockquote.
#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br/>
> <cite>— Rob Pike[^1]</cite>
[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| *italics* | **bold** | `code` |
| *italics* | **bold** | `code` |

## Code Blocks

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```
<br/>

```python[main.py]
def main():
    print('Hello World!')
if __name__ == '__main__':
    main()
```

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O or H~2~O

X<sup>n</sup> + Y<sup>n</sup> = Z^n^

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## Math

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

## Callouts


::Callout{type="quote" title="Custom Title"}
1. All callout contents are rendered with the same styling as the rest of the markdown.
1. Callouts can be statically open. 
1. Callout titles default to the type unless specified

```rust
fn main() {
    println!("Can have it here too!");
}
```
::

::Callout{type="info" toggle open}
1. Callouts can be collapsible 
2. Collapsible callouts can be set to be open by default
::

::Callout{type="tip"}
Callouts can be Nested


    :::Callout{type="info"}
    Nested callout
    :::
::

::Callout{type="note"}
The styling and inspiration for these callouts comes from [mkdocs-material](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#fontawesome)
::

::Callout{type="failure" toggle}
Test callout
::

::Callout{type="success" toggle}
Test callout
::

::Callout{type="warning" toggle}
Test callout
::

::Callout{type="danger" toggle}
Test callout
::

::Callout{type="bug" toggle}
Test callout
::

::Callout{type="example" toggle}
Test callout
::

::Callout{type="quote" toggle}
Test callout
::

::Callout{type="question" toggle}
Test callout
::