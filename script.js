
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
var arrayStrings = strongText.split("<br>") //A voir mais a terme je pense qu'on vire les infos nom,promos qu'on met dans un deroulant à la linkedin
var thenum = strongText.replace( /^\D+/g, ''); // replace all leading non-digits with nothing
var validate = document.createElement("a")
validate.classList.add("validation_button")
validate.innerText="VALIDER"
validate.setAttribute('href', '?action=presence');
document.querySelector('#top-wrapper').append(validate)