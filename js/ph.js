const lodeData = async () => {

    // Fetch Data 
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const passingData = data.data;


    // Category button
    const CategoryButton = document.getElementById('itemClickButton');

    // looping for fetch data
    passingData.forEach((data) => {
        // console.log(data)
        // create a div
        const categoryDiv = document.createElement('div');
        categoryDiv.classList = 'join mt-8 rounded-md'
        categoryDiv.innerHTML = `
        
            <button id = "red" onclick = "itemClickButton('${data.category_id}')" class="btn mr-5">${data.category}</button>

        `
        CategoryButton.appendChild(categoryDiv);
    });


}



const itemClickButton = async (dataId) => {
    
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${dataId}`);
    const data = await res.json();
    const passingData = data.data;
    console.log(passingData)

    


    const noDataFound = document.getElementById('noDataFound');
    noDataFound.textContent = '';
    if(passingData.length === 0){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class = 'flex justify-center items-center'>
        <img class= 'ml-10' src="https://cdn-icons-png.flaticon.com/512/5301/5301987.png" alt=""></div>
        <h1 class = 'text-7xl text-center mt-20 font-bold '>Oops!! Sorry, There is no content here</h1>
        `
        noDataFound.appendChild(div);
    }

    const cardAppendDiv = document.getElementById('cardContainer');
    cardAppendDiv.textContent = '';
    passingData.forEach((cardData) => {
        console.log(cardData)
        const createDiv = document.createElement('div');
        createDiv.classList = 'card  bg-base-100 ';
        createDiv.innerHTML = `
        
        <figure><img src="${cardData.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
            <div class="card-actions items-center justify-between">
                
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-12 rounded-full mb-16">
                        <img src="${cardData.authors[0].profile_picture}" />
                        </div>
                    </div>

                        <div class="ml-2 inline-block">
                            <h1 class="text-2xl font-bold mb-4">${cardData.title}</h1>
                            <div class = "flex"
                                <h2 class="mb-2">Awlad Hossain</h2>
                                <span>${cardData.authors[0].verified? '<img class="ml-3 w-7" src="js/verified-vector-icon-account-verification-verification-icon_564974-1246-removebg-preview.png" alt="">' : ' '}</span>
                            </div>
                            <h2>${cardData.others.views} views</h2>
                        </div>
                </div>
            </div>
        </div>

        `
        cardAppendDiv.appendChild(createDiv);
    });
}

const BlogButton = () => {
    window.location.href = 'index2.html';
}
itemClickButton("1000")
lodeData()