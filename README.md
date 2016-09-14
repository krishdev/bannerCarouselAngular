##Angular Custom Banner Carousel

####Dependencies:

1. js
  * [jQuery](https://code.jquery.com/jquery-3.1.0.min.js)
  * [AngularJS](https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js)
2. CSS 
  * [animate.css](https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css)

------------------------------------------------------------------
##Steps to make it work:
1. ####Add the dependencies in head
 

  ```html
  <head>
    <link rel=”stylesheet” href=”http://krishdev.com/openSource/custom-banner-angular/bannerCarousel.css”>
    <link rel=”stylesheet” href=”https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css”>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.5.6/angular-material.min.js"></script>
    <script src=”http://krishdev.com/openSource/custom-banner-angular/bannerCarousel.js”></script>
  </head>
  ```
2. ####Add the element in body
  
  ```html
  <body>
    <slide-through></slide-through>
  </body>
  ```
  ######Attributes -
  Attribute | Type / Usage
------------ | -------------
banner |	String / Array scope array that contains images
button |	Boolean scope
animate |	String name of the class in animate.css
delay |	String 
items |	String number of images to show per slide – 1 to 3 - default 1


## License
Custom Banner Carousel - Angular is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contribution
Encourage improvements over Custom Banner Carousel. Would like to see the work on plunker before requesting a merge. Naming convensions should be camelCase.
