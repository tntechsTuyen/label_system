<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<script src="js/barcode.js"></script>
<style>
	
	div:hover{	
		cursor: pointer;
		box-shadow: 0px 0px 20px #003aff;
	}
</style>
<body>
	<div style="width: 500px; height: 500px; background: #3e3e3e;">
		<div style="width: 100px; height: 100px; float: left; border: 1px solid #00f;"></div>
		<div style="width: 100px; height: 100px; float: left; border: 1px solid #00f;"></div>
		<div style="width: 100px; height: 100px; float: left; border: 1px solid #00f;"></div>
	</div>
	<canvas id="barcode"></canvas>
	<canvas id="barcode1"></canvas>
	<script>
		JsBarcode("#barcode", "11111111111",{
			displayValue: false,
			height: 70
		});

		JsBarcode("#barcode1", "", {
			height: 70
		});
	</script>
</body>
</html>