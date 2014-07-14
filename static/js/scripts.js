$(function() {

    $("#QBs, #RBs, #WRs, #TEs, #DEFs, #Ks").sortable({ 
        connectWith: ".sortable",
        update: function(event, ui){                                             
            var qb_order = $("#QBs").sortable('toArray',{attribute:'data-pid'});
            var rb_order = $("#RBs").sortable('toArray',{attribute:'data-pid'});
            console.log(qb_order, rb_order);                                                                                                                         
            $.ajax({
                type: "POST",
                url: $SCRIPT_ROOT + "/sort/",
                dataType: 'json',
                // this was causing problems reading the variable items and returning undefined values
                // contentType: "application/json; charset=utf-8",
                data: {'pid' : qb_order+','+rb_order},
                // []=2[]=1
                success: function(data) {
                    console.log(data);
                }   
               });                                            
        }                                                                        
     });

    $(".players2").sortable({                                                    
        update: function(event, ui){                                             
           // var player_id = $('.player').data('pid');  //.find('h2').attr('pid');
           // console.log(player_id);                                                                                                                         
            var item_order = $(this).sortable('toArray');//,{attribute:'pid'});// {attribute:'player_id' });                    
            console.log(item_order);                                                                                                                         
            $.ajax({
                type: "POST",
                url: $SCRIPT_ROOT + "/sort/",
                contentType: "application/json; charset=utf-8",
                data: {'pid': item_order},   // 'csrfmiddlewaretoken': '{{csrf_token}}'},
                success: function(data) {
                    alert('Success!');
                    console.log(data);
                },
                error: function(rs, e){
                    alert(rs.responseText);
                }
                });                                            
                }                                                                        
          });

    $(".player11").click(function(){
        $(this).toggleClass('highlighted');
    });



    });
