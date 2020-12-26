function funk()
{
	var text=document.getElementsByClassName("r");
	for(var i=0;i<text.length;i++)
	{
		var t=text[i].innerHTML;
		var num=i+1;
		text[i].innerHTML='<b>'+t+" "+num+'</b>';
	}
}