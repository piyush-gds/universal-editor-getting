export default function decorate(block) {
  const quoteText = block.children[0].textContent.trim();
  const authorText = block.children[1].textContent.trim();

  const quotePara = document.createElement("p");
  quotePara.textContent = quoteText;

  const authorPara = document.createElement("p");
  authorPara.textContent = authorText;

  block.replaceChildren(quotePara, authorPara);
}
