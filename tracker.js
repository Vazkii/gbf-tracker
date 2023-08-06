function onStartup() {
	try {
		onStartupSafe();
	} catch(error) {
		$('#contents').html("No data was found. Use the bookmark ingame to get it.<br><br>");
		onClickHowTo();
	}
}

function onStartupSafe() {
	var content = decodeURIComponent($.urlParam('content'));
	var decoded = atob(content);
	console.log(decoded);

	var toks = decoded.split('|');

	var itemArr = [];
	for(var tok of toks) {
		var params = tok.split(';');

		var itemObj = {
			id: params[0],
			count: params[1],
			target: params[2],
			name: params[3],
			remaining: (Math.max(0, params[2] - params[1])),
			percentage: ((params[2] > 0) ? fractToPercent(params[1] / params[2]) : 0),
			has_target: (params[2] > 0)
		};

		itemArr.push(itemObj);
	}

	var renderObj = {
		items: itemArr
	};

	console.log(renderObj);

	loadTemplate('tracker', function(data) {
		$('#contents').html(Mustache.to_html(data, renderObj));
	});
}

function onClickHowTo() {
	$('#howto').show();
}

function fractToPercent(fract) {
	return Math.max(0, Math.min(100, parseInt("" + (fract * 100))));
}

function loadTemplate(name, callback) {
	var templateData = '';

	$.ajax({
		url: 'templates/' + name + '.html',
		success: callback
	});
}

// https://www.sitepoint.com/url-parameters-jquery/
$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

$(onStartup);
$('#howto-btn').click(onClickHowTo);