import footerDiv from "./footer.js";

// Front Banner
const bannerDiv = document.createElement("div");
bannerDiv.id= "banner_div";
const bannerImg = document.createElement("img");
bannerImg.src = "images/banner.png";

bannerDiv.append(bannerImg);

// Create Services div
const service_section = document.createElement("section");
service_section.className = "service_section";

const service_div1 = document.createElement("div");
const service_img1 = document.createElement("img");
service_img1.src = "images/services/shippinh.png"
const service_content_div1 = document.createElement("div");
service_content_div1.className = "service_content";
service_content_div1.id = "shipping";
const service_content_p1 = document.createElement('p');
service_content_p1.textContent = "Free Shipping";
service_content_div1.append(service_content_p1);
service_div1.append(service_img1,service_content_div1);

const service_div2 = document.createElement("div");
const service_img2 = document.createElement("img");
service_img2.src = "images/services/online.png";
const service_content_div2 = document.createElement("div");
service_content_div2.className = "service_content";
service_content_div2.id = "online";
const service_content_p2 = document.createElement('p');
service_content_p2.textContent = "Online Order";
service_content_div2.append(service_content_p2);
service_div2.append(service_img2,service_content_div2);

const service_div3 = document.createElement("div");
const service_img3= document.createElement("img");
service_img3.src = "images/services/save.png";
const service_content_div3 = document.createElement("div");
service_content_div3.className = "service_content";
service_content_div3.id = "money";
const service_content_p3 = document.createElement('p');
service_content_p3.textContent = "Save Money";
service_content_div3.append(service_content_p3);
service_div3.append(service_img3,service_content_div3);

const service_div4 = document.createElement("div");
const service_img4= document.createElement("img");
service_img4.src = "images/services/promotions.png";
const service_content_div4 = document.createElement("div");
service_content_div4.className = "service_content";
service_content_div4.id = "promotions";
const service_content_p4 = document.createElement('p');
service_content_p4.textContent = "Promotions";
service_content_div4.append(service_content_p4);
service_div4.append(service_img4,service_content_div4);

const service_div5 = document.createElement("div");
const service_img5= document.createElement("img");
service_img5.src = "images/services/support.png";
const service_content_div5 = document.createElement("div");
service_content_div5.className = "service_content";
service_content_div5.id = "support";
const service_content_p5 = document.createElement('p');
service_content_p5.textContent = "24/7 Support";
service_content_div5.append(service_content_p5);
service_div5.append(service_img5,service_content_div5);


service_section.append(service_div1,service_div2,service_div3,service_div4,service_div5);

// Laptop Banner
const laptopBanner = document.createElement("div");
laptopBanner.id = "laptop_banner";
const laptop_img = document.createElement("img");
laptop_img.src = "images/laptop banner.webp";
laptopBanner.append(laptop_img);


// Displaying the items
const itemDiv = document.getElementById("items");

const featuredProductDiv = document.createElement("div");
featuredProductDiv.id = "featuredMainDiv";

const featuredProducts  = document.createElement("div");
featuredProducts.id = "featuredProducts";
const featuredProductHeading = document.createElement("h2");
featuredProductHeading.textContent = "Featured Proudcts";


function DisplayItems(itemsData,individualDiv) {

    itemsData.forEach(item => {
        let itemCard = document.createElement('div');
        itemCard.className = "item";

        let itemImg = document.createElement('img');
        itemImg.src = item.imageSrc;

        let itemBrand = document.createElement("h4");
        itemBrand.textContent = item.brand;

        let itemName = document.createElement('p');
        itemName.textContent = item.title;

        let itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.className = "laptop_price";

        let moreBtn = document.createElement("button");
        moreBtn.textContent ="more..";
        moreBtn.className = "moreBtn";

        itemCard.append(itemImg, itemBrand,itemName, itemPrice,moreBtn);
        individualDiv.append(itemCard);
    });
}

featuredProductDiv.append(featuredProductHeading,featuredProducts);



// Laptops
const itemsData = [
    { brand: "Apple", title:"MacBook Pro", imageSrc: "https://cdn.dummyjson.com/product-images/6/thumbnail.png", price: "₹1,7499" },
    { brand: "Samsung",title:"Samsung Galaxy Book", imageSrc: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg", price: "₹80,499" },
    { brand: "Microsoft Surface",title:"Microsoft Surface Laptop 4", imageSrc: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg", price: "₹90,995" },
    { brand: "Infinix", title:"Infinix INBOOK", imageSrc: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg", price: "₹39,895" },

];
DisplayItems(itemsData,featuredProducts);

// Slider Section Content
const shopNow = document.createElement("div");
shopNow.id = "shopNow";
const shopNow_content = document.createElement("h1");
shopNow_content.textContent ="New collection for ";
const shopNow_contentSpan = document.createElement("span");
shopNow_contentSpan.textContent = "Everyone!";
const shopNow_Btn = document.createElement("button");
shopNow_Btn.textContent = "Login/Sign";
shopNow_Btn.addEventListener('click',function(){
    window.location.href = "#";
})
shopNow_Btn.className = "shopBtn";
shopNow_Btn.id = "shopNowBtn";
shopNow_content.append(shopNow_contentSpan);
shopNow.append(shopNow_content,shopNow_Btn);
// Slider Section
const slider_section = document.createElement("section");
slider_section.id = "slider_section";

const slider_outerDiv = document.createElement("div");
slider_outerDiv.id = "slider_outerDiv";

const sliderImg1 = document.createElement("img");
sliderImg1.className = "sliderImg";
sliderImg1.src = "https://images.bewakoof.com/uploads/grid/app/Midsize-Desktop-Banner-Character-Accessories-1700203060.jpg";

const sliderImg2 = document.createElement("img");
sliderImg2.className = "sliderImg";
sliderImg2.src = "https://images.bewakoof.com/uploads/grid/app/Midsize-Desktop-Banner-Customise-1700203061.jpg";

const sliderImg3 = document.createElement("img");
sliderImg3.className = "sliderImg";
sliderImg3.src = "https://images.bewakoof.com/uploads/grid/app/DESKTOP---MID-SIZE-BANNER-AVATAR-1708668353.png";

const sliderImg4 = document.createElement("img");
sliderImg4.className = "sliderImg";
sliderImg4.src = "https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp";

slider_outerDiv.append(sliderImg1, sliderImg2, sliderImg3, sliderImg4);

slider_section.append(slider_outerDiv,shopNow);
document.body.append(slider_section);

const sliderImages = document.querySelectorAll(".sliderImg");
let currentIndex = 0;

// Automatically slide after a delay
function autoSlide() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlide();
}

// Update the slide based on the current index
function updateSlide() {
    sliderImages.forEach((image, index) => {
        image.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

setInterval(() => {
    autoSlide();
}, 2000);

// Trigger the slide transition when the current transition ends
sliderImages.forEach((image) => {
    image.addEventListener("transitionend", () => {
        setTimeout(autoSlide, 2000); 
    });
});



itemDiv.append(bannerDiv, service_section, laptopBanner, featuredProductDiv,slider_section,footerDiv);
export default itemDiv;


