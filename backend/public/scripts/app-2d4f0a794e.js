function newsletterSubscribeController(n,e){n.subscribe=function(a){n.error=null,e.newsletterSubscribe(a).then(function(){n.success=!0,n.email=""},function(e){n.error=e.data})}}function routesConfig(n,e,a){a.html5Mode(!0).hashPrefix("!"),e.otherwise("/"),n.state("app",{url:"/",templateUrl:"app/home/home.html",controller:"HomeController as home"}).state("app.search",{url:"search",templateUrl:"app/search/search.html",controller:"SearchController as search"}).state("app.faq",{url:"faq",templateUrl:"app/faq/faq.html",controller:"FaqController as faq"}).state("category",{url:"/category",templateUrl:"app/category/category.html",controller:"CategoryController as category"}).state("product",{url:"/product",templateUrl:"app/product/product.html",controller:"ProductController as product"}).state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"AboutController as about"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],newsletterSubscribeController.$inject=["$scope","apiService"],angular.module("app",["ui.router","ngTouch","ngAnimate","ui.bootstrap","ui.bootstrap-slider","angular-sly"]),angular.module("app").run(["$rootScope","$state","$stateParams","$window","$location",function(n,e,a,s,i){n.$state=e,n.$stateParams=a,s.ga("create","UA-89881605-1","auto"),n.$on("$stateChangeSuccess",function(n){s.ga("send","pageview",i.path())})}]),angular.module("app").service("apiService",["$http",function(n){var e=this,a="https://kwoloon-alexvanderbist.c9users.io/api/";e.newsletterSubscribe=function(e){return n({method:"POST",url:a+"newsletter",data:{email:e}})}}]),angular.module("app").controller("SearchController",function(){var n=this;n.categories=["Dogs","Cats","Fish","Birds","Other"],n.results=["a","b","c","d","e"]}),angular.module("app").controller("ProductController",function(){function n(){}var e=this;e.activeImage=0,e.images=[{url:"images/products/cooling_mat.jpg",title:"woordje tekst"},{url:"images/products/cooling_mat.jpg",title:"woordje tekst"},{url:"images/products/cooling_mat.jpg",title:"woordje tekst"}],e.relatedProducts=[{id:1,url:"images/products/cooling_mat.jpg"},{id:2,url:"images/products/cooling_mat.jpg"},{id:3,url:"images/products/cooling_mat.jpg"},{id:4,url:"images/products/cooling_mat.jpg"},{id:5,url:"images/products/cooling_mat.jpg"},{id:6,url:"images/products/cooling_mat.jpg"}],e.faq=[{question:"Why did the web designer drown?",answer:"She didn't know how to float left."},{question:"Why was the developer fired?",answer:"She was doing less everyday and getting too sassy."},{question:"Why do some developers not get along with others?",answer:"They're MEAN developers."}],n()}),angular.module("app").directive("newsletterSubscribe",function(){return{scope:{},templateUrl:"app/newsletter-subscribe/newsletter-subscribe.html",controller:newsletterSubscribeController}}),angular.module("app").controller("SidebarController",["$rootScope","$state","$timeout",function(n,e,a){function s(){a(function(){l.menuState=!1},300)}function i(){n.$on("$stateChangeStart",s)}var l=this;l.menuState=!1,i()}]),angular.module("app").directive("jumbotronSlider",function(){return{scope:{slides:"=slides"},templateUrl:"app/jumbotron-slider/jumbotron-slider.html"}}),angular.module("app").controller("HomeController",["$rootScope","$state",function(n,e){function a(n,e){e.name.includes("app.")?angular.element(document).find("body").css("overflow","hidden"):angular.element(document).find("body").css("overflow","visible")}function s(){a(null,e.current),n.$on("$stateChangeStart",a)}var i=this;i.active=0,i.slides=[{id:0,image:"images/slider/1.jpg"},{id:1,image:"images/slider/2.jpg"}],s()}]),angular.module("app").controller("FaqController",function(){var n=this;n.faqs=[{title:"Dit is een vraag",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat."},{title:"Dit is een vraag",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat."},{title:"Dit is een vraag",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat."}]}),angular.module("app").controller("CategoryController",function(){function n(){}var e=this;e.orderBy="price",e.slides=[{id:0,image:"images/slider/1.jpg"},{id:1,image:"images/slider/2.jpg"}],e.collections=[{name:"Splash 'n Fun",on:!1},{name:"Luxury",on:!1},{name:"New",on:!1},{name:"On-sale",on:!1},{name:"Other",on:!1}],e.products=[{name:"Cooling mat none",image:"images/products/happy_dog.jpg",price:25.49,multipleImages:!0,colors:!1,date:1,collection:[]},{name:"Cooling mat snf",image:"images/products/cooling_mat.jpg",price:15.49,multipleImages:!0,colors:!1,date:2,collection:["Splash 'n Fun"]},{name:"Cooling mat snf lux",image:"images/products/cooling_mat.jpg",price:33.49,multipleImages:!0,colors:!1,date:3,collection:["Splash 'n Fun","Luxury"]},{name:"Cooling mat",image:"images/products/happy_dog.jpg",price:75.49,multipleImages:!1,colors:!0,date:4,collection:["New","On-sale","Other"]},{name:"Cooling mat new sale",image:"images/products/happy_dog.jpg",price:59.49,multipleImages:!0,colors:!1,date:5,collection:["New","On-sale"]},{name:"Cooling mat new other",image:"images/products/sleeping_dog.jpg",price:405.49,multipleImages:!1,colors:!0,date:6,collection:["Luxury","New","Other"]},{name:"New Cooling Lux sale",image:"images/products/sleeping_dog.jpg",price:122.49,multipleImages:!1,colors:!0,date:7,collection:["Luxury","New","On-sale","Other"]},{name:"Cooling mat other",image:"images/products/cooling_mat.jpg",price:154.49,multipleImages:!0,colors:!1,date:8,collection:["Other"]},{name:"Cooling mat",image:"images/products/happy_dog.jpg",price:115.49,multipleImages:!1,colors:!0,date:9,collection:["Splash 'n Fun","Luxury","New","On-sale","Other"]},{name:"Cooling mat",image:"images/products/cooling_mat.jpg",price:125.49,multipleImages:!1,colors:!0,date:10,collection:["Splash 'n Fun","Luxury","New","On-sale","Other"]}],e.showAll=!0,e.priceFilter=function(n){return n.price>e.filter.price[0]&&n.price<e.filter.price[1]},e.collectionFilter=function(n){if(e.showAll)return!0;var a=!1;for(var s in e.collections){var i=e.collections[s];if(console.log(i),i.on){if(n.collection.indexOf(i.name)===-1)return!1;a=!0}}return a},e.checkChange=function(){for(var n in e.collections)if(e.collections[n].on)return void(e.showAll=!1);e.showAll=!0},n()}),angular.module("app").controller("AboutController",function(){function n(){}var e=this;e.slides=[{id:0,image:"images/slider/1.jpg"},{id:1,image:"images/slider/2.jpg"}],e.faq=[{question:"Why did the web designer drown?",answer:"She didn't know how to float left."},{question:"Why was the developer fired?",answer:"She was doing less everyday and getting too sassy."},{question:"Why do some developers not get along with others?",answer:"They're MEAN developers."}],n()}),angular.module("app").config(routesConfig),angular.module("app").directive("escKey",function(){return function(n,e,a){e.bind("keydown keypress",function(e){27===e.which&&(n.$apply(function(){n.$eval(a.escKey)}),e.preventDefault())})}}).directive("autofocus",["$timeout",function(n){return{restrict:"A",link:function(e,a){n(function(){a[0].focus()})}}}]),angular.module("app").run(["$templateCache",function(n){n.put("app/about/about.html",'<jumbotron-slider slides="about.slides"></jumbotron-slider>\n<div class="container about-container">\n  <section class="breadcrumbs">\n    <a class="logo kowicon-k"></a>\n    <a class="tag">About us</a>\n  </section>\n  <h1 class="text-uppercase">About us</h1>\n  <div class="row">\n    <div class="col-md-9">\n      <h2 class="text-uppercase">Kowloon</h2>\n      <p>Pet Concept, active since 1998, is developing, importing and exporting products for pets worldwide.</p>\n      <p>natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore\n        veritatis et quasi architecto beatae vitae sequi nesciunt.</p>\n      <form class="contact-form">\n        <h2 class="text-uppercase">Leave us a message</h2>\n        <div class="row">\n          <div class="col-md-4">\n            <div class="form-group">\n              <label for="email">E-mail</label>\n              <input type="email" class="form-control" id="email" placeholder="name@domain.com">\n            </div>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="message">Your message</label>\n          <textarea class="form-control" rows="5" id="message">Write your own message here.</textarea>\n        </div>\n        <div class="row">\n          <div class="col-md-4">\n            <button type="submit" class="btn btn-block btn-lg btn-pink">Send</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class="col-md-3">\n      <div class="contact-box">\n        <h2 class="text-uppercase">Contact</h2>\n        <ul>\n          <li>Deckx Johan</li>\n          <li>Bosdreef 7</li>\n          <li>2020 Herentals</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class="about-faq">\n    <h2 class="text-uppercase">Frequently asked question</h2>\n    <uib-accordion>\n      <div uib-accordion-group class="panel-dark" is-open="status[$index].open" ng-repeat="faq in about.faq track by $index">\n        <uib-accordion-heading>\n          <i class="pull-right glyphicon" ng-class="{\'glyphicon-triangle-bottom\': status[$index].open, \'glyphicon-triangle-right\': !status[$index].open}"></i>          {{faq.question}}\n        </uib-accordion-heading>\n        {{faq.answer}}\n      </div>\n    </uib-accordion>\n  </div>\n</div>\n'),n.put("app/category/category.html",'<jumbotron-slider slides="category.slides"></jumbotron-slider>\n\n<div class="container container-category">\n\n  <section class="breadcrumbs">\n    <a class="logo kowicon-k"></a>\n    <a class="tag tag-category">Dogs</a>\n    <a class="tag">Splash \'n Fun\n  </a></section>\n\n  <h1 class="text-uppercase">Dog articles</h1>\n\n  <div class="filter filter-light">\n    <h2 ng-click="filterCollapsed = !filterCollapsed" ng-init="filterCollapsed = true" class="advanced-search-toggle small-header">\n      Filter\n      <small>\n        <span class="glyphicon glyphicon-triangle-bottom" ng-hide="filterCollapsed" aria-hidden="true"></span>\n        <span class="glyphicon glyphicon-triangle-right" ng-hide="!filterCollapsed" aria-hidden="true"></span>\n      </small>\n    </h2>\n\n    <div class="filter-collapse" uib-collapse="filterCollapsed">\n\n      <h3>By collection</h3>\n      <label class="checkbox-inline" ng-repeat="collection in category.collections">\n        <input type="checkbox" ng-model="collection.on" ng-change="category.checkChange()">{{collection.name}}\n      </label>\n\n      <h3>Price range</h3>\n\n      <div class="row price-range">\n        <div class="col-md-6">\n          <slider class="slider-light" ng-model="category.filter.price" range="true" min="0" step="1" tooltip="hide" max="500" value="testOptions.value"></slider>\n        </div>\n        <div class="col-md-6">\n          <div class="col-xs-5">\n            <div class="input-group input-group-lg">\n              <span class="input-group-addon">&euro;</span>\n              <input type="text" ng-model="category.filter.price[0]" ng-value="category.filter.price[0] | number : 2" class="form-control">\n            </div>\n          </div>\n          <div class="col-xs-2 text-center">\n            <p class="h4">-</p>\n          </div>\n          <div class="col-xs-5">\n            <div class="input-group input-group-lg">\n              <span class="input-group-addon">&euro;</span>\n              <input type="text" ng-model="category.filter.price[1]" ng-value="category.filter.price[1] | number : 2" class="form-control">\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <hr>\n\n  <div class="btn-group btn-sorting" uib-dropdown keyboard-nav>\n    <button type="button" class="btn btn-dark" uib-dropdown-toggle>\n      Sort by {{category.orderBy}}<span class="caret"></span>\n    </button>\n    <ul class="dropdown-menu" uib-dropdown-menu role="menu">\n      <li role="menuitem" ng-click="category.orderBy = \'price\'"><a href="#">Price: low to high</a></li>\n      <li role="menuitem" ng-click="category.orderBy = \'-price\'"><a href="#">Price: high to low</a></li>\n      <li role="menuitem" ng-click="category.orderBy = \'date\'"><a href="#">Latest</a></li>\n      <li role="menuitem" ng-click="category.orderBy = \'-date\'"><a href="#">Oldest</a></li>\n    </ul>\n  </div>\n\n  <span class="pull-right">Dog items: <strong>5 of 44</strong></span>\n\n  <div class="row">\n    <div class="col-md-6 col-md-push-6">\n      <div class="product product-featured">\n        <div class="image">\n          <img src="images/products/cooling_mat.jpg" alt="Cooling Mat">\n          <ul class="colors">\n            <li style="background: white">White</li>\n            <li style="background: black">Black</li>\n            <li style="background: blue">Blue</li>\n          </ul>\n        </div>\n        <div class="information">\n          <a ui-sref="product" class="title">\n            Cooling mat\n          </a>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, odio ut aliquam vulputate, lacus velit consequat lorem,\n            at blandit odio justo elementum ipsum. Etiam gravida quam a ex feugiat, et fermentum justo viverra.\n          </p>\n          <span class="price">&euro; 15,49</span>\n          <a ui-sref="product" class="btn btn-pink btn-more-info pull-right">Want to know more?</a>\n        </div>\n      </div>\n    </div>\n    <div class="col-md-6 col-md-pull-6">\n      <div class="row">\n        <div class="col-md-6" ng-repeat="product in category.products | filter:category.collectionFilter | filter:category.priceFilter | orderBy: category.orderBy | limitTo:4:0">\n          <div class="product" ng-class="{\'multiple-images\' : product.multipleImages}">\n            <div class="image" ng-style="{backgroundImage: \'url(\'+product.image+\')\'}">\n              <a ui-sref="product" class="overlay">\n                <span class="kowicon-product"></span>\n                view details\n              </a>\n              <div class="photo-count" ng-show="product.multipleImages">\n                4\n              </div>\n              <ul class="colors" ng-show="product.colors">\n                <li style="background: white">White</li>\n                <li style="background: black">Black</li>\n                <li style="background: blue">Blue</li>\n              </ul>\n            </div>\n            <div class="information">\n              <a ui-sref="product" class="title">\n                {{product.name}}\n              </a>\n              <span class="price">&euro; {{product.price}}</span>\n            </div>\n          </div>\n          <!-- breaks the items up into rows -->\n          <br ng-if="!(($index + 1) % 2)">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-md-3" ng-repeat="product in category.products | filter:category.collectionFilter | filter:category.priceFilter | orderBy: category.orderBy | limitTo:20:4">\n      <div class="product" ng-class="{\'multiple-images\' : product.multipleImages}">\n        <div class="image" ng-style="{backgroundImage: \'url(\'+product.image+\')\'}">\n          <a ui-sref="product" class="overlay">\n            <span class="kowicon-product"></span>\n            view details\n          </a>\n          <div class="photo-count" ng-show="product.multipleImages">\n            4\n          </div>\n          <ul class="colors" ng-show="product.colors">\n            <li style="background: white">White</li>\n            <li style="background: black">Black</li>\n            <li style="background: blue">Blue</li>\n          </ul>\n        </div>\n        <div class="information">\n          <a ui-sref="product" class="title">\n            {{product.name}}\n          </a>\n          <span class="price">&euro; {{product.price}}</span>\n        </div>\n      </div>\n      <!-- breaks the items up into rows -->\n      <br ng-if="!(($index + 1) % 4)">\n    </div>\n  </div>\n\n</div>\n<!-- end-container -->\n'),n.put("app/faq/faq.html",'<div class="container faq">\n  <h1 class="hidden-xs">Frequently asked questions</h1>\n  <span class="h1 visible-xs">FAQ</span>\n\n  <div class="big-search big-search-dark">\n    <div class="input-group input-group-lg search">\n      <div class="input-group-addon">\n        <span class="glyphicon glyphicon-search glyph-flipped" aria-hidden="true"></span>\n      </div>\n      <div class="placeholder" ng-hide="searchQuery">\n        Search on keyword <span class="kowicon kowicon-enter hidden-xs"></span>\n      </div>\n      <input type="text" ng-model="searchQuery" autofocus esc-key="$state.go(\'app\')" class="form-control">\n    </div>\n    <a href="#" ng-click="searchQuery=\'\'" ng-show="searchQuery" class="pull-right">\n      <span class="glyphicon glyphicon-remove"></span> Clear\n    </a>\n  </div>\n\n  <p>\n    Don’t find what you’re looking for?<br>\n    You can always contact our <a ui-sref="contact">customer service</a>. We’re happy to help you!\n  </p>\n  \n  <div class="faq-questions">\n    <div class="well well-lg" ng-repeat="question in faq.faqs">\n      <h2>{{question.title}}</h2>\n      <p>\n        {{question.content}}\n      </p>\n    </div>\n  </div>\n</div>\n'),n.put("app/home/home.html",'<div class="fs-overlay" ng-show="$state.current.name != \'app\'">\n  <a ui-sref="app" class="overlay-close">\n    X\n    <span class="hidden-xs">esc</span>\n  </a>\n  <ui-view autoscroll></ui-view>\n</div>\n\n<jumbotron-slider slides="home.slides"></jumbotron-slider>\n\n<div class="container">\n  <p class="intro">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Duis\n    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  </p>\n\n  <div class="row categories">\n    <div class="col-sm-2 col-xs-6">\n      <a href="#">\n        <span class="kowicon-dogs"></span> Dogs\n      </a>\n    </div>\n    <div class="col-sm-2 col-xs-6">\n      <a href="#">\n        <span class="kowicon-cats"></span> Cats\n      </a>\n    </div>\n    <div class="col-sm-2 col-xs-6">\n      <a href="#">\n        <span class="kowicon-fish"></span> Fish\n      </a>\n    </div>\n    <div class="col-sm-2 col-xs-6">\n      <a href="#">\n        <span class="kowicon-birds"></span> Birds\n      </a>\n    </div>\n    <div class="col-sm-2 col-xs-6">\n      <a href="#">\n        <span class="kowicon-small_animals"></span> Small animals\n      </a>\n    </div>\n    <div class="col-sm-2 col-xs-6">\n      <a href="#">\n        <span class="kowicon-plus small"></span> Other\n      </a>\n    </div>\n  </div>\n\n  <div class="product-grid">\n    <h1>Hot items.</h1>\n    <div class="row row-padding-sm visible-xs">\n      <div class="col-xs-3">\n        <div class="product">\n          <div class="image" style="background-image:url(\'images/products/cooling_mat.jpg\')">\n          </div>\n        </div>\n      </div> \n      <div class="col-xs-3">\n        <div class="product">\n          <div class="image" style="background-image:url(\'images/products/cooling_mat.jpg\')">\n          </div>\n        </div>\n      </div> \n      <div class="col-xs-3">\n        <div class="product">\n          <div class="image" style="background-image:url(\'images/products/cooling_mat.jpg\')">\n          </div>\n        </div>\n      </div> \n      <div class="col-xs-3">\n        <div class="product">\n          <div class="image" style="background-image:url(\'images/products/cooling_mat.jpg\')">\n          </div>\n        </div>\n      </div>  \n    </div>\n    <div class="row hidden-xs">\n      <div class="col-md-3">\n        <div class="product multiple-images">\n          <div class="image" style="background-image:url(\'images/products/cooling_mat.jpg\')">\n            <a ui-sref="product" class="overlay">\n              <span class="kowicon-product"></span>\n              view details\n            </a>\n            <div class="photo-count">\n              4\n            </div>\n          </div>\n          <div class="information">\n            <a href="#" class="title">\n              Cooling mat\n            </a>\n            <span class="price">&euro; 15,49</span>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-md-3">\n        <div class="product">\n          <div class="image" style="background-image:url(\'images/products/happy_dog.jpg\')">\n            <a ui-sref="product" class="overlay">\n              <span class="kowicon-product"></span>\n              view details\n            </a>\n            <ul class="colors">\n              <li style="background: white">White</li>\n              <li style="background: black">Black</li>\n              <li style="background: blue">Blue</li>\n            </ul>\n          </div>\n          <div class="information">\n            <a href="#" class="title">\n              Cooling mat\n            </a>\n            <span class="price">&euro; 15,49</span>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-md-3">\n        <div class="product">\n          <div class="image" style="background-image:url(\'images/products/cooling_mat.jpg\')">\n            <a ui-sref="product" class="overlay">\n              <span class="kowicon-product"></span>\n              view details\n            </a>\n            <ul class="colors">\n              <li style="background: white">White</li>\n              <li style="background: black">Black</li>\n              <li style="background: blue">Blue</li>\n            </ul>\n          </div>\n          <div class="information">\n            <a href="#" class="title">\n              Cooling mat\n            </a>\n            <span class="price">&euro; 15,49</span>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-md-3">\n        <div class="product">\n          <div class="image" style="background-image:url(\'images/products/sleeping_dog.jpg\')">\n            <a ui-sref="product" class="overlay">\n              <span class="kowicon-product"></span>\n              view details\n            </a>\n            <ul class="colors">\n              <li style="background: white">White</li>\n              <li style="background: black">Black</li>\n              <li style="background: blue">Blue</li>\n            </ul>\n          </div>\n          <div class="information">\n            <a href="#" class="title">\n              Cooling mat\n            </a>\n            <span class="price">&euro; 15,49</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="bottom-links">\n      <a href="#">Visit the store</a>\n    </div>\n  </div>\n\n  <newsletter-subscribe></newsletter-subscribe>\n\n</div><!-- container-end -->\n'),n.put("app/jumbotron-slider/jumbotron-slider.html",'<div class="jumbotron">\n  <div class="logo">\n    <img src="images/logo.svg" alt="Kowloon">\n  </div>\n  <div uib-carousel active="true" interval="5000">\n    <div uib-slide ng-repeat="slide in slides track by slide.id" index="slide.id" class="slider-slide" ng-style="{backgroundImage: \'url(\'+slide.image+\')\'}"></div>\n</div>\n</div>\n'),n.put("app/layout/layout.html","<div ng-include=\"'app/layout/sidebar.html'\"></div>\n\n<ui-view></ui-view>"),n.put("app/layout/sidebar.html",'<div ng-controller="SidebarController as sidebar">\n  <!-- Toggle icon outside of main <nav> so mobile doesnt hide it -->\n  <a href="#" class="toggle-icon toggle-icon-mobile" ng-click="sidebar.menuState = !sidebar.menuState">\n    <span class="kowicon-menu"></span>\n  </a>\n  <nav class="sidebar" ng-class="sidebar.menuState ? \'sidebar-menu-expanded\' : \'sidebar-menu-collapsed\'">\n    <a href="#" class="toggle-icon" ng-click="sidebar.menuState = !sidebar.menuState">\n      <span class="kowicon-menu"></span>\n    </a>\n    <ul class="main">\n      <li>\n        <a ui-sref="app.search" ui-sref-active="active" title="Search">\n          <span class="kowicon-search"></span>\n          Search\n        </a>\n      </li>\n      <li>\n        <a ui-sref="app.faq" ui-sref-active="active" title="FAQ">\n          <span class="kowicon-faq"></span>\n          FAQ\n        </a>\n      </li>\n      <li class="divider"></li>\n      <li>\n        <a href="#" title="About" ui-sref="about" ui-sref-active="active">\n          <span class="kowicon-contact"></span>\n          About us\n        </a>\n      </li>\n      <li class="divider"></li>\n    </ul>\n\n    <ul class="categories">\n      <li class="dogs">\n        <a ui-sref="category" ui-sref-active="active" ng-class="{\'active\': $state.current.name == \'product\'}" title="Dogs">\n          <span class="kowicon-dogs"></span>\n          Dogs\n        </a>\n      </li>\n      <li class="cats">\n        <a href="#" title="Cats">\n          <span class="kowicon-cats"></span>\n          Cats\n        </a>\n      </li>\n      <li class="fish">\n        <a href="#" title="Fish">\n          <span class="kowicon-fish"></span>\n          Fish\n        </a>\n      </li>\n      <li class="birds">\n        <a href="#" title="Birds">\n          <span class="kowicon-birds"></span>\n          Birds\n        </a>\n      </li>\n      <li class="small_animals">\n        <a href="#" title="Small animals">\n          <span class="kowicon-small_animals"></span>\n          Small animals\n        </a>\n      </li>\n      <li class="other">\n        <a href="#" title="Other">\n          <span class="kowicon-plus"></span>\n          Other\n        </a>\n      </li>\n    </ul>\n\n    <a ui-sref="app" id="logo-icon" title="Home">\n      <span class="kowicon-k collapsed"></span>\n      <img src="images/logo-sm.svg" class="expanded" alt="">\n    </a>\n  </nav>\n\n</div>\n'),n.put("app/newsletter-subscribe/newsletter-subscribe.html",'<div class="row newsletter">\n  <div class="col-md-8 bg">\n    <h1>\n      discover amazing Kowloon deals!\n      <span>\n        only in our newsletter\n      </span>\n    </h1>\n  </div>\n  <div class="col-md-4 form">\n    <div>\n      <h2>Subscribe to our newsletter</h2>\n      <p>Lorum ipsum dolor sit amet.</p>\n      <div class="alert alert-warning" ng-show="error && !success">\n        <button type="button" class="close" ng-click="error = null" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        {{error}}\n      </div>\n      <div class="alert alert-success" ng-show="success">Thank you! You\'ve been subscribed to the newsletter.</div>\n      <form ng-submit="subscribe(email)" ng-hide="success">\n        <div class="input-group input-group-lg">\n          <input type="email" required class="form-control" ng-model="email" placeholder="Name @ domain.com">\n          <span class="input-group-btn">\n            <button class="btn btn-dark" type="submit">OK</button>\n          </span>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n'),n.put("app/search/search.html",'<div class="container search">\n  <div class="filter">\n    <h2 ng-click="advancedSearchCollapsed = !advancedSearchCollapsed" ng-init="advancedSearchCollapsed = true" class="advanced-search-toggle">\n      Advanced filter\n      <small>\n        <span class="glyphicon glyphicon-triangle-bottom" ng-hide="advancedSearchCollapsed" aria-hidden="true"></span>\n        <span class="glyphicon glyphicon-triangle-right" ng-hide="!advancedSearchCollapsed" aria-hidden="true"></span>\n      </small>\n    </h2>\n\n    <div class="filter-collapse" uib-collapse="advancedSearchCollapsed">\n      <div class="row">\n        <div class="col-md-6">\n          <h3>Category</h3>\n          <label class="checkbox-inline" ng-repeat="category in search.categories">\n          <input type="checkbox" value="{{category}}"> {{category}}\n        </label>\n        </div>\n        <div class="col-md-6 price-range">\n          <h3>Price range</h3>\n          <slider ng-model="search.price" range="true" min="0" step="1" tooltip="hide" max="500" value="testOptions.value"></slider>\n          <div class="row">\n            <div class="col-xs-5">\n              <div class="input-group input-group-lg">\n                <span class="input-group-addon">&euro;</span>\n                <input type="text" ng-model="search.price[0]" ng-value="search.price[0] | number : 2" class="form-control">\n              </div>\n            </div>\n            <div class="col-xs-2 text-center">\n              <p class="h4">-</p>\n            </div>\n            <div class="col-xs-5">\n              <div class="input-group input-group-lg">\n                <span class="input-group-addon">&euro;</span>\n                <input type="text" ng-model="search.price[1]" ng-value="search.price[1] | number : 2" class="form-control">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="big-search">\n    <div class="input-group input-group-lg search">\n      <div class="input-group-addon">\n        <span class="glyphicon glyphicon-search glyph-flipped" aria-hidden="true"></span>\n      </div>\n      <div class="placeholder hidden-xs" ng-hide="searchQuery">\n        Just start typing and hit <span class="kowicon kowicon-enter"></span> to search\n      </div>\n      <div class="placeholder visible-xs" ng-hide="searchQuery">\n        Type to search\n      </div>\n      <input type="text" ng-model="searchQuery" autofocus esc-key="$state.go(\'app\')" class="form-control">\n    </div>\n    <a href="#" ng-click="searchQuery=\'\'" ng-show="searchQuery" class="pull-right">\n      <span class="glyphicon glyphicon-remove"></span> Clear\n    </a>\n  </div>\n\n  <div class="results" ng-show="searchQuery">\n    <p>{{search.results.length || 0}} results for "{{searchQuery}}"</p>\n    <div class="well" ng-repeat="product in search.results"></div>\n  </div>\n\n  <div ng-show="search.results.length == 0" class="no-results">\n    <p>\n      Try checking spelling or tweaking it. Maybe use fewer words or a more general search term.<br> If you still have\n      no luck you can contact our Customer service.\n    </p>\n  </div>\n</div>\n'),n.put("app/product/product.html",'<div class="container product-detail">\n  <div class="logo-big">\n    <img src="images/logo.svg" alt="Kowloon">\n  </div>\n\n  <div class="row">\n    <div class="col-md-6 col-md-push-6">\n      <section class="breadcrumbs">\n        <a class="logo kowicon-k"></a>\n        <a class="tag tag-category">Dogs</a>\n        <a class="tag">Splash \'n Fun</a>\n      </section>\n\n      <h1 class="text-uppercase">Cooling mat</h1>\n\n      <span class="price">&euro; 15,49</span>\n\n      <h2>Colors</h2>\n      <ul class="colors">\n        <li style="background: white">White</li>\n        <li style="background: black">Black</li>\n        <li style="background: blue">Blue</li>\n      </ul>\n\n      <h2>Description</h2>\n      <p>Hier komt een de volledige beschrijvende tekst met een max. aantal karakters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea clit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat consectetur.</p>\n    </div>\n    <div class="col-md-6 col-md-pull-6">\n      <div class="image-gallery">\n        <div class="image">\n          <div class="expand">\n            <div class="kowicon kowicon-plus"></div>\n          </div>\n          <img ng-src="{{product.images[activeImage].url}}" ng-init="activeImage = 0" alt="{{product.images[activeImage].title}}">\n        </div>\n        <div class="thumbnails row row-padding-sm">\n          <div class="thumb col-xs-4" ng-repeat="image in product.images track by $index" ng-click="$parent.activeImage = $index" ng-class="{\'active\': $index == $parent.activeImage}">\n            <div class="image">\n              <img ng-src="{{image.url}}" alt="{{image.title}}">\n            </div>\n            <div class="title hidden-xs">{{image.title}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="specifications">\n    <h2>Specifications</h2>\n\n    <h3 class="text-uppercase">Dimensions</h3>\n    <p>\n      <span><strong>S</strong> - &empty; 53x18cm</span>\n      <span><strong>M</strong> - &empty; 53x18cm</span>\n      <span><strong>L</strong> - &empty; 53x18cm</span>\n    </p>\n\n    <h3 class="text-uppercase">Title</h3>\n    <p>\n      <span><strong>S</strong> - hier komt technische tekst</span>\n    </p>\n\n  </div>\n\n  <div class="related-products">\n    <h2 class="text-uppercase">Related products</h2>\n\n    <div class="slider">\n      <div class="frame" id="relatedSly">\n        <div class="slidee">\n          <div class="slide product" ng-repeat="related in product.relatedProducts" sly-horizontal-repeat>\n            <div class="image" ng-style="{backgroundImage: \'url(\'+related.url+\')\'}">\n              <div class="overlay">\n                <span class="kowicon-product"></span>\n                view details\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="controls">\n        <button class="prevPage"><span class="kowicon kowicon-prev"></span></button>\n        <button class="nextPage"><span class="kowicon kowicon-next"></span></button>\n      </div>\n    </div>\n\n    <div class="bottom-links">\n      <a href="#">view more</a>\n    </div>\n  </div>\n\n  <div class="product-faq">\n\n    <uib-accordion>\n      <div uib-accordion-group class="panel-dark" is-open="status[$index].open" ng-repeat="faq in product.faq track by $index">\n        <uib-accordion-heading>\n          <i class="pull-right glyphicon" ng-class="{\'glyphicon-triangle-bottom\': status[$index].open, \'glyphicon-triangle-right\': !status[$index].open}"></i>\n          {{faq.question}}\n        </uib-accordion-heading>\n        {{faq.answer}}\n      </div>\n    </uib-accordion>\n\n    <div class="bottom-links">\n      <a href="#">More questions?</a>\n    </div>\n  </div>\n\n  <newsletter-subscribe></newsletter-subscribe>\n\n</div>\n');
}]);
//# sourceMappingURL=../maps/scripts/app-2d4f0a794e.js.map
