var loginPage = document.querySelector("div input[name='login']");
var homePage = document.querySelector('#board');
var grades = document.querySelector('#grades');

if(homePage !== null){
 var contentHome = document.querySelector('#content')
 contentHome.classList.add('homepage')
// var containerImages = document.createElement('div')
// containerImages.classList.add('container_images')
// var htmlHomepage = "<div class='container'><img src='"+chrome.extension.getURL('img/334.jpg')+"' alt='Avatar' class='image' style='width:100%'><div class='middle'><div class='text'>John Doe</div></div></div>"
// htmlHomepage=htmlHomepage+
// document.querySelector('#board div:nth-child(3)').innerHTML=htmlHomepage
}
if(grades != null){
    grades.classList.add('sortable');
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

document.querySelector('footer').innerHTML="<div class='footer_div'><span>SUP'Intranet by SUP'Internet.</span><span> © 2011 - 2019 All right reserved</span></div>"
}

//Page présence

var lackQuer = document.querySelector('.new-ergo-info')
if(lackQuer != null){
  var lack = lackQuer.innerText

  var regexFind= /à (\d)+%/g
  var found = lack.match(regexFind);

  var thenum1 = found[0].replace( /^\D+/g, '');
  var thenum2 = found[1].replace( /^\D+/g, '');
  var newNum1 = parseInt(thenum1.substring(0, thenum1.length-1));
  var newNum2 = parseInt(thenum2.substring(0, thenum2.length-1));
  document.querySelector('.new-ergo-info').innerHTML=''
  console.log(newNum1)
  var optionsLack = {
    chart: {
        type: 'donut',
        width: '60%'
    },
    series: [newNum1, newNum2],
    labels : ['Présence','Absence'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 100
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
  }

  var chartLack = new ApexCharts(
    document.querySelector(".new-ergo-info"),
    optionsLack
  );

  chartLack.render();
}


//Récupération de tous les différents elements du tableau avant de les mettre dans un tableau

var testGrade = document.querySelector('#grades');
if(testGrade != null){
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
      var datestring = date.getDate()  + " " + months[date.getMonth()] + " " + date.getFullYear();
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
  
  // let arrayData =  {
  //   "date": {"nthChild": 1, data: []}, 
  //   "subject": {"nthChild":2,data: []},
  //   "project": {"nthChild":3,data: []},
  //   "number": {"nthChild":4,data: []},
  //   "com": {"nthChild":5,data: []},
  //  "average":  {"nthChild": 6, data: []}
  // }


  // for (var dataObj in arrayData) {
  //     console.log(dataObj)
  //   const domContent = document.querySelectorAll(`tbody td:nth-child(`+dataObj.nthChild+`)`) 
  //   domContent.forEach(element => {
  //       dataObj.data.push(element.innerText)
  //   });
  // }
  // arrayData.forEach(dataObj => {
  //     console.log(dataObj)
  //   const domContent = document.querySelectorAll(`tbody td:nth-child(${dataObj.nthChild})`) 
  //   domContent.forEach(element => {
  //       dataObj.data.push(element.innerText)
  //   });
  // })



  /*Code insert en mode gros cra de*/


  var sam = document.querySelector('#grades');
  sam.innerHTML='<div id="wrapper"><div class="content-area"><div class="container-fluid"><div class="main"><div class="row sparkboxes mt-4"><div class="col-md-3"><div class="box box1"><div class="details"><h3>1213</h3><h4>CLICKS</h4></div><div id="spark1"></div></div></div><div class="col-md-3"><div class="box box2"><div class="details"><h3>422</h3><h4>VIEWS</h4></div><div id="spark2"></div></div></div><div class="col-md-3"><div class="box box3"><div class="details"><h3>311</h3><h4>LEADS</h4></div><div id="spark3"></div></div></div><div class="col-md-3"><div class="box box4"><div class="details"><h3>22</h3><h4>SALES</h4></div><div id="spark4"></div></div></div></div><div class="row mt-4"><div class="col-md-5"><div class="box shadow mt-4"><div id="radialBarBottom"></div></div></div><div class="col-md-7"><div class="box shadow mt-4"><div id="line-adwords" class=""></div></div></div></div><div class="row mt-4"><div class="col-md-5"><div class="box shadow mt-4"><div id="barchart"></div></div></div><div class="col-md-7"><div class="box shadow mt-4"><div id="areachart"></div></div></div></div></div></div></div></div></div>';


  var options = {
      chart: {
        height: 450,
        type: 'line',
      },
      series: [{
        name: 'Ma notes',
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
          colors: ['#F44336', '#E91E63', '#9C27B0']
        },
        column: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
      },
      fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0'],
        opacity: 0.9,
        type: 'solid',
        gradient: {
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ['#F44336', '#E91E63', '#9C27B0'],
            inverseColors: true,
            opacityFrom: 0.1,
            opacityTo: 1
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%"
        }
      },

    }

    var chart = new ApexCharts(document.querySelector("#content"),options);
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

 var chartBar = new ApexCharts(
      document.querySelector("#wrapper"),
      optionsBar
  );
  
  chartBar.render();

}
