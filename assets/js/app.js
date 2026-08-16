(function () {
  const postPaths = [
    '01-starting-ai-bootcamp.html',
    '02-python-crawling-project.html',
    '03-statistics-hypothesis-testing.html',
    '04-os-memory-and-multiprocessing.html',
    '05-git-flow-and-cicd.html',
    '06-ml-pipeline-and-eda.html',
    '07-regression-competition.html',
    '08-mlops-pipeline.html',
    '09-cv-competition.html',
    '10-transformer-and-bert.html',
    '11-korean-nli-competition.html',
    '12-information-retrieval.html',
    '13-rag-and-langchain.html',
    '14-recsys-final-project.html',
    '15-bootcamp-retrospective.html'
  ];

  const container = document.getElementById('blogContainer');
  const searchInput = document.getElementById('searchInput');
  const countElement = document.getElementById('visiblePartsCount');
  const tabs = document.querySelectorAll('#categoryTabs .tab-btn');
  let activeCategory = 'All';
  let searchQuery = '';

  function matchesCategory(post) {
    if (activeCategory === 'All') return true;
    if (activeCategory === '경진대회') return post.category.includes('경진대회');
    if (activeCategory === '파이썬') return ['개발환경 & 로드맵', '파이썬 & 데이터엔지니어링', '수리통계학', '컴퓨터공학 & OS', '형상관리 & DevOps', '머신러닝 파이프라인'].includes(post.category);
    if (activeCategory === '자연어 처리') return post.category.includes('자연어 처리') || /NLP|LangChain|IR/.test(post.title);
    if (activeCategory === '부트캠프 회고') return /회고|인턴십/.test(post.category + post.title);
    return true;
  }

  function normalizeTitle(title) {
    return title.replace('[커널 아카데미] AI 부트캠프 - ', '');
  }

  function formatTimestamp(date, time) {
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const parsed = new Date(`${date}T${time}:00`);
    return `${date.slice(5)} (${weekdays[parsed.getDay()]}) ${time}`;
  }

  function render() {
    if (!Array.isArray(window.TECH_BLOG_POSTS)) {
      countElement.textContent = '—';
      container.innerHTML = '<p class="empty-state">글 목록을 불러오지 못했습니다. 페이지를 새로고침해 주세요.</p>';
      return;
    }

    const posts = window.TECH_BLOG_POSTS.filter(post => {
      const searchable = `${post.title} ${post.category} ${post.summary} ${post.content}`.toLowerCase();
      return matchesCategory(post) && searchable.includes(searchQuery);
    });

    countElement.textContent = posts.length;
    if (!posts.length) {
      container.innerHTML = '<p class="empty-state">조건에 맞는 글이 없습니다.</p>';
      return;
    }

    container.innerHTML = posts.map(post => `
      <article class="post-row ${post.imageType === 'learning-evidence' ? 'has-thumbnail' : ''}">
        ${post.imageType === 'learning-evidence' ? `<a class="post-thumbnail" href="posts/${postPaths[post.id - 1]}" aria-label="${normalizeTitle(post.title)} 읽기"><img src="${post.image}" alt="" loading="lazy"></a>` : ''}
        <div class="post-row-body">
          <div class="post-meta"><span>${post.category.replace(/\s*[🏆🌟]/gu, '')}</span><time datetime="${post.date}T${post.time}:00+09:00">${formatTimestamp(post.date, post.time)}</time></div>
          <h3><a href="posts/${postPaths[post.id - 1]}">${normalizeTitle(post.title)}</a></h3>
          <p>${post.summary}</p>
          <a class="read-link" href="posts/${postPaths[post.id - 1]}">본문 읽기</a>
        </div>
      </article>
    `).join('');
  }

  searchInput.addEventListener('input', event => {
    searchQuery = event.target.value.toLowerCase().trim();
    render();
  });

  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.dataset.category;
    render();
  }));

  render();
})();
