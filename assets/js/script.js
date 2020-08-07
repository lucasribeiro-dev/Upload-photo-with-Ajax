$(function(){

    $('button').on('click', function(){ 
		var date = new FormData();
        
        var arq = $('#image')[0].files; 

        if(arq.length > 0) {

            date.append('name', $('#name').val());

			date.append('image', arq[0]);


            $.ajax({
				type:'POST',
				url:'to_recive.php',
				data:date,
				contentType:false,
				processData:false,
				success:function(msg){
					alert(msg);
                }
            });

        }

       
        
    });
    
});


