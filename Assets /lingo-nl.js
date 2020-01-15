var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"adres",
	"avond",
	"aders",
	"alarm",
	"boten",
	"balen",
	"beter",
	"bomen",
	"boren",
	"boven",
	"boxen",
	"brood",
	"broek",
	"brand",
	"breed",
	"benen",
	"beeld",
	"brief",
	"beten",
	"basis",
	"blauw",
	"beren",
	"buren",
	"banen",
	"bloed",
	"broer",
	"blond",
	"boter",
	"beleg",
	"breng",
	"baken",
	"beker",
	"blind",
	"bezig",
	"baden",
	"bedel",
	"bazen",
	"bazin",
	"baren",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"conus",
	"cello",
	"creme",
	"cloud",
	"cacao",
	"cadet",
	"cavia",
	"ceder",
	"combi",
	"china",
	"clown",
	"draai",
	"deden",
	"dalen",
	"derde",
	"delen",
	"dwaas",
	"daden",
	"dader",
	"dames",
	"diner",
	"datum",
	"dozen",
	"dreun",
	"duits",
	"dagen",
	"deren",
	"dwerg",
	"dwaal",
	"dwing",
	"druil",
	"droog",
	"draad",
	"dweil",
	"drank",
	"duren",
	"dwars",
	"drugs",
	"daten",
	"daler",
	"doorn",
	"disco",
	"degen",
	"droom",
	"dient",
	"drone",
	"dadel",
	"duwen",
	"druif",
	"deken",
	"deler",
	"elven",
	"eigen",
	"enger",
	"engel",
	"elder",
	"enkel",
	"effen",
	"email",
	"egaal",
	"fiets",
	"friet",
	"files",
	"forel",
	"films",
	"feest",
	"fruit",
	"falen",
	"flora",
	"fauna",
	"feeen",
	"freak",
	"forum",
	"fusie",
	"geven",
	"gaven",
	"groen",
	"graai",
	"getal",
	"grens",
	"grond",
	"groef",
	"graal",
	"gewei",
	"games",
	"grote",
	"groet",
	"garen",
	"gebak",
	"graag",
	"genre",
	"glans",
	"geluk",
	"geeuw",
	"horen",
	"heren",
	"halen",
	"hagel",
	"haren",
	"helen",
	"harde",
	"hemel",
	"hoofd",
	"huren",
	"hamer",
	"haken",
	"heden",
	"hotel",
	"hobby",
	"heler",
	"hoger",
	"ieder",
	"index",
	"immer",
	"icoon",
	"inlog",
	"inzet",
	"innig",
	"jovel",
	"jaren",
	"jicht",
	"jabot",
	"jacht",
	"jaden",
	"jagen",
	"jager",
	"japon",
	"jarig",
	"jawel",
	"jeans",
	"jemig",
	"jeugd",
	"joint",
	"jonas",
	"joule",
	"koken",
	"kreet",
	"koker",
	"kerst",
	"kegel",
	"koude",
	"kader",
	"krent",
	"kamer",
	"kaars",
	"kaart",
	"kraan",
	"krant",
	"keren",
	"kruid",
	"kerel",
	"kubus",
	"kraal",
	"kleur",
	"kroon",
	"klein",
	"korst",
	"klopt",
	"kabel",
	"kunst",
	"kopje",
	"krans",
	"klimt",
	"kater",
	"klink",
	"kudde",
	"kruis",
	"lopen",
	"laten",
	"lepel",
	"links",
	"laden",
	"leven",
	"lezen",
	"lucht",
	"lenen",
	"laser",
	"lente",
	"licht",
	"lader",
	"leder",
	"lunch",
	"lijst",
	"leger",
	"leden",
	"legen",
	"lagen",
	"lezer",
	"lever",
	"lingo",
	"loper",
	"luier",
	"lager",
	"leeuw",
	"maand",
	"malen",
	"maken",
	"media",
	"meter",
	"motor",
	"maten",
	"markt",
	"mazen",
	"molen",
	"meest",
	"meren",
	"model",
	"meden",
	"maden",
	"macht",
	"meeuw",
	"mager",
	"magen",
	"maren",
	"manen",
	"noord",
	"nieuw",
	"negen",
	"namen",
	"neven",
	"nodig",
	"naden",
	"neder",
	"nemen",
	"onder",
	"optel",
	"ovaal",
	"ovale",
	"onwel",
	"optie",
	"orden",
	"oppas",
	"ouder",
	"ophef",
	"oases",
	"palen",
	"plein",
	"pegel",
	"paars",
	"prijs",
	"piano",
	"pixel",
	"paden",
	"pasta",
	"pizza",
	"poten",
	"paard",
	"puber",
	"pauze",
	"preek",
	"polis",
	"pater",
	"proef",
	"panda",
	"penis",
	"prins",
	"pluto",
	"polen",
	"plint",
	"quota",
	"quant",
	"quark",
	"queue",
	"quilt",
	"quote",
	"robot",
	"reken",
	"raden",
	"regen",
	"radio",
	"rente",
	"regio",
	"rugby",
	"reden",
	"roken",
	"ruzie",
	"ruist",
	"regel",
	"racen",
	"races",
	"riool",
	"ramen",
	"radar",
	"roman",
	"rokje",
	"razen",
	"roede",
	"staan",
	"staal",
	"speel",
	"steeg",
	"stoel",
	"stook",
	"steek",
	"schep",
	"spijs",
	"stoep",
	"shirt",
	"samen",
	"sites",
	"sport",
	"spalk",
	"sjaal",
	"storm",
	"staat",
	"steun",
	"strak",
	"serie",
	"shows",
	"schat",
	"snoep",
	"sfeer",
	"smeer",
	"speer",
	"scene",
	"speld",
	"smeed",
	"smaak",
	"super",
	"stand",
	"steer",
	"smelt",
	"sedan",
	"skier",
	"sluis",
	"sneer",
	"steel",
	"truck",
	"terug",
	"typen",
	"talen",
	"taboe",
	"tegel",
	"taart",
	"tafel",
	"trouw",
	"teken",
	"teren",
	"taken",
	"treur",
	"tenen",
	"titel",
	"thuis",
	"tiara",
	"teder",
	"toets",
	"tabak",
	"trein",
	"tarwe",
	"telen",
	"teler",
	"uiten",
	"uilig",
	"uitje",
	"uiver",
	"ultra",
	"uniek",
	"uppie",
	"uraan",
	"uiers",
	"velen",
	"vloer",
	"video",
	"varen",
	"vegen",
	"veren",
	"vader",
	"vaten",
	"vuren",
	"vrouw",
	"vlees",
	"vogel",
	"vroeg",
	"vezel",
	"veins",
	"vorst",
	"veder",
	"vanaf",
	"vieze",
	"veger",
	"villa",
	"veler",
	"vrede",
	"vries",
	"woord",
	"wagen",
	"wonen",
	"waren",
	"warme",
	"weten",
	"water",
	"weren",
	"wazig",
	"wegen",
	"weven",
	"wezen",
	"weken",
	"wraak",
	"wilde",
	"wreed",
	"wrede",
	"wenst",
	"woest",
	"xenon",
	"yacht",
	"yucca",
	"zwaar",
	"zware",
	"zesde",
	"zagen",
	"zalig",
	"zomer",
	"zeden",
	"zwart",
	"zeven",
	"zicht",
	"zadel",
	"zweet",
	"zenuw",
	"zweer",
	"zweef",
	"zaden",
	"zaken",
	"zeker",
	"zever",
	"zeeen"];

	var vakjes;

	var poging = 0;

	const row1 = document.getElementById("row1");
		for(rij = 0; rij < 5; rij++){
			for(kolom = 0; kolom < 5; kolom++){

		var newDiv = document.createElement("input");
		row1.appendChild(newDiv);
		newDiv.style.background = "white";
		newDiv.style.verticalAlign = top;
		newDiv.style.marginTop = 4;
		newDiv.style.display = "inline-block";
		newDiv.style.height = '1.25em';
		newDiv.style.width = '1.25em';
		newDiv.style.textAlign = 'center';
		newDiv.style.fontSize = '3.5em';
		newDiv.style.fontFamily = 'Lato', 'sans-serif';
		newDiv.id += 'vakje'+ rij +'-' + kolom;
			}
		}

		var randomwoord = words[Math.floor(Math.random() * words.length)];
		console.log(randomwoord);
		

		var textArray = randomwoord.split('');
			document.getElementById("vakje0-0").value = textArray[0];
			console.log(textArray);

		document.getElementById("check").addEventListener('click',checkfunction);




		function checkfunction(){
			
			var antwoord = document.getElementById("antwoord");
			var antwoord= antwoord.value.split('');
			console.log(antwoord);
		
			for (i = 0; i < antwoord.length; i++) {
				if(antwoord[i] == randomwoord[i]) {
					document.getElementById("vakje" + poging + "-" + i).value = antwoord[i];
					document.getElementById("vakje" + poging+ "-" + i).style.backgroundColor = "green";
					
				} else if (randomwoord.indexOf(antwoord[i])>-1) {
					document.getElementById("vakje" + poging + "-" + i).value = antwoord[i];
					document.getElementById("vakje" + poging + "-" + i).style.backgroundColor = "yellow";
					alert("Het letter staat op de verkeerde plek");
				} else {
					document.getElementById("vakje" + poging + "-" +  i).value = antwoord[i];
					document.getElementById("vakje" + poging + "-" +  i).style.backgroundColor = "red";
				} 
		    } 
			 poging++;
		}
		
	

		









	





	






