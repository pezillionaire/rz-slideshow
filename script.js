
// Slideshow Functions

// generateGallery sets up an object array to hold image data
const generateGallery = function(imageList) {
  gallerylist = [];
  // iterate over list of images
  for (let i = 0; i < imageList.length; ++i) {
    // object with image source, alt text, and view count
    gallerylist[i] = {
      src: `./images/${imageList[i]}`,
      alt: imageList[i].split('-')[0],
      views: 0,
    }
  }
  // return the array of objects
  return gallerylist;
};

// setImage displays current image and associated data
const setImage = (index = 0, gallery) => {
  // increment image view count
  ++gallery[index].views;
  const details = document.getElementById('image-details');
  const container = document.getElementById('image-container');
  // check image exists in container
  container.querySelector('img')? '' : image = new Image();
  // set image src and alt attributes
  image.src = gallery[index].src;
  image.alt = gallery[index].views;
  details.innerText = `Views: ${gallery[index].views}`;
  container.appendChild(image);
  // return the current image postion in array
  return index;
};

// wait on DOM, then run the scripts
window.onload = () => {
  // our list of images
  const imageList = [
    'coffee-777612_640.jpg',
    'coins-1523383_1920.jpg',
    'posing-999199_1920.jpg',
    'raspberries-1426859_1920.jpg'
  ]

  // return gallery object array
  let gallery = generateGallery(imageList);
  let activeImage = 0;

  // initialize the first image in the gallery
  setImage(activeImage, gallery);

  // event listener for next button
  document.getElementById('next').addEventListener('click', () => {
    // check if it's the last image - cycle back to start
    if (activeImage >= gallery.length - 1) {
      activeImage = setImage(0, gallery);
    } else {
      activeImage = setImage(activeImage + 1, gallery);
    }
  });

  // event listener for prev button
  document.getElementById('prev').addEventListener('click', () => {
    // check if it's the first image - cycle around to end
    if (activeImage <= 0) {
      activeImage = setImage(gallery.length - 1, gallery);
    } else {
      activeImage = setImage(activeImage - 1, gallery);
    }
  });
};
