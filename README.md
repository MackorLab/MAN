
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<!-- Подключение Bootstrap чтобы все выглядело красиво -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

	<script type="text/javascript" src='http://code.jquery.com/jquery-2.1.0.min.js'></script>
	<script src="/socket.io/socket.io.js"></script>

	<script
	src="https://code.jquery.com/jquery-3.6.0.js"integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="crossorigin="anonymous"></script>


	<script type="text/javascript" src="https://vk.com/js/api/openapi.js?169"></script>

	<title>Чат программа</title>
	<!-- Свои стили -->
	<style>


.messages {
    overflow: scroll; /* Добавляем полосы прокрутки */
    width: 300px; /* Ширина блока */
    height: 150px; /* Высота блока */
    padding: 5px; /* Поля вокруг текста */
    border: solid 1px black; /* Параметры рамки */

   } 



	</style>


</head>
<body>



<script>

	var vk_ides

</script>
	




















	<!-- Создание меню на сайте (без функций) -->
	<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
		
	</div>




		<script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"></script>
		<script>
		
		
		vkBridge
					.send('VKWebAppGetUserInfo')
					  .then(data => {
						// Handling received data
		
						console.log(data.id);
						console.log(data.first_name);
						console.log(data.last_name);
						console.log(data);
		
						var vk_ides = (data.id);
						document.mainsearchform.message.value = (data.id);
						document.mainsearchform.name.value = (data.first_name);
					  })
					  .catch(error => {
						// Handling an error
					  });
		
		
		
		</script>
	






	
	<!-- Основная часть страницы -->
	<div class="container">
		
		<div class="row">
			<div class="col-6">
				<!-- Форма для получения сообщений и имени -->
				<form id="messForm" name="mainsearchform">
				
					<label for="name">Имя</label>
					<input type="text" name="name" id="name"  value = "" placeholder="Введите имя" class="form-control">
					<br>
					<label for="message">Сообщение</label>
					<textarea name="message" id="message" class="form-control" placeholder="Введите сообщение" ></textarea>
					<br>
					<input type="submit" value="Отправить" class="btn btn-danger">


					
				</form>


			</div>
			<div class="col-6">
				<h3>Сообщения</h3>
				<!-- Вывод всех сообщений будет здесь -->

			

			

				<div id="messages">
					
						<div id="all_mess" class="messages"></div>
					
				  </div>
				
				
					
				
				
				
				 
				




			</div>
		</div>
	</div>



	<!-- Подключаем jQuery, а также Socket.io -->
	
	<script src="/socket.io/socket.io.js"></script>
	<script>
		// У каждого пользователя будет случайный стиль для блока с сообщенями,
		// поэтому в этом кусочке кода мы получаем случайные числа
		var min = 1;
		var max = 6;
		var random = Math.floor(Math.random() * (max - min)) + min;

		// Устаналиваем класс в переменную в зависимости от случайного числа
		// Эти классы взяты из Bootstrap стилей
		var alertClass;
		switch (random) {
			case 1:
				alertClass = 'secondary';
				break;
			case 2:
				alertClass = 'danger';
				break;
			case 3:
				alertClass = 'success';
				break;
			case 4:
				alertClass = 'warning';
				break;
			case 5:
				alertClass = 'info';
				break;
			case 6:
				alertClass = 'light';
				break;
		}

		// Функция для работы с данными на сайте
		$(function() {
			// Включаем socket.io и отслеживаем все подключения
			var URL_SERVER = 'https://www.vk-school.ru';
		    var socket = io.connect(URL_SERVER);
			// Делаем переменные на:
			var $form = $("#messForm"); // Форму сообщений
			var $name = $("#name"); // Поле с именем
			var $textarea = $("#message"); // Текстовое поле
			

			
			
    
			var $all_messages = $("#all_mess"); // Блок с сообщениями

	      
			setTimeout(go,500);
		function go() {
			socket.emit('send mess', {mess: $textarea.val(), name: $name.val(), className: alertClass});
    }
	


			// Отслеживаем нажатие на кнопку в форме сообщений
			$form.submit(function(event) {
				// Предотвращаем классическое поведение формы
				event.preventDefault();


				
				

				// В сокет отсылаем новое событие 'send mess',
				// в событие передаем различные параметры и данные
				socket.emit('send mess', {mess: $textarea.val(), name: $name.val(), className: alertClass});
				// Очищаем поле с сообщением
				$textarea.val('');
			});

			// Здесь отслеживаем событие 'add mess', 
			// которое должно приходить из сокета в случае добавления нового сообщения
			socket.on('add mess', function(data) {
				// Встраиваем полученное сообщение в блок с сообщениями
				// У блока с сообщением будет тот класс, который соответвует пользователю что его отправил

			
				$all_messages.append("<div class='alert alert-" + data.className + "'><b>" + data.name + "</b>: " + data.mess + "</div>");
				

			});
			
			
			

		});
	</script>




</script>



<script>


</script>

<script>
	
	
				
	</script>
<script>
	const messages = document.getElementById('messages');

function appendMessage() {
 const message = document.getElementsByClassName('message')[0];
  const newMessage = message.cloneNode(true);
  messages.appendChild(newMessage);
}

function getMessages() {
 // Prior to getting your messages.
  shouldScroll = messages.scrollTop + messages.clientHeight === messages.scrollHeight;
  /*
   * Get your messages, we'll just simulate it by appending a new one syncronously.
   */
  appendMessage();
  // After getting your messages.
  if (!shouldScroll) {
    scrollToBottom();
  }
}

function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

scrollToBottom();

setInterval(getMessages, 100);
	</script>
</html>
