apikey = '567ff21a30042f30b342aca35572acbc';


fetch('https://gnews.io/api/v4/search?q=data&lang=en&country=ng&max=30&apikey=' + apikey)
.then(res=>{
    return res.json()
    
}) .then(data=>{
    articles = data.articles
    console.log(data);
    let allData="";
    

   articles.map((values)=>{
        
        allData+=`<div class="col-md-6 d-flex">
        <article class="blog-meta-five d-flex flex-column position-relative tran3s mb-60 lg-mb-50 wow fadeInUp" id="blog-meta-5">
        <img src=${values.image} alt="image"  class="bd-placeholder-img card-img-top" style="height: 240px;">
            <div><a href="blog-details.html" class="tag text-uppercase fw-500 tran3s blogTopic mt-20 mb-20">${values.title}</a></div>
            <div class="post-data mt-20 mb-20 lg-mb-50">
                <a href="blog-details.html"><h4 class="tran3s blog-title">${values.content.slice(0, 253)}</h4></a>
            </div>
            <div class="blog-footer d-flex align-items-center justify-content-between ">
                <div class="blog-date fw-500 tx-dark">${values.source.name} - <a href=${values.url} class="fw-normal tran3s">${values.publishedAt.slice(0, 10)}</a></div>
                <a href=${values.url} class="read-more tran3s"><i class="bi bi-arrow-up-right"></i></a>
            </div> <!-- /.blog-footer -->
        </article> <!-- /.blog-meta-five -->
    </div>
    `;
    });
    
    document.querySelector(".blogStories").innerHTML= allData;
    
}).catch((err)=>{
    console.log(err)
})