// TODO: enlarge on click
// TODO: better gallery view
// TODO: handle non-image payload (pptx, docx, etc)

function inlineAttachments() {
  const attachments = document.querySelectorAll('.hometask-attachments a');
  
  console.log('> found:', attachments);

  attachments.forEach((attachment) => {
    const href = attachment.getAttribute('href');
    const img = document.createElement('img');
    img.src = href || '';
    img.alt = attachment.textContent || 'Attachment';
    img.setAttribute('style', "max-width: 80%;");
    
    const parentDiv = attachment.parentElement;
    if (parentDiv) {
      parentDiv.appendChild(img);
    }
  });
}

function onContentLoad() {
  inlineAttachments();
}

function main() {
  // window.onload = onContentLoad;
  inlineAttachments();
  console.log('yay');
}

main();