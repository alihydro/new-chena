let currentPage = 1; // Define the initial current page

// Function to generate the image elements for a specific page
// Function to generate the image elements for a specific page
function generateImageElements(images, page, imagesPerPage) {
  const gridImages = document.getElementById('gridImages');
  gridImages.innerHTML = ''; // Clear previous images

  const startIndex = (page - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const pageImages = images.slice(startIndex, endIndex);

  for (let i = 0; i < pageImages.length; i++) {
    const imageObj = pageImages[i];
    const image = document.createElement('img');  //---------*******************************--
    image.classList.add('portfolio-image');

    image.src = imageObj.src;
    image.alt = imageObj.alt;
    image.dataset.originalSrc = imageObj.src; // Store original source
    image.dataset.hoverSrc = imageObj.hoverSrc;
    
    // Add event listeners for hover functionality
    image.addEventListener('mouseover', function() {
      image.src = image.dataset.hoverSrc; // Change source on hover
    });

    image.addEventListener('mouseout', function() {
      image.src = image.dataset.originalSrc; // Restore original source on mouseout
    });

    gridImages.appendChild(image);



    
  }
}


function generatePagination(images, imagesPerPage) {
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = ''; // Clear previous pagination

  // Previous button
  const previousButton = document.createElement('button');
  previousButton.innerHTML = '<img src="./icon_preview.svg" alt="Previous">';
  previousButton.classList.add('page-link', 'previous-button', 'hide');
  previousButton.disabled = currentPage === 1;
  previousButton.addEventListener('click', function () {
    currentPage--; // Update current page
    generatePagination(images, imagesPerPage);
    generateImageElements(images, currentPage, imagesPerPage);
  });
  pagination.appendChild(previousButton);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('page-link');
    if (i === currentPage) {
      button.classList.add('active'); // Add 'active' class to current page button
      button.style.fontWeight = 'bold'; // Apply bold font style to current page button
      button.style.color = '#E8684D'; // Apply orange color to current page button
    }
    button.addEventListener('click', function () {
      currentPage = i; // Update current page
      generatePagination(images, imagesPerPage);
      generateImageElements(images, currentPage, imagesPerPage);
    });
    pagination.appendChild(button);
  }

  // Next button
  const nextButton = document.createElement('button');
  nextButton.innerHTML = '<img src="./icon_next.svg" alt="Next">';
  nextButton.classList.add('page-link', 'next-button');
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', function () {
    currentPage++; // Update current page
    generatePagination(images, imagesPerPage);
    generateImageElements(images, currentPage, imagesPerPage);
  });
  pagination.appendChild(nextButton);

  // Hide previous button on first page
  if (currentPage === 1) {
    previousButton.classList.add('hide');
  }

  // Hide next button on last page
  if (currentPage === totalPages) {
    nextButton.classList.add('hide');
  }
}



// Retrieve image data from PHP script
function retrieveImageData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'get_images.php', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const images = JSON.parse(xhr.responseText);
        const imagesPerPage = 9; // Define the images per page
        generatePagination(images, imagesPerPage);
        generateImageElements(images, currentPage, imagesPerPage);
      } else {
        console.error('Error: ' + xhr.status);
      }
    }
  };
  xhr.send();
}

// Call the function to retrieve image data
retrieveImageData();
