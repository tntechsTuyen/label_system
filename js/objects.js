function objectTextView(mId, obj){
	var view = {
		type: "TextView",
		id: mId,
		contentHtml: tvContentHtml(mId, obj),
		outLine: objectOutLine(mId, obj['ico'], obj['name'])
	}
	return view;
}

function objectOutLine(i, icoObject, name){
	return '<li id="obj-view-'+i+'" id-map="'+i+'">'
				+'<i class="'+icoObject+'" class="ico-view"></i>'
				+'<span class="id_name">'+name+' '+i+'</span>'
				+'<input type="checkbox" name="" class="cb-show-obj" id-parent="obj-view-'+i+'" checked="true">'
			+'</li>';
}

function tvContentHtml(idView, obj){
	return '<div class="img-move" id="'+idView+'" type="1" onclick="infoObjectInView(this)" val="TextView" name="'+obj['name']+'">TextView</div>';
}

//Object barcode
function objectBarCode(mId, obj){
	var view = {
		type: "TextView",
		id: mId,
		contentHtml: barcodeHtml(mId, obj),
		outLine: objectOutLine(mId, obj['ico'], obj['name'])
	}
	return view;
}

function barcodeHtml(idView, obj){
	return '<div class="img-move" id="'+idView+'" type="2" onclick="infoObjectInView(this)" val="barcode" name="'+obj['name']+'"><img src="'+obj['url']+'"></div>';
}

//Object HTML
function objectHtml(mId, obj){
	var view = {
		type: "TextView",
		id: mId,
		contentHtml: viewHtml(mId, obj),
		outLine: objectOutLine(mId, obj['ico'], obj['name'])
	}
	return view;
}

function viewHtml(idView, obj){
	var style = "width: "+obj['style']['width']
				+"; height: "+obj['style']['height']
				+"; border: "+obj['style']['border']
				+"; background: "+obj["style"]['background']
				+"; border-radius: "+obj["style"]['radius']
	return '<div class="img-move" id="'+idView+'" type="3" style="'+style+'" onclick="infoObjectInView(this)"></div>';
}