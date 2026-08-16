(function () {
  const paths = ['01-starting-ai-bootcamp.html','02-python-crawling-project.html','03-statistics-hypothesis-testing.html','04-os-memory-and-multiprocessing.html','05-git-flow-and-cicd.html','06-ml-pipeline-and-eda.html','07-regression-competition.html','08-mlops-pipeline.html','09-cv-competition.html','10-transformer-and-bert.html','11-korean-nli-competition.html','12-information-retrieval.html','13-rag-and-langchain.html','14-recsys-final-project.html','15-bootcamp-retrospective.html'];
  const id = Number(document.body.dataset.postId);
  const posts = window.TECH_BLOG_POSTS || [];
  const post = posts.find(item => item.id === id);
  const root = document.getElementById('articleRoot');
  if (!post) { root.innerHTML = '<p class="empty-state">글을 찾을 수 없습니다.</p>'; return; }

  const cleanTitle = post.title.replace('[커널 아카데미] AI 부트캠프 - ', '');
  const cleanCategory = post.category.replace(/\s*[🏆🌟]/gu, '');
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const publishedAt = new Date(`${post.date}T${post.time}:00`);
  const displayTimestamp = `${post.date.replaceAll('-', '. ')}. (${weekdays[publishedAt.getDay()]}) ${post.time}`;
  document.title = `${cleanTitle} | Romeo의 기술 블로그`;
  document.querySelector('meta[name="description"]').setAttribute('content', post.summary);
  root.innerHTML = `
    <a class="back-to-list" href="../index.html#posts">전체 글로 돌아가기</a>
    <article class="article-paper">
      <header>
        <p class="article-category">${cleanCategory}</p>
        <h1 class="article-title">${cleanTitle}</h1>
        <div class="article-info"><span>Romeo</span><time datetime="${post.date}T${post.time}:00+09:00">${displayTimestamp}</time></div>
      </header>
      ${post.imageType === 'learning-evidence' ? `<figure class="article-figure"><img class="article-banner" src="../${post.image}" alt="${post.imageCaption || cleanTitle}"><figcaption>${post.imageCaption || ''}</figcaption></figure>` : ''}
      <div class="article-body">${post.content}</div>
    </article>
    <nav class="article-nav" aria-label="이전 글과 다음 글">
      ${id > 1 ? `<a href="${paths[id-2]}"><small>이전 글</small>${posts[id-2].title.replace('[커널 아카데미] AI 부트캠프 - ', '')}</a>` : '<span></span>'}
      ${id < posts.length ? `<a href="${paths[id]}"><small>다음 글</small>${posts[id].title.replace('[커널 아카데미] AI 부트캠프 - ', '')}</a>` : '<span></span>'}
    </nav>`;

  root.querySelectorAll('.article-body h3, .article-body h4').forEach(heading => {
    heading.textContent = heading.textContent.replace(/^\p{Extended_Pictographic}\uFE0F?\s*/u, '');
  });
  root.querySelectorAll('.code-block').forEach(block => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'copy-code-btn'; button.textContent = '코드 복사';
    button.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(block.querySelector('code').textContent); button.textContent = '복사됨'; }
      catch (_) { button.textContent = '복사 실패'; }
      setTimeout(() => { button.textContent = '코드 복사'; }, 1400);
    });
    block.appendChild(button);
  });
})();
