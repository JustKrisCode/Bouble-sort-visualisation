<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="assets/css/styles.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Sigmar&display=swap" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
	<title>Exam3</title>
</head>
<body>
	<section class="popup">
		<div class="popup__content">
			<header class="popup__head">
				<h1>Bubble sort</h1>
			</header>

			<div class="popup__body">
				<div class="popup__input">
					<input type="number" placeholder="Enter a number" id="number">
				</div>

				<div class="popup__action">
					<button class="btn" id="start">Start</button>
				</div>
			</div>
		</div>

		<div class="popup__error" id="error">
			<p>Please enter a number lower then 100!</p>
		</div>
	</section>

	<script src="assets/js/stript.js"></script>
</body>
</html>
