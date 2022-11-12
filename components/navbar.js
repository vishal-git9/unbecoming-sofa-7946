const navbar=()=>{
    return `
    <div id="user-bar">
        <div class="userbar-left">
            <h5>INDIA</h5>
            <h5>CUSTOMER CARE</h5>
        </div>
        <div class="userbar-right">
            <h5> REGISTER</h5>
            <h5>LOGIN</h5>

        </div>

    </div>
    <div id="userbar-secondary">

        <div id="cat">
            <h5>WOMENS</h5><h5>MENS</h5><h5>KIDS</h5><h5>DESIGN&ART</h5>
        </div>
        <div>
            <img src="https://i.ibb.co/K5hm7v9/CRUX.png" alt="">
        </div>
        <div>
            <span class="material-symbols-outlined">
                search
            </span>
            <span class="material-symbols-outlined">
                favorite
            </span>
            <span class="material-symbols-outlined" id="shopping-bag">
                shopping_bag
            </span>
            <span id="item_count">0</span>
        </div>

    </div>
    <div id="menu-section">
        <div>
            <p id="newarrivals">NEW ARRIVALS</p>
            <p id="designers">DESIGNERS</p>
            <p id="clothing">CLOTHING</p>
            <p id="shoes">SHOES</p>
            <p id="accessories">ACCESSORIES</p>
            <p id="eight">8 BY YOOX</p>
            <p id="yooxygen">YOOXYGEN</p>
            <p id="collab">COLLABORATIONS</p>
            <p id="bestdeal">BEST DEALS</p>
            <p id="gift">GIFT GUIDE</p>

        </div>
       
       

    </div>

`
}

export {navbar}