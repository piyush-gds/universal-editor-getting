

export default function decorate(block) {
  const [quoteWrapper] = block.children;

  console.log("block.children: ", block.children);
  console.log('quoteWrapper: ', quoteWrapper);
  
  

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}