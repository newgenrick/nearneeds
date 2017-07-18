'use strict';
angular.module('productSlideWidget').component('productSlideWidget',{
    templateUrl : 'product-slide-widget/product-slide-widget.template.html',
    styleUrls   : ['bower_components/jquery/dist/jquery.min.js','product-slide-widget/product-slide-widget.template.js'],
    controller  : function slideController(){
        this.cards =[ {
            name:"Drill Machine",
            image:"https://cdnx1.moglix.com/p/I/O/U/d/MINIOUTFIU70W-xlarge.jpg"
        },{
            name:"Drill Machine",
            image:"https://cdnx1.moglix.com/p/I/O/U/d/MINIOUTFIU70W-xlarge.jpg"
        },{
            name:"Drill Machine",
            image:"https://cdnx1.moglix.com/p/I/O/U/d/MINIOUTFIU70W-xlarge.jpg"
        },{
            name:"Drill Machine",
            image:"https://cdnx1.moglix.com/p/I/O/U/d/MINIOUTFIU70W-xlarge.jpg"
        },{
            name:"Drill Machine",
            image:"https://cdnx1.moglix.com/p/I/O/U/d/MINIOUTFIU70W-xlarge.jpg"
        },{
            name:"Drill Machine",
            image:"https://cdnx1.moglix.com/p/I/O/U/d/MINIOUTFIU70W-xlarge.jpg"
        }];
    }
})
