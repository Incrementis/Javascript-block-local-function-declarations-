/*
	NOTE: 
	the varibale "elMedia" serves here only for demonstartion purposes.
	Global vaiables should be avoided!  
*/



//A list with all checked media
var elMedia = [];


//Lists all checked electro Media 
function checkElectroMedia()
{
	var media = document.getElementsByClassName('Emedia');
	
	for(var i = 0; i < media.length; i++ )
	{
		if(media[i].checked)
		{
			
			elMedia.push(media[i]);
		}
		
	}
}



//Version false: checkMedia, checkElectroMedia
//Version true: checkMedia, checkMedia
function Version(broken)
{

	var checkMedia 	= checkElectroMedia;
	var result 		= document.getElementById('result');
	

	result.innerHTML 	= " ";	//Reset content
	elMedia.length 		= 0;	//Reset array by putting its length to zero
	
	
	//Set to true to check block scoping
	if(true)
	{
		
		var media 		= document.getElementsByClassName('Nmedia');
		var noelMedia	= [];
		
		/*
			ATTENTION:
			Overwrites the variable "media" as a new function
			and stays overwritten after leaving the if-block!
			
		*/
		checkMedia = function()
		{
			
	
			for(var i = 0; i < media.length; i++ )
			{
				if(media[i].checked)
				{
					
					noelMedia.push(media[i]);
				}
				
			}	
			
		}
		
		
		checkMedia();
		
		
		//Showing the result in browser
		for(var j = 0; j < noelMedia.length; j++)
		{
			result.innerHTML += " " + noelMedia[j].value;
		}
	}
	
	
	
	if(broken)
	{
		/*
			ATTENTION:
			Function does not work as "checkElectroMedia"
		*/
		checkMedia();
	}
	else 
	{
		/*
			ATTENTION:
			Works fine as expected 
		*/
		checkElectroMedia();
	}
	
	
	//Showing the result in browser
	for(var j = 0; j < elMedia.length; j++)
	{
		result.innerHTML += " " + elMedia[j].value;
	}

}
