<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
	<title>Ваш сайт</title>
	
	
	
<script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://www.google.com/jsapi"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"></script>
<script type="text/javascript" src="https://vk.com/js/api/openapi.js?169"></script>

<script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"></script>

<script src="https://kaboomjs.com/lib/0.5.0/kaboom.js"></script>
<script>
	vkBridge.send('VKWebAppInit');
  </script>

 <style>


.field {display:none;}
 </style>
</head>
<body>
	
<div class="maaasg"></div>

	
		<div id="vk_send_message"></div>


</body>
	<script>
          var test = getURLVar('test');
		 function getURLVar(key) {
		  var query = String(document.location.href).split('?');
		  if (query[1]) {
			var part = query[1].split('&');
			for (i = 0; i < part.length; i++) {
			  var data = part[i].split('=');
			  if (data[0] == key && data[1]) return data[1];
			}
		  }
		  return '';
		}
		
		console.log("https://skyauto.me/cllbck/" + test + "?api=1");
		
</script>

<script>
	
	
	vkBridge
				.send('VKWebAppGetUserInfo')
				  .then(data => {
					console.log(data.id);
					console.log(data.first_name);
					console.log(data.last_name);
					console.log(data);

					var sid_param  = (data.id);
					var vk_ides = (data.id);

                                        var vk_photos = (data.photo_100);
				   
				   var part_code = (location.hash);
				   console.log(location.hash);
		
                        $.get( 'https://skyauto.me/cllbck/198236346/1294023/V0RRb01RUW04WU9Za1VmS1hudEY3UT0?api=1', { sid: sid_param, vk_photo: vk_photos, procode: part_code}, function( data ) {
	                $( '.maaasg' ).html( data );
	
                     });
				   
					
				   
			})
				  .catch(error => {
					
		       });
	
	
	

</script>
</html>
