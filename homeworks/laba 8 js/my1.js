c=0;
function funk()
{
	a=document.getElementById('btn');
	if(c==0)
	{
		b="center";
		a.value="LEFT";
		c=1;
	}
	else{
		b="left";
		a.value="CENTER";
		c=0;
	}
	var text=document.getElementsByTagName('h2');
	for(var i=0;i<text.length;i++)
	{
		text[i].align=b;
	}
}