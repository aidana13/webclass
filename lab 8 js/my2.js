c=0;
function func()
{
	t=document.getElementById('but');
	if(c==0)
	{
		f="pink";
		t.value="Бирюзовый";
		c=1;
	}
	else{
		f="cyan";
		t.value="Розовый";
		c=0;
	}
	var elems=document.getElementsByClassName("www");
	for(var i=0;i<elems.length;i++)
	{
		elems[i].style.backgroundColor=f;
	}
}