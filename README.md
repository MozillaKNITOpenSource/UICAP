# UICAP:Future of UX/UI
[![License: MPL-2.0](https://img.shields.io/crates/l/clippy.svg)](#License)
[![Coverage Status](https://coveralls.io/repos/github/aws/aws-sdk-js/badge.svg?branch=master)]()



***

#### What is UICAP?

**UICAP** solves problem of many users who have not better experience of web page surfing on Firefox and other browsers.
Basically it's an **UI framework** which will help developers to make a webpage which is browser independent and provides best user experience to all users.It'll contain some other advance components which is not provided in other amazing UI frameworks like **Twitter Bootstrap**, **Flat UI**, and **Ionic**.
There are many more but we can list all here.

We've written a short manual explaining how you can adapt it for your own needs.

* [How to use UICAP?](https://github.com/MozillaKNITOpenSource/MozUI/wiki)

***


## Getting started

There are many ways of using UICAP in your projects. Here a brief introduction of the recommended two methods:


### CDN - just give me the file

We're working on it.


### Bower - to personalize UICAP

We're working on it.


### NPM

We're working on it.


### Other ways

You can always download the latest minimized version from github, clone the repository or download it. Or clone it: `git clone https://github.com/MozillaKNITOpenSource/MozUI.git`


## Example usage

After including the stylesheet as indicated in the `Getting started`:

```html
<form>
  Whats your fav in following?

  <label>
    <select name="feature">
      <option value="semantic">    HTML5 </option>
      <option value="lightweight"> Lightweight    </option>
      <option value="css3">         CSS3      </option>
      <option value="responsive">  Responsive     </option>
    </select>
  </label>

  <input type="email" placeholder="Email">

  <button class="primary"> Subscribe! </button>
</form>
```



## Advantages

- **Only CSS3** is needed and your **HTML5** stays highly semantic*.

- **Under 10kb** when minimized and gzipped with all plugins.

- **Normalize.css** is used as a base, achieving a solid foundation.

- **Support**: IE 9+ and others. No fancy CSS3 on IE 8.

- **Responsive**: The nav and the grids are responsive.





## Disadvantages

- Difficult to drop in an already created project. This is what I meant by *invasive*. This is not within the new scope of the project.



## Alternatives and why I still created UICAP

[Milligram](https://milligram.github.io/): A minimalist CSS framework

[Bootstrap](http://getbootstrap.com/): Really comprehensive, but too many files and too heavy for most of the websites. It also relies too much on javascript. Still cannot get the `<select>` right out of the box.

[Min](http://mincss.com/): a tiny, basic css framework. It has great browser support. No `<select>` right, and it's too inexpressive.



## Contributing

You are encouraged to contribute to UICAP. To write a new plugin, just copy one of the existing ones (specially recommend "button") and modify the files. The code must be linted with scss-lint, except the `PropertySortOrder` which is ignored for a better code structure.



###  Give your Ideas for UICAP

To contribute in UICAP by giving your ideas please go through [here](https://github.com/MozillaKNITOpenSource/MozUI/issues/2)


# Authors
* [Adarsh Learner](https://learneradarsh.github.io)
* [Atul Gupta](https://github.com/atul-ag)
* [Rajat Khemka](https://github.com/rajatkhemka)
* [Shivam Sharma](https://github.com/shvm-7397)
* [Priyanshi](https://github.com/pppriya)
* [Bhavana Singh](https://github.com/BH12ri)
* [Khusboo Bindal](https://github.com/khushboo998)
* [Aseem Srivastava](https://github.com/as3eem)
* [Chirag](https://github.com/chiraggoyal0714)
* [Harshit Agrawal](https://github.com/hagrawal97-github)
* [Sandeep](https://github.com/sandynigs)
* [Avinash Verma](https://github.com/Adien7368)
***


#### Communication Links
Dear Contributors you all can join our community by going through below links:
[Gitter](https://gitter.im/MozUI-Future-of-UI-and-Ux/Lobby)
***

## Some amazing considerations

- [Fontello](http://fontello.com/) an icon library that plays really nice with others.

