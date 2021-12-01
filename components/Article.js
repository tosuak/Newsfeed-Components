// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import articleData from './articleData';
// console.log(articleData);
const {title, date, firstParagraph, secondParagraph, thirdParagraph} = articleData;
/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
const articleDiv = document.querySelector('.articles');

 function articleMaker (obj) {
    const article = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const articleDate = document.createElement('p');
    const firstPara = document.createElement('p');
    const secondPara = document.createElement('p');
    const thirdPara = document.createElement('p');
    const expandButton = document.createElement('span'); 

    article.appendChild(articleTitle);
    article.appendChild(articleDate);
    article.appendChild(firstPara);
    article.appendChild(secondPara);
    article.appendChild(thirdPara);
    article.appendChild(expandButton);

    article.classList.add('article');
    articleDate.classList.add('date');
    expandButton.classList.add('expandButton');

    articleTitle.textContent = obj.title;
    articleDate.textContent = obj.date;
    firstPara.textContent = obj.firstParagraph;
    secondPara.textContent = obj.secondParagraph;
    thirdPara.textContent = obj.thirdParagraph;
    expandButton.textContent = '+';

    expandButton.addEventListener('click', () => {
      article.classList.toggle('article-open');
    });

    return article;
  }    
  
  articleData.forEach(elem => {
    const articleElem = articleMaker(elem);
    articleDiv.appendChild(articleElem);
  });

const newArticle1 = articleMaker({
  title: 'Breaking News! Your keys are Lost?',

  date: 'December 1st, 2021',

  firstParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Metus vulputate eu scelerisque felis. Diam vel quam elementum pulvinar etiam. Viverra orci sagittis eu volutpat.',

  secondParagraph: 'Ultricies mi quis hendrerit dolor. Habitant morbi tristique senectus et netus. Ac auctor augue mauris augue neque. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Senectus et netus et malesuada fames. Fermentum odio eu feugiat pretium.',

  thirdParagraph: 'Eget egestas purus viverra accumsan in nisl nisi. Netus et malesuada fames ac turpis egestas maecenas. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Est placerat in egestas erat imperdiet.',
});

const newArticle2 = articleMaker({
  title: 'This is not the news?',

  date: 'October 1st, 2021',

  firstParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Metus vulputate eu scelerisque felis. Diam vel quam elementum pulvinar etiam.',

  secondParagraph: 'Ultricies mi quis hendrerit dolor. Habitant morbi tristique senectus et netus. Ac auctor augue mauris augue neque. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Senectus et netus et malesuada fames. Fermentum odio eu feugiat pretium. Vel eros donec ac odio tempor orci dapibus ultrices in. Lorem sed risus ultricies tristique nulla. Dolor sit amet consectetur adipiscing elit.',

  thirdParagraph: 'Eget egestas purus viverra accumsan in nisl nisi. Netus et malesuada fames ac turpis egestas maecenas. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Est placerat in egestas erat imperdiet. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec.',
});

articleDiv.appendChild(newArticle1);
articleDiv.appendChild(newArticle2);