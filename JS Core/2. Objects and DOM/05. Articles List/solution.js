function createArticle() {
	let articleTitle = document.getElementById('createTitle').value;
	let articleContent = document.getElementById('createContent').value;
	if (articleTitle.length > 0 && articleContent.length > 0) {
		let articleHeader = document.createElement('h3');
		articleHeader.textContent = articleTitle;
		let articleParagraph = document.createElement('p');
		articleParagraph.textContent = articleContent;
		document.getElementById('articles').appendChild(articleHeader);
		document.getElementById('articles').appendChild(articleParagraph);

	}
	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';
}
