My single page, hand-coded, personal portfolio website. Built with vanilla HTML5, CSS3, and some JavaScript.

Feel free to edit, use, or interpolate as your portfolio, template, or however as you wish legally.

# Make It Yours
- Update Google Analytics and < meta > tags with yours in < head >
- Update your hero pic from my mug `images/vick.png` (500x500)
- Update your email address in `index.html` (footer section), obfuscated
```html
<li>
    <!-- Bootstrap Email Icon -->
    <a class="foot-link" href='&#1...'>
        ...
```
- Theme/dark theme colors: `css/styles.css`
```css
:root {
    --body-bg-clr:           #EAEFF5;
    --link-clr:              #fff;
    ...
}

.darkTheme {
    --body-bg-clr:           #002b36;
    --link-clr:              #da2;
    ...
```
- Update your copyright year in footer, in  `js/app.js`, `getFullYear(2022)` function call. Change *2022* to your year started. e.g.: If you put `getFullYear(2010)` will display *&copy; 2010 - 2022*
- Generate/replace your own favicon's
- Will update with more documentation...

# Credits
- Uses [tsparticles](https://particles.js.org/) and [Chart.js](https://www.chartjs.org/) CDN
- Uses [icons8](https://icons8.com/) icons
- [Timeline scroll animate](https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528)

