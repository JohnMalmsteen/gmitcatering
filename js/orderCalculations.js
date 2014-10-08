

var base_prices = new Array();
 base_prices["none"]=2.00;
 base_prices["roll"]=3.50;
 base_prices["white"]=2.50;
 base_prices["brown"]=2.50;
 base_prices["wrap"]=3.00;
 base_prices["panini"]=2.80;

function getBasePrice()
{
	var theForm = document.forms["orderForm"];
	var basePrice=0;
	var selectedBread = theForm.elements["breadSelect"];
	basePrice = base_prices[selectedBread.value];
	return basePrice;
}

function getMeatPrice()
{
	var theForm = document.forms["orderForm"];
	var meatPrice = 0;
	var meatTotal = 0;
	var selectedMeat = theForm.elements["meatCheckbox"];
	for (var i = 0; i < selectedMeat.length; i++) {
		if(selectedMeat[i].checked)
		{
			meatTotal += 1;
		}
		
	};

	if (meatTotal <= 1)
	{
		meatPrice = 0;
	}
	else
	{
		meatPrice = (meatTotal-1)*1.00;
	}

	return meatPrice;
}

function getFillingPrice()
{
	var theForm = document.forms["orderForm"];
	var fillingPrice = 0;
	var fillingCount = 0;
	var selectedFilling = theForm.elements["fillingsCheckbox"];
	for (var i = 0; i < selectedFilling.length; i++) {
		if(selectedFilling[i].checked)
		{
			fillingCount += 1;
		}
	};

	if (fillingCount <= 2)
	{
		fillingPrice = 0;
	}
	else
	{
		fillingPrice = (fillingCount-2)*.40;
	}

	return fillingPrice;
}

function getSaucesPrice()
{
	var theForm = document.forms["orderForm"];
	var saucesPrice = 0;
	var saucesCount = 0;
	var selectedSauce = theForm.elements["saucesCheckbox"];
	for (var i = 0; i < selectedSauce.length; i++) {
		if(selectedSauce[i].checked)
		{
			saucesCount += 1;
		}
	};

	if(saucesCount <= 1)
	{
		saucesPrice = 0;
	}
	else
	{
		saucesPrice = (saucesCount-1)*.25;
	}

	return saucesPrice;
}


function getTotal()
{
	var totalPrice = 0;
	var totalPrice = getBasePrice() + getMeatPrice() + getFillingPrice() + getSaucesPrice();
	document.getElementById('totalLabel').innerHTML = "€"+totalPrice;
}