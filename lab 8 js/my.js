c=0;
function func()
{
	t=document.getElementById('but');
	if(c==0)
	{
		f="red";
		t.value="Черный";
		c=1;
	}
	else{
		f="black";
		t.value="Красный";
		c=0;
	}
	var elems=document.getElementsByTagName('p');
	for(var i=0;i<elems.length;i++)
	{
		elems[i].style.color=f;
	}
}