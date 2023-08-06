<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>GBF Item Tracker</title>
	<link rel="stylesheet" type="text/css" href="tracker.css">
</head>
<body>
	<div id="header">
		GBF Item Tracker
	</div>

	<div id="contents">
		Loading...
	</div>

	<div id="footer">
		site by <a href="https://gbf.wiki/User:Vazkii">vazkii</a>, thanks for using<br>
		this site is static and doesn't track anything from you<br><br>

		<a id="howto-btn">how to use?</a> / <a href="https://github.com/Vazkii/gbf-tracker">source code</a><br>

		<div id="howto">
			<h2>How to Use</h2>
			<ul>
				<li>Copy the <a href="bookmarklet.js">Bookmarklet Code</a></li>
				<li>Create a new Bookmark in your browser, and in the URL/Address field, paste the code</li>
				<li>Press the Bookmark while in GBF</li>
				<li>Share the link with anyone you want</li>
			</ul>
		</div>
	</div>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.2/mustache.min.js" integrity="sha512-xkCc8lq6qZqGvHzCQzWl69a/MF9RSB7ku5X3dJ9bsPfnoxyoXlhF87DN82Vqclv2Kc183pqPNRjtdGJymPO8DQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script type="text/javascript" src="tracker.js"></script>
</body>
</html>