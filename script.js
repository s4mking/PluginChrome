var loginPage = document.querySelector("div input[name='login']");
console.log(loginPage)

/*Ici le js ne s'executera que dans la page de connexion*/
if(loginPage !== null){
    document.querySelector('header').style.display='none';
    document.querySelector('footer').style.display='none';

    /*on reconbtsruit de ezro le form, plus simple que de bosser avec des tables*/
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
UserInformation.innerHTML="Mes Infos &#9662; <a href='?action=logout'>&#128275</a>"
document.querySelector("#v_card_photo").append(UserInformation)
document.querySelector("#v_card_photo").append(dropdownInfo)
check=true
UserInformation.addEventListener('click',function(){
    check==false?dropdownInfo.style.display="none":dropdownInfo.style.display="block"
    check==false?this.style.color="black":this.style.color="grey"
    check==true?check=false:check=true
})

}