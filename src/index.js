function showProductInfo(title, imageSrc, description) {
    const productTitle = document.getElementById('product-title');
    const productImage = document.getElementById('product-image');
    const productDescription = document.getElementById('product-description');
    const productDetail = document.getElementById('product-detail');

    productTitle.textContent = title;
    productImage.src = imageSrc;
    productDescription.textContent = description;

    productDetail.style.display = 'block';
}

document.getElementById('product-detail').style.display = 'none';
