document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('news-container');
  
    try {
      const res = await fetch('/news');
      const data = await res.json();
  
      container.innerHTML = ''; // Clear loading message
  
      data.articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'article';
  
        card.innerHTML = `
          <img src="${article.urlToImage || 'https://via.placeholder.com/300x180'}" alt="News Image">
          <div class="article-content">
            <h2>${article.title}</h2>
            <p>${article.description || ''}</p>
            <a href="${article.url}" target="_blank">Read more →</a>
          </div>
        `;
  
        container.appendChild(card);
      });
    } catch (error) {
      container.innerHTML = '<p>Sorry, we couldn’t load the news. Try again later!</p>';
    }
  });
  