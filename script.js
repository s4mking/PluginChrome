//Changer faire test avec bleu et orange 

var loginPage = document.querySelector("div input[name='login']");
var homePage = document.querySelector('#board');
var grades = document.querySelector('#grades');
var location_page = window.location.href;
if(homePage !== null){
 var contentHome = document.querySelector('#content')
 contentHome.classList.add('homepage')
}
if(grades != null){
    grades.classList.add('sortable');
}

//Changelment de tous lkes selects du site pour les pages grades et présence 
var testsam2 = document.querySelector('.dfilter');
if(testsam2 !== null){
  var newTitle = document.createElement('h3')
  newTitle.innerHTML='Choix de l\'année scolaire : '
  var base = document.querySelector('.content_display')
  base.insertBefore(newTitle, base.firstChild);
  // var textRemoved = testsam2.innerText.substr(1);
  // testsam2.innerText=textRemoved
}


/*Ici le js ne s'executera que dans la page de connexion*/
if(loginPage !== null){
    document.querySelector('header').style.display='none';
    document.querySelector('footer').style.display='none';
    /*on reconbtsruit de zero le form, plus simple que de bosser avec des tables*/
   var bodyHtml = document.querySelector('body')
   bodyHtml.style.backgroundImage='linear-gradient(to bottom, #ED6669,#EE8063, #F4AB4B)'
   bodyHtml.style.backgroundSize = '40% 100%';
   bodyHtml.style.backgroundColor='white'
   bodyHtml.style.minHeight='100vh'
   bodyHtml.style.backgroundPosition='left bottom';
   bodyHtml.style.backgroundRepeat='no-repeat';
    var htmlFormConnexion="<div class='content_logo'><img id='image' src='logo.png' /></div><div class='content_form'><h2>Connexion</h2><img id='log_icon' src='"+chrome.extension.getURL('img/icon.png')+"' /><form method='post' action='?action=login'><span class='mail'>Email </span><input id='mail_input' type='text' placeholder='Votre adresse mail' name='login'>"
    htmlFormConnexion=htmlFormConnexion+"<span class='password'>Mot de passe</span><input id='pass_input' type='password' placeholder='Votre mot de passe' name='pwd'><a id='oublie' href='http://intranet.supinternet.fr/?action=forgot_pwd'>Mot de passe oublié?</a><button class='connect_button'>Se connecter</button></form></div>"
    document.querySelector('#content').innerHTML=htmlFormConnexion
    document.querySelector('#content').classList.add('homepage_content')
    document.querySelector('#mail_input').style.backgroundColor='white'
    document.querySelector('#pass_input').style.backgroundColor='white'
}else{
/*Traitement des données de dataSidebar poru faire correspondre à la putain de maquette Merci Louis ;) */
var DataSidebar = document.querySelector('#sidebar');
var DataUl = DataSidebar.querySelectorAll('ul');
var DataSection = DataSidebar.querySelectorAll('.section');
var i=0;
var MenuHeader= document.createElement('div');
DataSection.forEach(element => {
    var contentHtml = DataUl[i]
    var SectionText = element.innerText
    var SubMenu =  document.createElement('li');
    SubMenu.classList.add('headerMenu');
    SubMenu.innerText=SectionText
    SubMenu.id=SectionText;
    SubMenu.appendChild(contentHtml)
    document.querySelector('#top-wrapper').append(SubMenu)
   i++;
});
var strongText = document.querySelector('#v_card_text').innerHTML;
var dropdownInfo = document.createElement('span');
dropdownInfo.id="dropdown_info"
dropdownInfo.innerHTML=strongText
// var arrayStrings = strongText.split("<br>") //A voir mais a terme je pense qu'on vire les infos nom,promos qu'on met dans un deroulant à la linkedin
var thenum = strongText.replace( /^\D+/g, ''); // replace all leading non-digits with nothing
var validate = document.createElement("a")
validate.classList.add("validation_button")
validate.innerHTML="VALIDER  &check;"
validate.setAttribute('href', '?action=presence');
document.querySelector('#top-wrapper').append(validate)


var UserInformation = document.createElement('div');
UserInformation.id="UserInfo";
UserInformation.innerHTML="<span id='dropDownInfoSelect'>Mes Infos &#9662; </span><a href='?action=logout'>&#128275</a>"
document.querySelector("#v_card_photo").append(UserInformation)
document.querySelector("#v_card_photo").append(dropdownInfo)
check=true
document.querySelector('#dropDownInfoSelect').addEventListener('click',function(){
    check==false?dropdownInfo.style.display="none":dropdownInfo.style.display="block"
    check==false?this.style.color="black":this.style.color="grey"
    check==true?check=false:check=true
})
/*Traitement du footer*/
document.querySelector('footer').innerHTML="<div class='footer_div'><span>SUP'Intranet by SUP'Internet.</span><div class='social_network'><a href='https://www.facebook.com/supinternet/' target='_blank'><img id='log_icon' src='"+chrome.extension.getURL('img/facebook.png')+"' /></a><a href='https://www.instagram.com/supinternet/' target='_blank'><img class='insta' src='"+chrome.extension.getURL('img/instagram.png')+"' /></a><a href='https://twitter.com/sup_internet' target='_blank'><img id='log_icon' src='"+chrome.extension.getURL('img/twitter.png')+"' /></a><a href='https://www.linkedin.com/school/sup'internet-%C3%A9cole-des-m%C3%A9tiers-de-l'internet/' target='_blank'><img id='log_icon' src='"+chrome.extension.getURL('img/linkedin.png')+"' /></a></div><span> © 2011 - 2019 All right reserved</span></div>"
}

//Page présence

var lackQuer = document.querySelector('.new-ergo-info')
if(lackQuer != null){
  var lack = lackQuer.innerText

  var regexFind= /à (\d)+%/g
  var found = lack.match(regexFind);
  var thenum1 = found[0].replace( /^\D+/g, '');
  var thenum2 = found[1].replace( /^\D+/g, '');
  var regexFindPerc= /dont (\d)+%/g
  var found = lack.match(regexFindPerc);
  var thenum3 = found[1].replace( /^\D+/g, '');
  var regexFindPerc2= /, (\d)+%/g
  var found = lack.match(regexFindPerc2);
  var thenum4 = found[0].replace( /^\D+/g, '');
  function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

  var newNum1 = parseInt(thenum1.substring(0, thenum1.length-1));
  var newNum2 = parseInt(thenum2.substring(0, thenum2.length-1));
  var newNum3 = parseInt(thenum3.substring(0, thenum3.length-1));
  var newNum4 = parseInt(thenum4.substring(0, thenum4.length-1));
  var numJustified = Math.floor((newNum2/newNum3)*100);
  var numUnjustified = Math.floor((newNum2/newNum4)*100);
  var arrayNumberFinal = [newNum1]
  var arrayColorFinal = ['PRESENCE']
  var arrayLabelFinal = ['#F3A450']
  if(numJustified != null){
    arrayNumberFinal.push(numJustified)
    arrayColorFinal.push('ABSENCE JUSTIFIEE')
    arrayLabelFinal.push('#9FDCEF')
  }
  if(numUnjustified != null){
    arrayNumberFinal.push(numUnjustified)
    arrayColorFinal.push('ABSENCE INJUSTIFIEE')
    arrayLabelFinal.push('#F29898')
  }
  var DivContainerChartAndText = document.createElement('div')
  DivContainerChartAndText.classList.add('bigcontainer')
  newErg = document.querySelector('.new-ergo-info')
  var pieDiv = document.createElement("div");
  pieDiv.id='piechart'
  DivContainerChartAndText.appendChild(pieDiv)
  insertAfter(DivContainerChartAndText, newErg);
  var optionsLack = {
    chart: {
        type: 'pie',
        width: '70%'
    },
    series: arrayNumberFinal,
    labels : arrayColorFinal,
    colors: arrayLabelFinal,
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 100,
                height: 20
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
  }

  var chartLack = new ApexCharts(
    document.querySelector("#piechart"),
    optionsLack
  );

  chartLack.render();


  //Redesign total de la page a laide
  var arrayGeneral = {}
  var all_titles_array = document.querySelectorAll('h2:not(:first-child)')
  var all_tables_pres = document.querySelectorAll('table')
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
  for(pars_arr = 0;pars_arr<all_tables_pres.length;pars_arr++){
    
    var pars_arr_treat = replaceAll(all_tables_pres[pars_arr].innerHTML,"'medias/images/present.png'",'chrome-extension://__MSG_@@fjabjbkkojfkjmiophpbckgddbcaenhg/img/done.png')
    pars_arr_treat=replaceAll(pars_arr_treat,"medias/images/expliquee.png",'chrome-extension://__MSG_@@fjabjbkkojfkjmiophpbckgddbcaenhg/img/explic.png')
    pars_arr_treat=replaceAll(pars_arr_treat,"medias/images/justifiee.png",'chrome-extension://__MSG_@@fjabjbkkojfkjmiophpbckgddbcaenhg/img/close.png')
    arrayGeneral[all_titles_array[pars_arr].innerText]=('<table class="adm_table">'+pars_arr_treat+'</table>').replace("adm_table","new_adm_table");
    
  }

  var selectList = document.createElement("select");
selectList.id = "mySelect";
var i=0;
for(element in arrayGeneral){
  var option = document.createElement("option");
  option.value = element;
  option.text = element;
  if(i==0){
    option.selected = true;
  }
  selectList.appendChild(option);
  i++;
};

var choiceMonth = document.createElement('h3')
choiceMonth.innerText="Ma présence en "
var containerDivTable = document.createElement('div')
containerDivTable.classList.add('container_div_select')
var newDivTables = document.createElement('div')
newDivTables.classList.add('newTable')
var newDivSelect=document.createElement('div')
newDivSelect.classList.add('select_class')
containerDivTable.appendChild(choiceMonth)
newDivSelect.appendChild(selectList)
containerDivTable.appendChild(newDivSelect)
var buttonDisplay = document.createElement('button')
buttonDisplay.innerHTML="Voir"
buttonDisplay.id='displayTable'
buttonDisplay.addEventListener('click',function(){
  var testDisplayTable = document.querySelector('.newTable')
  var testDisplaySelect = document.querySelector('.container_div_select')
  this.innerHTML=='X'?testDisplaySelect.style.display='none':testDisplaySelect.style.display='flex'
  this.innerHTML=='X'?testDisplayTable.style.display='none':testDisplayTable.style.display='block'
  this.innerHTML=='Voir'?this.innerHTML="X":this.innerHTML="Voir"
  
})
document.querySelector(".content_display").appendChild(buttonDisplay)
document.querySelector(".content_display").appendChild(containerDivTable)
document.querySelector('.content_display').appendChild(newDivTables)
var selectedVal = document.querySelector('#mySelect').value
document.querySelector('.newTable').innerHTML= arrayGeneral[selectedVal]
selectList.addEventListener('change',function(){
    document.querySelector('.newTable').innerHTML= arrayGeneral[this.value]
})
var divExp = document.createElement('div')
divExp.classList.add('mail_vac')
divExp.innerHTML = "<p>Toute absence doit être justifiée à<br> <a href='mailto:absences@supinternet.fr'>absences@supinternet.fr</a><br> avec, dans la mesure du possible, un justificatif.</p><a href='mailto:absences@supinternet.fr'><img id='mail_icon' src='"+chrome.extension.getURL('img/mail.png')+"' /></a>"
// document.querySelector("#piechart").append(divExp)
DivContainerChartAndText.appendChild(divExp)
}


//Récupération de tous les différents elements du tableau avant de les mettre dans un tableau

var testGrade = document.querySelector('#grades');
if(testGrade != null){

  var arrayGeneralGrade = {}
  var all_titles_array_grade = document.querySelectorAll('h2:not(:first-child)')
  var all_tables_grade = document.querySelectorAll('table')
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
for(pars_arr = 0;pars_arr<all_tables_grade.length;pars_arr++){
  arrayGeneralGrade[all_titles_array_grade[pars_arr].innerText]=('<table class="adm_table">'+all_tables_grade[pars_arr].innerHTML+'</table>').replace("adm_table","grades_adm_table");
}
  var selectList = document.createElement("select");
  selectList.id = "mySelect";
  var i=0;
  for(element in arrayGeneralGrade){
    var option = document.createElement("option");
    option.value = element;
    option.text = element;
    if(i==0){
      option.selected = true;
    }
    selectList.appendChild(option);
    i++;
  };
var choiceMonth = document.createElement('h3')
choiceMonth.innerText="Mes notes en "
var containerDivTable = document.createElement('div')
containerDivTable.classList.add('container_div_select')
var newDivTables = document.createElement('div')
newDivTables.classList.add('newTable')
var newDivSelect=document.createElement('div')
newDivSelect.classList.add('select_class')
containerDivTable.appendChild(choiceMonth)
newDivSelect.appendChild(selectList)
containerDivTable.appendChild(newDivSelect)
var buttonDisplay = document.createElement('button')
buttonDisplay.innerHTML="Voir"
buttonDisplay.id='displayTable'
buttonDisplay.addEventListener('click',function(){
  var testDisplayTable = document.querySelector('.newTable')
  var testDisplaySelect = document.querySelector('.container_div_select')
  this.innerHTML=='X'?testDisplaySelect.style.display='none':testDisplaySelect.style.display='flex'
  this.innerHTML=='X'?testDisplayTable.style.display='none':testDisplayTable.style.display='block'
  this.innerHTML=='Voir'?this.innerHTML="X":this.innerHTML="Voir"
})

//Add button pour shema

var buttonDisplayShema = document.createElement('button')
buttonDisplayShema.innerHTML="Schéma  "
buttonDisplayShema.id='displayShema'
var newDivSchema = document.createElement('div')
newDivSchema.classList.add('newSchema')
buttonDisplayShema.addEventListener('click',function(){
  var testDisplaySchema = document.querySelector('.newSchema')
  this.innerHTML=='X'?testDisplaySchema.style.display='none':testDisplaySchema.style.display='flex'
  this.innerHTML=='Schéma'?this.innerHTML="X":this.innerHTML="Schéma"
})
document.querySelector(".content_display").appendChild(buttonDisplayShema)
document.querySelector(".content_display").appendChild(buttonDisplay)
document.querySelector('.content_display').appendChild(newDivSchema)
document.querySelector(".content_display").appendChild(containerDivTable)

document.querySelector('.content_display').appendChild(newDivTables)

var selectedVal = document.querySelector('#mySelect').value
document.querySelector('.newTable').innerHTML= arrayGeneralGrade[selectedVal]
selectList.addEventListener('change',function(){
    document.querySelector('.newTable').innerHTML= arrayGeneralGrade[this.value]

})

  var arrayDate = document.querySelectorAll('tbody td:first-child');
  var arraySubject = document.querySelectorAll('tbody td:nth-child(2)');
  var arrayProject= document.querySelectorAll('tbody td:nth-child(3)');
  var arrayNumber = document.querySelectorAll('tbody td:nth-child(4)');
  var arrayCom = document.querySelectorAll('tbody td:nth-child(5)');
  var arrayAverage = document.querySelectorAll('tbody td:last-child');
  var arrayDataDate = []
  var arrayDataSubject = []
  var arrayDataProject = []
  var arrayDataNumber = []
  var arrayDataCom = []
  var arrayDataAverage = []

  arrayDate.forEach(element => {
      dateString=element.innerText
      dateString = dateString.substr(6, 4)+"-"+dateString.substr(3, 2)+"-"+dateString.substr(0, 2);
      var date = new Date(dateString);
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      var datestring = ("0" + date.getDate()).slice(-2)  + " " + months[date.getMonth()] + " " + date.getFullYear();
    arrayDataDate.push(datestring);
  });
  arraySubject.forEach(element => {
    arrayDataSubject.push(element.innerText)
  });
  arrayProject.forEach(element => {
    arrayDataProject.push(element.innerText)
  });
  arrayNumber.forEach(element => {
    arrayDataNumber.push(element.innerText)
  });
  arrayCom.forEach(element => {
    arrayDataCom.push(element.innerText)
  });
  arrayAverage.forEach(element => {
    arrayDataAverage.push(element.innerText)
  });

  /*Code insert en mode gros cra de*/


  var sam = document.querySelector('#grades');
  sam.innerHTML='<div id="wrapper"><div class="content-area"><div class="container-fluid"><div class="main"><div class="row sparkboxes mt-4"><div class="col-md-3"><div class="box box1"><div class="details"><h3>1213</h3><h4>CLICKS</h4></div><div id="spark1"></div></div></div><div class="col-md-3"><div class="box box2"><div class="details"><h3>422</h3><h4>VIEWS</h4></div><div id="spark2"></div></div></div><div class="col-md-3"><div class="box box3"><div class="details"><h3>311</h3><h4>LEADS</h4></div><div id="spark3"></div></div></div><div class="col-md-3"><div class="box box4"><div class="details"><h3>22</h3><h4>SALES</h4></div><div id="spark4"></div></div></div></div><div class="row mt-4"><div class="col-md-5"><div class="box shadow mt-4"><div id="radialBarBottom"></div></div></div><div class="col-md-7"><div class="box shadow mt-4"><div id="line-adwords" class=""></div></div></div></div><div class="row mt-4"><div class="col-md-5"><div class="box shadow mt-4"><div id="barchart"></div></div></div><div class="col-md-7"><div class="box shadow mt-4"><div id="areachart"></div></div></div></div></div></div></div></div></div>';


  var options = {
      chart: {
        height: 450,
        type: 'line',
      },
      series: [{
        name: 'Ma note',
        type: 'column',
        data:arrayDataNumber
      }, {
        name: 'Moyenne',
        type: 'line',
        data: arrayDataAverage
      }],
      stroke: {
        width: [0, 1]
      },
      title: {
        text: 'SUP\'Internet'
      },
      labels:arrayDataDate,
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Notes',
        },

      }],grid: {
        row: {
          colors: ['lightblue'],
          opacity:'1',
          type:'solid',
        },
      },
     
      plotOptions: {
        bar: {
          columnWidth: "20%"
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#FFA500',
          shadeTo: 'dark',
          shadeIntensity: 0.65
        }
      },

    }

    var chart = new ApexCharts(document.querySelector(".newSchema"),options);
    chart.render();


    var optionsBar = {
      chart: {
          height: 350,
          type: 'bar',
      },
      plotOptions: {
          bar: {
              horizontal: true,
          }
      },
      dataLabels: {
          enabled: false
      },
      series: [{
          data: arrayDataNumber
      }],
      xaxis: {
          categories: arrayDataSubject,
      }
  }

//  var chartBar = new ApexCharts(document.querySelector(".content_display"),optionsBar);
  
//  chartBar.render();

}

if(location_page == "http://intranet.supinternet.fr/?action=projects"){
  document.querySelector('#content').classList.add('projects')
}
else if(location_page == "http://intranet.supinternet.fr/?action=user_assiduity"){
  document.querySelector('#content').classList.add('assid')
}
else if(location_page == "http://intranet.supinternet.fr/?action=grades"){
  document.querySelector('.content_display').classList.add('note_grade')
}


