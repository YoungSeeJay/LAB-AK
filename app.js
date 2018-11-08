var btns = $("label");
var dataCells = $("td");
var testsList = $("ol li");

var patients = [
	{
		name: "Adam Kaczmarski",
		book: "11/09/K.",
		pesel: 88092415612,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "okaz zdrowia"
	},
	{
		name: "Marcin Jabłoński",
		book: "10/09/K.",
		pesel: 87659537065,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "wymaga kolejnych badań"
	},
	{
		name: "Lena Jakubowska",
		book: "09/09/K.",
		pesel: 98604621679,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "oczekuje na termin"
	},
	{
		name: "Maja Kowalczyk",
		book: "08/09/K.",
		pesel: 67590468213,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "brak"
	},
	{
		name: "Oliwia Pawlak",
		book: "07/09/K.",
		pesel: 23473864216,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "brak"
	},
	{
		name: "Aleksandra Gajewska",
		book: "06/09/K.",
		pesel: 90758321678,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "oczekuje na termin"
	},
	{
		name: "Martyna Nowakowska",
		book: "05/09/K.",
		pesel: 67459076412,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "niestabilny stan zdrowia"
	},
	{
		name: "Oliwia Szydłowska",
		book: "04/09/K.",
		pesel: 79805623911,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "brak"
	},
	{
		name: "Amadeusz Urbaniak",
		book: "03/09/K.",
		pesel: 78043216431,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "niepełna dokumentacja medyczna"
	},
	{
		name: "Michał Pająk",
		book: "02/09/K.",
		pesel: 68904563212,
		t1: "WR (VDRL)",
		t2: "IgG poziom w surowicy",
		t3: "przeciwciała odpornościowe (odczyn Coombsa pośredni)",
		notes: "brak"
	}
];

var names = $("label span");

for (var i = 0; i < btns.length; i++){
	$(names[i]).text(patients[i].name);
}



function fillIn(attr){
	$("span", "#headerCell").text(patients[attr].name);
	$(dataCells[0]).text(patients[attr].pesel);
	$(testsList[0]).text(patients[attr].t1);
	$(testsList[1]).text(patients[attr].t2);
	$(testsList[2]).text(patients[attr].t3);
	$(dataCells[3]).text(patients[attr].notes);
}

fillIn(0);

var picked = 0;

$(btns).on("click", function(){
	for(var i = 0; i < patients.length; i++){
		if(patients[i].name === $("span", this).text()){
			fillIn(i);
			picked = i;
		}
	}
})

var icons = $("i");

$(icons[4]).on("click", function(){
	$(btns).removeClass("active");
	for(var i = 0; i < patients.length; i++){
		if(i === picked && picked > 0){
			picked -= 1;
			fillIn(picked);
			$(btns[picked]).addClass("active");
			return picked;
		}
		else if(i === picked && picked === 0){
			$(btns[picked]).addClass("active");
			return picked;
		}	
	}	
})

$(icons[5]).on("click", function(){
	$(btns).removeClass("active");
	for(var i = 0; i < patients.length; i++){
		if(i === picked && picked < 9){
			picked += 1;
			fillIn(picked);
			$(btns[picked]).addClass("active");
			return picked;
		}
		else if(i === picked && picked === 9){
			$(btns[picked]).addClass("active");
			return picked;
		}
	}	
})

//the above code has been refactored but it could also reqiure some corrections

//Author: Jonasz Cieślar