$(function() {
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
    $(".QBs, .RBs").sortable({                                                    
        update: function(event, ui){                                             
            var item_order = $(this).sortable('toArray',{attribute:'data-id'});                    
            console.log(item_order);                                                                                                                         
            $.ajax({
                type: "POST",
                url: $SCRIPT_ROOT + "/sort/",
                contentType: "application/json; charset=utf-8",
                data: {pid: $(this).data('pid')},
                success: function(data) {
                    $('.players').html(data.value);
                   // pid = data;
                }   
               });                                            
        }                                                                        
     });
$(function () {
        $("#follow_unfollow_toggle").click(function () {
                    $.ajax({
            type: "POST",
            url: "/sort/",
            data: { 'qid': $(this).data('qid') },
            success: function (e) {
                            alert('Success!');
                                        }
});
                    });
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
        
    $(".players1").sortable({                                                    
        update: function(event, ui){                                             
            var item_order = $(this).sortable('toArray'); //, {attribute:'player_id'});                    
            console.log(item_order);                                                                                                                         
     $.post('/sort/', {list: item_order}, function(o) {              
                    console.log(o);                                              
              }, 'json');                                                      
            }                                                                        
          });                                                                          
      

   
    $(".player11").click(function(){
        $(this).toggleClass('highlighted');
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
