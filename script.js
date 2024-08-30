document.addEventListener('DOMContentLoaded', function() {
                    // Array containing the paths to the additional product images and their details
                    const additionalProducts = [
                        {
                            imgSrc: "./images/product/gyro-sandwich1-1650490757 1.png",
                            title: "Gyro Sandwhic",
                            rating: 4.7,
                            price: "$22.00"
                        },
                        {
                            imgSrc: "./images/product/beef-enchiladas_4004 1.png",
                            title: "Enchilade",
                            rating: 4.8,
                            price: "$19.50"
                        },
                        {
                            imgSrc: "./images/product/delish-200305-grilled-green-beans-0204-landscape-pf-1584045271 1.png",
                            title: "Green Beans",
                            rating: 5.0,
                            price: "$30.00"
                        },
                        {
                                        imgSrc: "./images/product/gyro-sandwich1-1650490757 1.png",
                                        title: "Gyro Sandwhic",
                                        rating: 4.7,
                                        price: "$22.00"
                                    },
                                    {
                                        imgSrc: "./images/product/beef-enchiladas_4004 1.png",
                                        title: "Enchilade",
                                        rating: 4.8,
                                        price: "$19.50"
                                    },
                                    {
                                        imgSrc: "./images/product/delish-200305-grilled-green-beans-0204-landscape-pf-1584045271 1.png",
                                        title: "Green Beans",
                                        rating: 5.0,
                                        price: "$30.00"
                                    }
                    ];
                
                    // Get references to the product grid and button
                    const productGrid = document.getElementById('product-grid');
                    const loadMoreBtn = document.getElementById('load-more-btn');
                
                    // Add event listener to the button
                    loadMoreBtn.addEventListener('click', function() {
                        // Loop through each product and create an HTML element
                        additionalProducts.forEach(function(product) {
                            const productCard = document.createElement('div');
                            productCard.classList.add('product-card');
                
                            // Set the inner HTML of the new product card
                            productCard.innerHTML = `
                                <img src="${product.imgSrc}" alt="${product.title}">
                                <div class="product-info">
                                    <h3>${product.title}</h3>
                                    <div class="product-rating">
                                        <span>⭐</span>
                                        <span>${product.rating}</span>
                                    </div>
                                    <p class="product-price">${product.price}</p>
                                    <button class="add-to-cart">Add To Cart</button>
                                </div>
                            `;
                
                            // Append the new product card to the grid
                            productGrid.appendChild(productCard);
                        });
                
                        // Hide the button after loading more products
                        loadMoreBtn.style.display = 'none';
                    });
                });
                