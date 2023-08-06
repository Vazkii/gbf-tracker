function __stringify_treasure(treasure) {
    var ret = "";
    var list = treasure.list;

    for (var itm of list) {
    	if(ret)
    		ret += "|";

        var obj = "";
        ret += parseInt(itm.item_id); // Item ID
        ret += ";";
        ret += parseInt(itm.number); // Current Count
        ret += ";";
        ret += itm.registration_number; // Target
        ret += ";";
        ret += itm.name; // Item Name
    }

    return ret;
}

function __open_tracker_site(game) {
	var b64 = btoa(__stringify_treasure(game.treasure));
	var url = 'https://vazkii.net/webapp/gbftracker?content=' + b64;
	window.open(url, "_blank");
}

__open_tracker_site(Game);