window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            
        },	
        axisY: {
            titleFontColor: "black",
            lineColor: "white",
            labelFontColor: "black",
            tickColor: "black",
           },
        axisY2: {
            titleFontColor: "black",
            lineColor: "black",
            labelFontColor: "black",
            tickColor: "black"
        },	
        toolTip: {
            shared: true
        },
        dataPointWidth: 40,
        data: [{
            type: "column",	
            axisYType: "secondary",
            //showInLegend: true,
            color:"lightgreen",
            dataPoints:[
                { label: "Dec 21", y: 275 },
                { label: "Dec 22", y: 283 },
                { label: "Dec 23", y: 286 },
                { label: "Dec 24", y: 288 },
                { label: "Dec 25", y: 293 },
                { label: "Dec 26", y: 297 },
                { label: "Dec 27", y:299.8}
            ]
        },
        {
            type: "column",
            name: "Proven Oil Reserves (bn)",
            legendText: "Proven Oil Reserves",
            //showInLegend: true, 
        }]
    });
    chart.render();
    
        // function toggleDataSeries(e) {
        //     if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        //         e.dataSeries.visible = false;
        //     }
        //     else {
        //         e.dataSeries.visible = true;
        //    }
        //     chart.render();
        // }
    
    

    $(".progress").each(function(){
  
        var $bar = $(this).find(".bar");
        var $val = $(this).find("span");
        var perc = parseInt( $val.text(), 10);
      
        $({p:0}).animate({p:perc}, {
          duration: 3000,
          easing: "swing",
          step: function(p) {
            $bar.css({
              transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
              // 45 is to add the needed rotation to have the green borders at the bottom
            });
            $val.text(p|0);
          }
        });
      });

    }