export default function decorate(block) {
  const profileImage = block.querySelector("picture");
  profileImage.classList.add("profileImage");

  const allPara = block.querySelectorAll("p");
  allPara.forEach((el) => el.classList.add("para"));

  const updatedImage = profileImage.cloneNode(true);
  const fullName = document.createElement("p");
  fullName.classList.add("fullName");
  fullName.textContent = allPara[0].textContent;

  const designation = document.createElement("p");
  designation.classList.add("designation");
  designation.textContent = allPara[1].textContent;

  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = "profile-wrapper";

  wrapperDiv.appendChild(updatedImage);
  wrapperDiv.appendChild(fullName);
  wrapperDiv.appendChild(designation);

  block.replaceChildren(wrapperDiv);
}
