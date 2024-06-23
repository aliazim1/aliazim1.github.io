// storing all the images' links
images = [
    {image: "/assets/DRSAgallery/image_1.png"},
    {image: "/assets/DRSAgallery/image_2.png"},
    {image: "/assets/DRSAgallery/image_3.png"},
    {image: "/assets/DRSAgallery/image_4.png"},
    {image: "/assets/DRSAgallery/image_5.png"},
    {image: "/assets/DRSAgallery/image_6.png"},
    {image: "/assets/DRSAgallery/image_7.png"},
    {image: "/assets/DRSAgallery/image_8.png"},
    {image: "/assets/DRSAgallery/image_9.png"},
    {image: "/assets/DRSAgallery/image_10.png"},
    {image: "/assets/DRSAgallery/image_12.png"},
    {image: "/assets/DRSAgallery/image_13.png"},
    {image: "/assets/DRSAgallery/image_14.png"},
    {image: "/assets/DRSAgallery/image_15.png"},
    {image: "/assets/DRSAgallery/image_16.png"},
    {image: "/assets/DRSAgallery/image_17.png"},
    {image: "/assets/DRSAgallery/image_18.png"},
    {image: "/assets/DRSAgallery/image_19.png"},
    {image: "/assets/DRSAgallery/image_20.png"},
    {image: "/assets/DRSAgallery/image_21.png"},
    {image: "/assets/DRSAgallery/image_22.png"},
    {image: "/assets/DRSAgallery/image_23.png"},
    {image: "/assets/DRSAgallery/image_24.png"},
    {image: "/assets/DRSAgallery/image_25.png"},
    {image: "/assets/DRSAgallery/image_26.png"},
    {image: "/assets/DRSAgallery/image_27.png"},
    {image: "/assets/DRSAgallery/image_28.png"},
    {image: "/assets/DRSAgallery/image_29.png"},
    {image: "/assets/DRSAgallery/image_30.png"},
    {image: "/assets/DRSAgallery/image_31.png"},
    {image: "/assets/DRSAgallery/image_32.png"},
    {image: "/assets/DRSAgallery/image_33.png"},
    {image: "/assets/DRSAgallery/image_34.png"},
    {image: "/assets/DRSAgallery/image_35.png"},
    {image: "/assets/DRSAgallery/image_37.png"},
    {image: "/assets/DRSAgallery/image_38.png"},
    {image: "/assets/DRSAgallery/image_39.png"},
    {image: "/assets/DRSAgallery/image_42.png"},
    {image: "/assets/DRSAgallery/image_43.png"},
]

// displaying all the images
const cardContainer = document.querySelector('.card-parent');
const fragment = document.createDocumentFragment();
images.forEach(image => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card');
    cardItem.innerHTML = `
        <img src="${image.image}" alt="Image not provided" class="thumbnail" />
    `;
    fragment.appendChild(cardItem);
});
cardContainer.appendChild(fragment);


// Get the modal
var modal = document.getElementById('modal');

// Get the modal image and caption elements
var modalImg = document.getElementById('modal-image');

// Get all images with class 'thumbnail' and loop through them to add click event
var images = document.getElementsByClassName('thumbnail');
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}