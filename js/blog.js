
apikey = '567ff21a30042f30b342aca35572acbc';
// 

fetch('https://gnews.io/api/v4/search?q=data&lang=en&country=ng&max=10&apikey=' + apikey)
.then(res=>{
return res.json()

}) .then(data=>{
articles = data.articles
console.log(data);
let allData="";

console.log(data)

articles.map((values, index)=>{
  
  allData+=` <div class="swiper-slide shadow-sm">
          <article class="blog-meta-five d-flex flex-column position-relative tran3s mb-60 lg-mb-50 wow fadeInUp">
  <img src=${values.image} alt="image"  class="bd-placeholder-img card-img-top" style="height: 240px;">
  
  <div><a href="blog-details.html" class="tag text-uppercase mt-20 mb-20 fw-500 tran3s">${values.title}</a></div>
 
  <div class="blog-footer d-flex align-items-center justify-content-between mt-aut">
      <div class="blog-date fw-500 tx-dark">${values.source.name}- <a href=${values.url} class="fw-normal tran3s">${values.publishedAt}</a></div>
      <a href=${values.url} class="read-more tran3s"><i class="bi bi-arrow-up-right"></i></a>
  </div> 
  </article>
          </div>
`;
console.log(values.id);
});

document.getElementById("demo").innerHTML = allData;
    console.log(demo)

}).catch((err)=>{
console.log(err)
})
   

// apikey = '567ff21a30042f30b342aca35572acbc';
// // 

// fetch('https://gnews.io/api/v4/search?q=data&lang=en&country=ng&max=10&apikey=' + apikey)
// .then(res=>{
//     return res.json()
    
// }) .then(data=>{
//     articles = data.articles
//     console.log(data);
//     let allData="";
//     const reduceData = articles.slice(0, 3)
//    console.log(reduceData)

//    reduceData.map((values, index)=>{
        
//         allData+=`<div class="col-md-4 d-flex key=${index}">
//         <article class="blog-meta-five d-flex flex-column position-relative tran3s mb-60 lg-mb-50 wow fadeInUp">
//         <img src=${values.image} alt="image"  class="bd-placeholder-img card-img-top" style="height: 240px;">
        
//         <div><a href="blog-details.html" class="tag text-uppercase mt-20 mb-20 fw-500 tran3s">${values.title}</a></div>
       
//         <div class="blog-footer d-flex align-items-center justify-content-between mt-aut">
//             <div class="blog-date fw-500 tx-dark">${values.source.name}- <a href=${values.url} class="fw-normal tran3s">${values.publishedAt}</a></div>
//             <a href=${values.url} class="read-more tran3s"><i class="bi bi-arrow-up-right"></i></a>
//         </div> 
//         </article> 		 
//         </div>
//     `;
//     console.log(values.id);
//     });
    
//     document.querySelector(".blogStories").innerHTML= allData;
    
// }).catch((err)=>{
//     console.log(err)
// })