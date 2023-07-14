import axios from 'axios'

const Card = (article) => {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(name);

  headline.textContent = ` ${article.headline} `;
  image.src = article.authorPhoto;
  name.textContent = ` ${article.authorName} `;

  card.addEventListener('click', event => {
    console.log(`${article.headline}`)
  })

  return card;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
    .then(resp => {

      let articleData = resp.data.articles
      for (let i in articleData) {
        let key = articleData[i];
        for (let k in key) {
          let article = key[k];
          document.querySelector(selector).appendChild(Card(article));
        }
      }
      // for (const key of Object.entries(articleData)) {
      //   for (let i = 0; i < articleData.length; i++) {
      //    let article = key[i][i];
          // document.querySelector(selector).appendChild(Card(article));
        // }
      // }
     })
    .catch(err => {
      console.log("Error: ", err);
    })

    /**
     *   TASK 6 - cardAppender,  Review making HTTP requests and getting data from a server using axios as well as how to use promises and iterate over 
     * a list of data received from a server, creating a set of components and adding them to the DOM.
    × [10] fetches articles and appends all article cards to the DOM (1027 ms)

  ● TASK 6 - cardAppender,  Review making HTTP requests and getting data from a server using axios as well as how to use promises and iterate over a list of data 
  received from a server, creating a set of components and adding them to the DOM. › [10] fetches articles and appends all article cards to the DOM

    Unable to find an element with the text: ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects. This could be because the text 
    is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

     */
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
