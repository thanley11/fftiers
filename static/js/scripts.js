$(function() {                                                                 
    $("#sortMe").sortable({                                                    
        update: function(event, ui){                                             
            var item_order = $(this).sortable('toArray');                    
            console.log(item_order);                                                                                                                         
     $.post('save.py', {list: item_order}, function(o) {              
                    console.log(o);                                              
              }, 'json');                                                      
            }                                                                        
          });                                                                          
     
    $(".players").sortable({                                                    
        update: function(event, ui){                                             
            var item_order = $(this).sortable('toArray');                    
            console.log(item_order);                                                                                                                         
            var player_id = $(this).find('h2').attr('id');
            $.ajax({
                type: "GET",
                url: $SCRIPT_ROOT + "/sort" + '/' + player_id,
                contentType: "application/json; charset=utf-8",
                data: {list: item_order},
                success: function(data) {
                    $('.players').text(data.value);
                }   
               });                                            
        }                                                                        
     });
   
    $(".player").click(function(){
        $(this).toggleClass('highlighted');
    });

    $("#sortMe2").sortable({                                                    
        update: function(event, ui){                                             
            var item_order = $(this).sortable('toArray');                    
            console.log(item_order);                                                                                                                         
            $.ajax({
                type: "GET",
                url: $SCRIPT_ROOT + "/sort/",
                contentType: "application/json; charset=utf-8",
                data: {list: item_order},
                success: function(data) {
                    $('.players').text(data.value);
            }
        });                                            
            }                                                                        
          });
    $("#submitBtn").click(function() {
        $.ajax({
            type: "GET",
            url: $SCRIPT_ROOT + "/echo/",
            contentType: "application/json; charset=utf-8",
            data: {echoValue: $('input[name="echoText"]').val() },
            success: function(data) {
                $('#echoResult').text(data.value);
            }
        });
    });
        

    $('#clickme').click(function(){
        alert('Im going to start processing');
         $.ajax({
                url: "static/save.py",
                type: "post",
                datatype:"json",
                data: {'key':'value','key2':'value2'},
                success: function(response){
                        alert(response.message);
                        alert(response.keys);
                    }
            });
        });

    $('a#calculate').bind('click', function(){
        $.getJSON($SCRIPT_ROOT + '/_add_numbers', {
            a: $('input[name="a"]').val(),
            b: $('input[name="b"]').val()
        }, function(data) {
            $("#result").text(data.result);
        });
        return false;
      });
    });
