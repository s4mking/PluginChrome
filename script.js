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
    SubMenu.appendChild(contentHtml)
    //MenuHeader.appendChild(SubMenu)
    document.querySelector('#top-wrapper').append(SubMenu)
   i++;
});
console.log(MenuHeader)
/*Traitement des données de dataSidebar poru faire correspondre à la putain de maquette Merci Louis ;) */

