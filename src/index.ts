function inlineAttachments() {
  const attachments = document.querySelectorAll('.hometask-attachments a');
  
  console.log('> found:', attachments);

  attachments.forEach((attachment) => {
    const href = attachment.getAttribute('href');
    const img = document.createElement('img');
    img.src = href || '';
    img.alt = attachment.textContent || 'Attachment';
    
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