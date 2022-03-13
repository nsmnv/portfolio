(function(){"use strict";var s={257:function(s,e,i){var n=i(9242),a=i(3396);function t(s,e,i,n,t,o){const l=(0,a.up)("SmnvHeader"),r=(0,a.up)("SmnvPromo"),c=(0,a.up)("SmnvServices"),g=(0,a.up)("SmnvPortfolio"),p=(0,a.up)("SmnvStages"),h=(0,a.up)("SmnvCosts"),_=(0,a.up)("SmnvContacts"),d=(0,a.up)("SmnvFooter");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l,{"is-english":t.isEnglish,onToggleLanguage:o.switchLanguage},null,8,["is-english","onToggleLanguage"]),(0,a._)("main",null,[(0,a.Wm)(r,{"is-english":t.isEnglish},null,8,["is-english"]),(0,a.Wm)(c,{"is-english":t.isEnglish},null,8,["is-english"]),(0,a.Wm)(g,{"is-english":t.isEnglish},null,8,["is-english"]),(0,a.Wm)(p,{"is-english":t.isEnglish},null,8,["is-english"]),(0,a.Wm)(h,{"is-english":t.isEnglish},null,8,["is-english"]),(0,a.Wm)(_,{"is-english":t.isEnglish},null,8,["is-english"])]),(0,a.Wm)(d,{"is-english":t.isEnglish},null,8,["is-english"])],64)}var o=i(7139);const l={class:"header",id:"top"},r=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},[(0,a._)("path",{id:"arrow",d:"M1.77703 0.0201696L13.0874 0.161388L12.9452 11.5494L10.8888 11.5237L10.9879 3.58122L1.45435 12.9439L0.0185119 11.4618L9.4628 2.187L1.75117 2.09071L1.77703 0.0201696Z"})],-1),c={class:"container header__container"},g={class:"header__lang"},p={class:"nav"},h={key:0},_={key:1},d={key:0},u={key:1},w={key:0},v={key:1},f={key:0},m={key:1},y={class:"social-links"},k=(0,a._)("span",{class:"line line--top"},null,-1),D=(0,a._)("span",{class:"line line--bottom"},null,-1),b=[k,D];function E(s,e,i,n,t,k){return(0,a.wg)(),(0,a.iD)("header",l,[r,(0,a._)("div",c,[(0,a._)("div",g,[(0,a._)("button",{type:"button",class:(0,o.C_)(["switcher",{_active:i.isEnglish}]),onClick:e[0]||(e[0]=(...s)=>k.toggleLanguage&&k.toggleLanguage(...s))}," En ",2),(0,a._)("button",{type:"button",class:(0,o.C_)(["switcher",{_active:!i.isEnglish}]),onClick:e[1]||(e[1]=(...s)=>k.toggleLanguage&&k.toggleLanguage(...s))}," Ru ",2)]),(0,a._)("div",{class:(0,o.C_)(["header__nav",{_active:t.menuOpened}])},[(0,a._)("nav",p,[(0,a._)("a",{href:"#portfolio",class:"nav__link",onClick:e[2]||(e[2]=(...s)=>k.closeMenu&&k.closeMenu(...s))},[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",h,"Portfolio")):((0,a.wg)(),(0,a.iD)("span",_,"Портфолио"))]),(0,a._)("a",{href:"#service",class:"nav__link",onClick:e[3]||(e[3]=(...s)=>k.closeMenu&&k.closeMenu(...s))},[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",d,"Services")):((0,a.wg)(),(0,a.iD)("span",u,"Услуги"))]),(0,a._)("a",{href:"#stages",class:"nav__link",onClick:e[4]||(e[4]=(...s)=>k.closeMenu&&k.closeMenu(...s))},[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",w,"Work stages")):((0,a.wg)(),(0,a.iD)("span",v,"Этапы работы"))]),(0,a._)("a",{href:"#contacts",class:"nav__link",onClick:e[5]||(e[5]=(...s)=>k.closeMenu&&k.closeMenu(...s))},[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",f,"Contacts")):((0,a.wg)(),(0,a.iD)("span",m,"Контакты"))])]),(0,a._)("div",y,[(0,a._)("a",{href:"https://www.instagram.com/websmnv/?hl=ru",class:"social-link",target:"_blank",onClick:e[6]||(e[6]=(...s)=>k.closeMenu&&k.closeMenu(...s))}," Instagram "),(0,a._)("a",{href:"tg://resolve?domain=n_smnv",class:"social-link",target:"_blank",onClick:e[7]||(e[7]=(...s)=>k.closeMenu&&k.closeMenu(...s))}," Telegram "),(0,a._)("a",{href:"https://www.behance.net/nataliasemenova",class:"social-link",target:"_blank",onClick:e[8]||(e[8]=(...s)=>k.closeMenu&&k.closeMenu(...s))}," Behance ")])],2),(0,a._)("button",{type:"button",class:(0,o.C_)(["header__burger",{_active:t.menuOpened}]),onClick:e[9]||(e[9]=(...s)=>k.handleMenu&&k.handleMenu(...s))},b,2)])])}var x={name:"SmnvHeader",props:{isEnglish:{type:Boolean,required:!0}},emits:["toggle-language"],data(){return{menuOpened:!1}},methods:{handleMenu(){this.menuOpened=!this.menuOpened,document.body.style.position=this.menuOpened?"fixed":""},closeMenu(){this.menuOpened=!1,document.body.style.position=""},toggleLanguage(){this.$emit("toggle-language")}}},S=i(89);const W=(0,S.Z)(x,[["render",E]]);var I=W,B=i(6116);const C={class:"promo"},A={class:"container"},L={class:"promo__title"},O={key:0,class:"english"},M={key:1},T={class:"promo__body"},P={class:"promo__info"},Z={class:"info"},j={key:0},$={key:1},F={class:"tags"},H={class:"tag"},q={key:0},Q={key:1},R={class:"tag"},V={key:0},Y={key:1},U=(0,a._)("li",{class:"tag tag--mobile"},[(0,a._)("span",null,"tilda")],-1),z=["href"],N=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1),G={key:0},J={key:1},K=(0,a._)("div",{class:"promo__photo"},[(0,a._)("img",{alt:"Natalia Semenova",src:B})],-1);function X(s,e,i,n,t,o){return(0,a.wg)(),(0,a.iD)("section",C,[(0,a._)("div",A,[(0,a._)("h1",L,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",O,"Web design & sites")):((0,a.wg)(),(0,a.iD)("span",M,"Веб-дизайн & сайты"))]),(0,a._)("div",T,[(0,a._)("div",P,[(0,a._)("p",Z,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",j," Hello! I'm Natalia. I develop websites on Tilda platform and I also design websites for other platforms. I'm sure that design is not only about appearance, but also about convenience and functionality. The end result of my work is neat, clean and responsive web product that works. ")):((0,a.wg)(),(0,a.iD)("span",$," Здравствуйте! Меня зовут Наталья. Я разрабатываю сайты на Tilda, а также создаю дизайн сайтов под другие платформы. Я уверена, что дизайн – это не только внешний вид, но и удобство и функциональность. Конечным результатом моей работы является аккуратный, чистый и отзывчивый веб-продукт, который работает. "))]),(0,a._)("ul",F,[(0,a._)("li",H,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",q,"web design")):((0,a.wg)(),(0,a.iD)("span",Q,"веб-дизайн"))]),(0,a._)("li",R,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",V,"websites")):((0,a.wg)(),(0,a.iD)("span",Y,"сайты"))]),U]),(0,a._)("a",{href:i.isEnglish?"https://docs.google.com/forms/d/e/1FAIpQLSeOfcCLaOei1hR-935rW36bM5uRZy94nIIM9-Qa3TD-Gmustw/viewform":"https://docs.google.com/forms/d/e/1FAIpQLSe-HPYDxVZKD84IA5-YhDaWdueha5ivqTz7_JR807QmXRQWNw/viewform",class:"brief",target:"_blank"},[N,i.isEnglish?((0,a.wg)(),(0,a.iD)("span",G,"fill brief")):((0,a.wg)(),(0,a.iD)("span",J,"заполнить бриф"))],8,z)]),K])])])}var ss={name:"SmnvPromo",props:{isEnglish:{type:Boolean,required:!0}}};const es=(0,S.Z)(ss,[["render",X]]);var is=es;const ns={class:"services section-padding",id:"service"},as={class:"container"},ts={class:"section-title"},os={key:0},ls={key:1},rs={class:"services__list"},cs={class:"services__item"},gs={class:"service"},ps={class:"service__title"},hs={key:0},_s={key:1},ds={class:"service__info"},us={key:0},ws={key:1},vs={class:"service__details"},fs={class:"service__price"},ms={key:0,class:"label"},ys={key:1,class:"label"},ks=(0,a._)("span",{class:"price"},"$400",-1),Ds={class:"service__time"},bs={key:0},Es={key:1},xs={class:"services__item"},Ss={class:"service"},Ws={class:"service__title"},Is={key:0},Bs={key:1},Cs={class:"service__info"},As={key:0},Ls={key:1},Os={class:"service__details"},Ms={class:"service__price"},Ts={key:0,class:"label"},Ps={key:1,class:"label"},Zs=(0,a._)("span",{class:"price"},"$600",-1),js={class:"service__time"},$s={key:0},Fs={key:1},Hs={class:"services__item"},qs={class:"service"},Qs={class:"service__title"},Rs={key:0},Vs={key:1},Ys={class:"service__info"},Us={key:0},zs={key:1},Ns={class:"service__details"},Gs={class:"service__price"},Js={key:0,class:"label"},Ks={key:1,class:"label"},Xs=(0,a._)("span",{class:"price"},"$800",-1),se={class:"service__time"},ee={key:0},ie={key:1},ne={class:"services__item"},ae={class:"service"},te={class:"service__title"},oe={key:0},le={key:1},re={class:"service__info"},ce={key:0},ge={key:1},pe={class:"service__details"},he={class:"service__price"},_e={key:0,class:"label"},de={key:1,class:"label"},ue=(0,a._)("span",{class:"price"},"$200",-1),we={class:"service__time"},ve={key:0},fe={key:1};function me(s,e,i,n,t,o){return(0,a.wg)(),(0,a.iD)("section",ns,[(0,a._)("div",as,[(0,a._)("h2",ts,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",os,"services")):((0,a.wg)(),(0,a.iD)("span",ls,"услуги"))]),(0,a._)("ul",rs,[(0,a._)("li",cs,[(0,a._)("div",gs,[(0,a._)("h3",ps,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",hs,"Landing page")):((0,a.wg)(),(0,a.iD)("span",_s,"Лендинг"))]),(0,a._)("p",ds,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",us," A small one-page site that calls the user to action: order a product or service, call the manager, leave a request. Such a site contains feedback form, information about the product, discounts, special offers. The landing page is perfect for webinars, info products, events, etc. ")):((0,a.wg)(),(0,a.iD)("span",ws," Небольшой одностраничный сайт, который призывает пользователя к действию: заказать товар или услугу, позвонить менеджеру, оставить заявку. На таком сайте размещают информацию о продукте, скидках, спец. предложениях, форму обратной связи. Лендинг отлично подойдёт для вебинаров, инфо-продуктов, мероприятий и т.д. "))]),(0,a._)("div",vs,[(0,a._)("div",fs,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ms,"from")):((0,a.wg)(),(0,a.iD)("span",ys,"от")),ks]),(0,a._)("div",Ds,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",bs,"(up to 14 days)")):((0,a.wg)(),(0,a.iD)("span",Es,"(до 14 дней)"))])])])]),(0,a._)("li",xs,[(0,a._)("div",Ss,[(0,a._)("h3",Ws,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Is,"Multipage site")):((0,a.wg)(),(0,a.iD)("span",Bs,"Многостраничный сайт"))]),(0,a._)("p",Cs,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",As," A site with a more complex structure. It contains detailed information about the company, goods/services, site search, photo/video materials, certificates, reviews, blog, contacts, etc. Such a site is suitable for large companies that need not only sales, but also building a reputation online, searching for investors and partners. ")):((0,a.wg)(),(0,a.iD)("span",Ls," Сайт с более сложной структурой. На нём размещается развёрнутая информация о компании, товарах/услугах, поиск по сайту, фото/видео-материалы, сертификаты, отзывы, блог, контакты и т.д. Такой сайт подойдёт крупным компаниям, которым нужны не только продажи, но и построение репутации в онлайне, поиск инвесторов и партнёров. "))]),(0,a._)("div",Os,[(0,a._)("div",Ms,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Ts,"from")):((0,a.wg)(),(0,a.iD)("span",Ps,"от")),Zs]),(0,a._)("div",js,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",$s,"(from 14 days)")):((0,a.wg)(),(0,a.iD)("span",Fs,"(от 14 дней)"))])])])]),(0,a._)("li",Hs,[(0,a._)("div",qs,[(0,a._)("h3",Qs,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Rs,"E-commerce")):((0,a.wg)(),(0,a.iD)("span",Vs,"Интернет-магазин"))]),(0,a._)("p",Ys,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Us," A site that contains a catalog with products, their detailed description, photos and prices, a shopping cart, an online payment system and notifications of the seller and buyer about the order. An online store is suitable for those who offer a wide range of goods or services and want to expand their sales by going online. ")):((0,a.wg)(),(0,a.iD)("span",zs," Сайт, который содержит каталог с товарами, его подробным описанием, фотографиями и ценами, корзиной, системой онлайн-оплаты и уведомлением продавца и покупателя о заказе. Интернет-магазин подойдёт тем, кто предлагает широкий ассортимент товаров или услуг и хочет расширить продажи, перейдя в онлайн. "))]),(0,a._)("div",Ns,[(0,a._)("div",Gs,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Js,"from")):((0,a.wg)(),(0,a.iD)("span",Ks,"от")),Xs]),(0,a._)("div",se,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ee,"(from 14 days)")):((0,a.wg)(),(0,a.iD)("span",ie,"(от 14 дней)"))])])])]),(0,a._)("li",ne,[(0,a._)("div",ae,[(0,a._)("h3",te,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",oe,"Website design in Figma")):((0,a.wg)(),(0,a.iD)("span",le,"Дизайн сайта в Figma"))]),(0,a._)("p",re,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ce," Development of a design layout of the site for further transfer to web developer. ")):((0,a.wg)(),(0,a.iD)("span",ge," Разработка дизайн-макета сайта для дальнейшей передачи его верстальщику. "))]),(0,a._)("div",pe,[(0,a._)("div",he,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",_e,"from")):((0,a.wg)(),(0,a.iD)("span",de,"от")),ue]),(0,a._)("div",we,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ve,"(from 7 days)")):((0,a.wg)(),(0,a.iD)("span",fe,"(от 7 дней)"))])])])])])])])}var ye={name:"SmnvServices",props:{isEnglish:{type:Boolean,required:!0}}};const ke=(0,S.Z)(ye,[["render",me]]);var De=ke,be=i(5668),Ee=i(1729),xe=i(4566),Se=i(8017),We=i(2662),Ie=i(2589),Be=i(6534),Ce=i(223),Ae=i(1026);const Le={class:"portfolio section-padding",id:"portfolio"},Oe={class:"container"},Me={class:"section-title"},Te={key:0},Pe={key:1},Ze={class:"portfolio__body"},je={class:"portfolio__list"},$e={class:"portfolio__item"},Fe={href:"#!",class:"card card--upcoming"},He={class:"card__image"},qe=(0,a._)("img",{class:"card__img",alt:"Vogue Dance Histor",src:be},null,-1),Qe={class:"label"},Re={key:0},Ve={key:1},Ye={class:"card__title"},Ue={key:0},ze={key:1},Ne=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1),Ge={class:"portfolio__item"},Je={href:"https://xn--80ahbenfd7azbosd7e.xn--p1ai/",class:"card",target:"_blank"},Ke=(0,a._)("img",{class:"card__img",alt:"Franchise landing page",src:Ee},null,-1),Xe={class:"card__title"},si={key:0},ei={key:1},ii=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1),ni={class:"portfolio__item"},ai={href:"https://lova-dsgn.com/",class:"card",target:"_blank"},ti=(0,a._)("img",{class:"card__img",alt:"Website for a brand design studio",src:xe},null,-1),oi={class:"card__title"},li={key:0},ri={key:1},ci=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1),gi={class:"portfolio__list"},pi={class:"portfolio__item"},hi={href:"#!",class:"card card--upcoming"},_i={class:"card__image"},di=(0,a._)("img",{class:"card__img",alt:"Website for architecture and design bureau",src:Se},null,-1),ui={class:"label"},wi={key:0},vi={key:1},fi={class:"card__title"},mi={key:0},yi={key:1},ki=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1),Di={class:"portfolio__item"},bi={href:"https://artandsweets.ru/",class:"card",target:"_blank"},Ei=(0,a._)("img",{class:"card__img",alt:"Website for a confectionery",src:We},null,-1),xi={class:"card__title"},Si={key:0},Wi={key:1},Ii=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1),Bi={class:"portfolio__item"},Ci={href:"https://www.behance.net/gallery/127815777/Website-for-an-online-school-%28energy-meditation%29",class:"card",target:"_blank"},Ai=(0,a._)("img",{class:"card__img",alt:"Website for the School of Energy Practitioners",src:Ie},null,-1),Li={class:"card__title"},Oi={key:0},Mi={key:1},Ti=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1),Pi={class:"portfolio__list"},Zi={class:"portfolio__item"},ji={href:"#!",class:"card card--upcoming"},$i={class:"card__image"},Fi=(0,a._)("img",{class:"card__img",alt:"Website for a permanent makeup artist",src:Be},null,-1),Hi={class:"label"},qi={key:0},Qi={key:1},Ri={class:"card__title"},Vi={key:0},Yi={key:1},Ui=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1),zi={class:"portfolio__item"},Ni={href:"https://www.behance.net/gallery/117642335/Wellness-center-Uweya-website-design-yoga-meditation",class:"card",target:"_blank"},Gi=(0,a._)("img",{class:"card__img",alt:"Website for a wellness center",src:Ce},null,-1),Ji={class:"card__title"},Ki={key:0},Xi={key:1},sn=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1),en={class:"portfolio__item"},nn={href:"https://www.behance.net/gallery/116699961/Safisa-organic-skincare-cosmetics-e-commerce",class:"card",target:"_blank"},an=(0,a._)("img",{class:"card__img",alt:"Online store of skin care cosmetics",src:Ae},null,-1),tn={class:"card__title"},on={key:0},ln={key:1},rn=(0,a._)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1);function cn(s,e,i,n,t,o){return(0,a.wg)(),(0,a.iD)("section",Le,[(0,a._)("div",Oe,[(0,a._)("h2",Me,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Te,"portfolio")):((0,a.wg)(),(0,a.iD)("span",Pe,"портфолио"))]),(0,a._)("div",Ze,[(0,a._)("ul",je,[(0,a._)("li",$e,[(0,a._)("a",Fe,[(0,a._)("div",He,[qe,(0,a._)("div",Qe,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Re,"Soon")):((0,a.wg)(),(0,a.iD)("span",Ve,"Скоро"))])]),(0,a._)("div",Ye,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Ue,"Longread of Vogue Dance History")):((0,a.wg)(),(0,a.iD)("span",ze,"Лонгрид истории танца Вог")),Ne])])]),(0,a._)("li",Ge,[(0,a._)("a",Je,[Ke,(0,a._)("div",Xe,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",si,"Franchise landing page")):((0,a.wg)(),(0,a.iD)("span",ei,"Лендинг для франшизы")),ii])])]),(0,a._)("li",ni,[(0,a._)("a",ai,[ti,(0,a._)("div",oi,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",li,"Website for a brand design studio")):((0,a.wg)(),(0,a.iD)("span",ri,"Сайт для студии бренд-дизайна")),ci])])])]),(0,a._)("ul",gi,[(0,a._)("li",pi,[(0,a._)("a",hi,[(0,a._)("div",_i,[di,(0,a._)("div",ui,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",wi,"Soon")):((0,a.wg)(),(0,a.iD)("span",vi,"Скоро"))])]),(0,a._)("div",fi,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",mi," Website for architecture and design bureau ")):((0,a.wg)(),(0,a.iD)("span",yi,"Сайт для бюро архитектуры и дизайна")),ki])])]),(0,a._)("li",Di,[(0,a._)("a",bi,[Ei,(0,a._)("div",xi,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Si,"Website for a confectionery")):((0,a.wg)(),(0,a.iD)("span",Wi,"Сайт для кондитерской")),Ii])])]),(0,a._)("li",Bi,[(0,a._)("a",Ci,[Ai,(0,a._)("div",Li,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Oi," Website for the School of Energy Practitioners ")):((0,a.wg)(),(0,a.iD)("span",Mi,"Сайт для школы энергопрактик")),Ti])])])]),(0,a._)("ul",Pi,[(0,a._)("li",Zi,[(0,a._)("a",ji,[(0,a._)("div",$i,[Fi,(0,a._)("div",Hi,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",qi,"Soon")):((0,a.wg)(),(0,a.iD)("span",Qi,"Скоро"))])]),(0,a._)("div",Ri,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Vi," Website for a permanent makeup artist ")):((0,a.wg)(),(0,a.iD)("span",Yi,"Сайт для мастера перманентного макияжа")),Ui])])]),(0,a._)("li",zi,[(0,a._)("a",Ni,[Gi,(0,a._)("div",Ji,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Ki,"Website for a wellness center")):((0,a.wg)(),(0,a.iD)("span",Xi,"Сайт для оздоровительного центра")),sn])])]),(0,a._)("li",en,[(0,a._)("a",nn,[an,(0,a._)("div",tn,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",on," Online store of skin care cosmetics ")):((0,a.wg)(),(0,a.iD)("span",ln,"Интернет-магазин уходовой косметики")),rn])])])])])])])}var gn={name:"SmnvPortfolio",props:{isEnglish:{type:Boolean,required:!0}}};const pn=(0,S.Z)(gn,[["render",cn]]);var hn=pn;const _n={class:"stages section-padding",id:"stages"},dn={class:"container"},un={class:"section-title"},wn={key:0},vn={key:1},fn={class:"stages__list"},mn={class:"card"},yn={class:"card__header"},kn=(0,a._)("span",{class:"card__number"},"1 /",-1),Dn={class:"card__title"},bn={key:0},En={key:1},xn={class:"card__info"},Sn={key:0},Wn={key:1},In={class:"card"},Bn={class:"card__header"},Cn=(0,a._)("span",{class:"card__number"},"2 /",-1),An={class:"card__title"},Ln={key:0},On={key:1},Mn={class:"card__info"},Tn={key:0},Pn={key:1},Zn={class:"card"},jn={class:"card__header"},$n=(0,a._)("span",{class:"card__number"},"3 /",-1),Fn={class:"card__title"},Hn={key:0},qn={key:1},Qn={class:"card__info"},Rn={key:0},Vn={key:1},Yn={class:"card"},Un={class:"card__header"},zn=(0,a._)("span",{class:"card__number"},"4 /",-1),Nn={class:"card__title"},Gn={key:0},Jn={key:1},Kn={class:"card__info"},Xn={key:0},sa={key:1},ea={class:"card"},ia={class:"card__header"},na=(0,a._)("span",{class:"card__number"},"5 /",-1),aa={class:"card__title"},ta={key:0},oa={key:1},la={class:"card__info"},ra={key:0},ca={key:1};function ga(s,e,i,n,t,o){return(0,a.wg)(),(0,a.iD)("section",_n,[(0,a._)("div",dn,[(0,a._)("h2",un,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",wn,"work stages")):((0,a.wg)(),(0,a.iD)("span",vn,"этапы работы"))]),(0,a._)("ul",fn,[(0,a._)("li",mn,[(0,a._)("div",yn,[kn,(0,a._)("h3",Dn,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",bn,"Briefing")):((0,a.wg)(),(0,a.iD)("span",En,"Брифинг"))])]),(0,a._)("p",xn,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Sn," I send you an online brief or I call you in a convenient way (we will agree on the time in advance) to learn more about your company, target audience, competitors, as well as wishes for the design and structure of the site. ")):((0,a.wg)(),(0,a.iD)("span",Wn," Я отправляю вам онлайн-бриф или мы созваниваемся удобным для вас способом (время заранее согласуем), чтобы узнать больше о вашей компании, целевой аудитории, конкурентах, а также пожелания по оформлению дизайна и структуры сайта. "))])]),(0,a._)("li",In,[(0,a._)("div",Bn,[Cn,(0,a._)("h3",An,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Ln,"Analytics")):((0,a.wg)(),(0,a.iD)("span",On,"Аналитика"))])]),(0,a._)("p",Mn,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Tn," I analyze your company, target audience, competitors, make a site map. I select examples of visual solutions and ask you to comment on them: what you like and dislike and why. ")):((0,a.wg)(),(0,a.iD)("span",Pn," Провожу анализ вашей компании, ЦА, конкурентов, составляю карту сайта. Подбираю примеры визуальных решений и прошу вас их прокомментировать: что нравится и не нравится и почему. "))])]),(0,a._)("li",Zn,[(0,a._)("div",jn,[$n,(0,a._)("h3",Fn,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Hn,"Prototype")):((0,a.wg)(),(0,a.iD)("span",qn,"Прототип"))])]),(0,a._)("p",Qn,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Rn," I am developing the structure of the future site. Prototype - draft, sketch, foundation without design. So that you can understand what pages and blocks the site will consist of. ")):((0,a.wg)(),(0,a.iD)("span",Vn," Разрабатываю структуру будущего сайта. Прототип – черновик, эскиз, фундамент без дизайна. Для того, чтобы вы понимали, из каких страниц и блоков будет состоять сайт. "))])]),(0,a._)("li",Yn,[(0,a._)("div",Un,[zn,(0,a._)("h3",Nn,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Gn,"Design")):((0,a.wg)(),(0,a.iD)("span",Jn,"Дизайн"))])]),(0,a._)("p",Kn,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Xn," I create a design concept for the site based on your comments and approved style. ")):((0,a.wg)(),(0,a.iD)("span",sa," Создаю дизайн-концепцию сайта на основе ваших комментариев и утвержденной стилистики. "))])]),(0,a._)("li",ea,[(0,a._)("div",ia,[na,(0,a._)("h3",aa,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ta,"Development")):((0,a.wg)(),(0,a.iD)("span",oa,"Верстка"))])]),(0,a._)("p",la,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ra," I transfer all previously approved layouts to Tilda, adapt them to all devices, animate them, set up the necessary functionality, set up basic SEO, bind a domain and an SSL certificate. ")):((0,a.wg)(),(0,a.iD)("span",ca," Я переношу все утвержденные ранее макеты в Тильду, адаптирую их под все устройства, анимирую, настраиваю необходимый функционал, настраиваю базовое SEO, привязываю домен и SSL-сертификат. "))])])])])])}var pa={name:"SmnvStages",props:{isEnglish:{type:Boolean,required:!0}}};const ha=(0,S.Z)(pa,[["render",ga]]);var _a=ha;const da={class:"costs section-padding"},ua={class:"container"},wa={class:"section-title costs__title"},va={key:0},fa={key:1},ma={key:0},ya={key:1},ka={key:0},Da={key:1},ba={key:0},Ea={key:1},xa={key:0},Sa={key:1},Wa={key:0},Ia={key:1},Ba={key:0},Ca=(0,a.Uk)(" If you don't have any ready-made graphics or it's outdated, I can pick up photos/videos from free stocks. But I still recommend using the services of a photographer or images from paid resources."),Aa=(0,a._)("br",null,null,-1),La=(0,a._)("br",null,null,-1),Oa=(0,a.Uk)(" Why? Because the photographer or videographer will create unique content that no one else has. In addition, the content will fully comply with the requirements of the company. "),Ma=[Ca,Aa,La,Oa],Ta={key:1},Pa=(0,a.Uk)(" Если у вас совсем нет готовой графики или она устарела, я могу подобрать фото/видео из бесплатных стоков. Но рекомендую всё же использовать услуги фотографа или изображения из платных ресурсов."),Za=(0,a._)("br",null,null,-1),ja=(0,a._)("br",null,null,-1),$a=(0,a.Uk)(" Почему? Потому что фотограф или видеограф создаст уникальный контент, которого больше ни у кого нет. К тому же, контент будет полностью соответствовать требованиям компании. "),Fa=[Pa,Za,ja,$a],Ha={key:0},qa={key:1},Qa={key:0},Ra={key:1},Va={key:0},Ya={key:1},Ua={key:0},za={key:1},Na={key:0},Ga={key:1},Ja={key:0},Ka={key:1};function Xa(s,e,i,n,t,o){const l=(0,a.up)("SmnvAccordionItem"),r=(0,a.up)("SmnvAccordion");return(0,a.wg)(),(0,a.iD)("section",da,[(0,a._)("div",ua,[(0,a._)("h2",wa,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",va,"additional costs for the site")):((0,a.wg)(),(0,a.iD)("span",fa,"доп. расходы для сайта"))]),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{"accordion-trigger":(0,a.w5)((()=>[(0,a._)("h3",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ma,"Account")):((0,a.wg)(),(0,a.iD)("span",ya,"Аккаунт"))])])),"accordion-content":(0,a.w5)((()=>[(0,a._)("p",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ka," Tilda has hosting called Personal (for one site) that costs $15 per month. If you buy for a full year, it will cost $120 per year. If you plan to host several sites, then the Business plan is suitable ($25 per month and $240 per year). ")):((0,a.wg)(),(0,a.iD)("span",Da," У Tilda есть хостинг Personal (на один сайт) стоит $15/мес, если покупать на год, то $120/год. Если вы планируете размещать несколько сайтов, то подойдёт тариф Business ($25/мес, если покупать на год, то $240/год). "))])])),_:1}),(0,a.Wm)(l,null,{"accordion-trigger":(0,a.w5)((()=>[(0,a._)("h3",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ba,"Domain")):((0,a.wg)(),(0,a.iD)("span",Ea,"Домен"))])])),"accordion-content":(0,a.w5)((()=>[(0,a._)("p",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",xa," You can get your domen on Tilda platform. The first year is free if you pay yearly Personal or Business subscription. After a year, the domain price can be renewed at the usual registrar's tariff (reg.ru). ")):((0,a.wg)(),(0,a.iD)("span",Sa," Можно оформить прямо на Тильде. Первый год они дают его в подарок (при условии, если вы купите годовой тариф Personal или Business). Через год стоимость домена можно продлить по обычному тарифу регистратора (РЕГ.РУ). "))])])),_:1}),(0,a.Wm)(l,null,{"accordion-trigger":(0,a.w5)((()=>[(0,a._)("h3",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Wa,"Photo and video shooting")):((0,a.wg)(),(0,a.iD)("span",Ia,"Фото и видеосъёмка"))])])),"accordion-content":(0,a.w5)((()=>[(0,a._)("p",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Ba,Ma)):((0,a.wg)(),(0,a.iD)("span",Ta,Fa))])])),_:1}),(0,a.Wm)(l,null,{"accordion-trigger":(0,a.w5)((()=>[(0,a._)("h3",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Ha,"Complex copywriting")):((0,a.wg)(),(0,a.iD)("span",qa,"Сложный копирайтинг"))])])),"accordion-content":(0,a.w5)((()=>[(0,a._)("p",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Qa," I arrange the sent text content into a single structure, if necessary, I rewrite the finished text. ")):((0,a.wg)(),(0,a.iD)("span",Ra," Я оформляю присланный текстовый контент в единую структуру, при необходимости делаю рерайт готового текста. "))])])),_:1}),(0,a.Wm)(l,null,{"accordion-trigger":(0,a.w5)((()=>[(0,a._)("h3",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Va,"Fonts")):((0,a.wg)(),(0,a.iD)("span",Ya,"Шрифты"))])])),"accordion-content":(0,a.w5)((()=>[(0,a._)("p",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Ua," There are both free and paid fonts. Among the free fonts there are a lot of cool ones, there are quite enough of them. But if you want individuality, you can purchase a paid option. The price is indicated for one style, two or three are enough for the site. ")):((0,a.wg)(),(0,a.iD)("span",za," Есть как бесплатные, так и платные шрифты. Среди бесплатных шрифтов есть очень много классных, их вполне хватает. Но если хочется индивидуальности, то можно приобрести платный вариант. Цена указывается за одно начертание, для сайта вполне хватит двух-трёх. "))])])),_:1}),(0,a.Wm)(l,null,{"accordion-trigger":(0,a.w5)((()=>[(0,a._)("h3",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Na,"Website promotion")):((0,a.wg)(),(0,a.iD)("span",Ga,"Продвижение сайта"))])])),"accordion-content":(0,a.w5)((()=>[(0,a._)("p",null,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Ja," I only do basic SEO setup — I optimize images, set up headings, open the site for search engines, add the site to Yandex.Webmaster and Google.Console. Further promotion is handled by a SEO specialist. ")):((0,a.wg)(),(0,a.iD)("span",Ka," Я делаю только базовую настройку SEO — оптимизирую изображения, настраиваю заголовки, открываю сайт для поисковиков, добавляю сайт в Яндекс.Вебмастер и Google.Console. Дальнейшим продвижением занимается SEO-специалист. "))])])),_:1})])),_:1})])])}const st={class:"accordion"};function et(s,e,i,n,t,o){return(0,a.wg)(),(0,a.iD)("ul",st,[(0,a.WI)(s.$slots,"default")])}var it={props:{},data(){return{Accordion:{count:0,active:null}}},provide(){return{Accordion:this.Accordion}}};const nt=(0,S.Z)(it,[["render",et]]);var at=nt;const tt={class:"accordion__item"},ot=(0,a._)("span",{class:"btn"},[(0,a._)("svg",{width:"17",height:"17",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{d:"M7.75871 0H9.24127C9.37305 0 9.43894 0.062963 9.43894 0.188889V16.8111C9.43894 16.937 9.37305 17 9.24127 17H7.75871C7.62693 17 7.56104 16.937 7.56104 16.8111V0.188889C7.56104 0.062963 7.62693 0 7.75871 0Z"}),(0,a._)("path",{d:"M0.197674 7.60254H16.8023C16.9341 7.60254 17 7.6655 17 7.79143V9.20809C17 9.33402 16.9341 9.39698 16.8023 9.39698H0.197674C0.0658915 9.39698 0 9.33402 0 9.20809V7.79143C0 7.6655 0.0658915 7.60254 0.197674 7.60254Z"})])],-1),lt={class:"accordion__content"};function rt(s,e,i,t,l,r){return(0,a.wg)(),(0,a.iD)("li",tt,[(0,a._)("div",{class:(0,o.C_)(["accordion__trigger",{_active:r.visible}]),onClick:e[0]||(e[0]=(...s)=>r.open&&r.open(...s))},[(0,a.WI)(s.$slots,"accordion-trigger"),ot],2),(0,a.Wm)(n.uT,{name:"accordion",onEnter:r.start,onAfterEnter:r.end,onBeforeLeave:r.start,onAfterLeave:r.end},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",lt,[(0,a.WI)(s.$slots,"accordion-content")],512),[[n.F8,r.visible]])])),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])])}var ct={inject:["Accordion"],data(){return{index:null}},computed:{visible(){return this.index==this.Accordion.active}},methods:{open(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start(s){s.style.height=s.scrollHeight+"px"},end(s){s.style.height=""}},created(){this.index=this.Accordion.count++}};const gt=(0,S.Z)(ct,[["render",rt]]);var pt=gt,ht={name:"SmnvCosts",components:{SmnvAccordion:at,SmnvAccordionItem:pt},props:{isEnglish:{type:Boolean,required:!0}},data(){return{index:null,Accordion:{count:0,active:null}}},computed:{visible(){return this.index==this.Accordion.active}},methods:{open(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start(s){s.style.height=s.scrollHeight+"px"},end(s){s.style.height=""}},created(){this.index=this.Accordion.count++}};const _t=(0,S.Z)(ht,[["render",Xa]]);var dt=_t;const ut={class:"contacts section-padding",id:"contacts"},wt={class:"container"},vt={class:"section-title"},ft={key:0},mt={key:1},yt={class:"contacts__body"},kt=(0,a.uE)('<ul class="contacts__links"><li class="contacts__link"><a href="https://www.instagram.com/websmnv/?hl=ru" class="social-link" target="_blank"><svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#arrow"></use></svg> Instagram </a></li><li class="contacts__link"><a href="https://www.behance.net/nataliasemenova" class="social-link" target="_blank"><svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#arrow"></use></svg> Behance </a></li><li class="contacts__link"><a href="tg://resolve?domain=n_smnv" class="social-link" target="_blank"><svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#arrow"></use></svg> Telegram </a></li><li class="contacts__link"><a href="https://wa.me/79213360423" class="social-link" target="_blank"><svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#arrow"></use></svg> Whatsapp </a></li></ul>',1),Dt=["href"],bt={key:0},Et={key:1};function xt(s,e,i,n,t,o){return(0,a.wg)(),(0,a.iD)("section",ut,[(0,a._)("div",wt,[(0,a._)("h2",vt,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",ft,"contacts")):((0,a.wg)(),(0,a.iD)("span",mt,"контакты"))]),(0,a._)("div",yt,[kt,(0,a._)("a",{href:i.isEnglish?"https://docs.google.com/forms/d/e/1FAIpQLSeOfcCLaOei1hR-935rW36bM5uRZy94nIIM9-Qa3TD-Gmustw/viewform":"https://docs.google.com/forms/d/e/1FAIpQLSe-HPYDxVZKD84IA5-YhDaWdueha5ivqTz7_JR807QmXRQWNw/viewform",class:"contacts__brief",target:"_blank"},[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",bt,"fill brief")):((0,a.wg)(),(0,a.iD)("span",Et,"заполнить бриф"))],8,Dt)])])])}var St={name:"SmnvContacts",props:{isEnglish:{type:Boolean,required:!0}}};const Wt=(0,S.Z)(St,[["render",xt]]);var It=Wt;const Bt={class:"footer"},Ct={class:"container"},At={class:"footer__body"},Lt=(0,a._)("div",{class:"footer__name"},"Natalia Semenova 2022",-1),Ot={href:"#top",class:"footer__top"},Mt={key:0},Tt={key:1},Pt=(0,a._)("svg",{width:"10",height:"9",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("use",{href:"#arrow"})],-1);function Zt(s,e,i,n,t,o){return(0,a.wg)(),(0,a.iD)("footer",Bt,[(0,a._)("div",Ct,[(0,a._)("div",At,[Lt,(0,a._)("a",Ot,[i.isEnglish?((0,a.wg)(),(0,a.iD)("span",Mt,"Back to top")):((0,a.wg)(),(0,a.iD)("span",Tt,"Наверх")),Pt])])])])}var jt={name:"SmnvFooter",props:{isEnglish:{type:Boolean,required:!0}}};const $t=(0,S.Z)(jt,[["render",Zt]]);var Ft=$t,Ht={name:"App",components:{SmnvHeader:I,SmnvPromo:is,SmnvServices:De,SmnvPortfolio:hn,SmnvStages:_a,SmnvCosts:dt,SmnvContacts:It,SmnvFooter:Ft},data(){return{isEnglish:!0}},created(){this.setLanguage()},methods:{switchLanguage(){this.isEnglish=!this.isEnglish},setLanguage(){const s=navigator.language;this.isEnglish="ru-RU"!==s}}};const qt=(0,S.Z)(Ht,[["render",t]]);var Qt=qt;(0,n.ri)(Qt).mount("#app")},5668:function(s,e,i){s.exports=i.p+"img/portfolio-1.f2f56098.jpg"},1729:function(s,e,i){s.exports=i.p+"img/portfolio-2.e22c957c.jpg"},4566:function(s,e,i){s.exports=i.p+"img/portfolio-3.6563f9e2.jpg"},8017:function(s,e,i){s.exports=i.p+"img/portfolio-4.7285253c.jpg"},2662:function(s,e,i){s.exports=i.p+"img/portfolio-5.72d81539.jpg"},2589:function(s,e,i){s.exports=i.p+"img/portfolio-6.593d4b54.jpg"},6534:function(s,e,i){s.exports=i.p+"img/portfolio-7.ac15b88f.jpg"},223:function(s,e,i){s.exports=i.p+"img/portfolio-8.9c157f3c.jpg"},1026:function(s,e,i){s.exports=i.p+"img/portfolio-9.87fb0845.jpg"},6116:function(s,e,i){s.exports=i.p+"img/promo.023c1938.jpg"}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var t=e[n]={exports:{}};return s[n](t,t.exports,i),t.exports}i.m=s,function(){var s=[];i.O=function(e,n,a,t){if(!n){var o=1/0;for(g=0;g<s.length;g++){n=s[g][0],a=s[g][1],t=s[g][2];for(var l=!0,r=0;r<n.length;r++)(!1&t||o>=t)&&Object.keys(i.O).every((function(s){return i.O[s](n[r])}))?n.splice(r--,1):(l=!1,t<o&&(o=t));if(l){s.splice(g--,1);var c=a();void 0!==c&&(e=c)}}return e}t=t||0;for(var g=s.length;g>0&&s[g-1][2]>t;g--)s[g]=s[g-1];s[g]=[n,a,t]}}(),function(){i.n=function(s){var e=s&&s.__esModule?function(){return s["default"]}:function(){return s};return i.d(e,{a:e}),e}}(),function(){i.d=function(s,e){for(var n in e)i.o(e,n)&&!i.o(s,n)&&Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"===typeof window)return window}}()}(),function(){i.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)}}(),function(){i.p=""}(),function(){var s={143:0};i.O.j=function(e){return 0===s[e]};var e=function(e,n){var a,t,o=n[0],l=n[1],r=n[2],c=0;if(o.some((function(e){return 0!==s[e]}))){for(a in l)i.o(l,a)&&(i.m[a]=l[a]);if(r)var g=r(i)}for(e&&e(n);c<o.length;c++)t=o[c],i.o(s,t)&&s[t]&&s[t][0](),s[t]=0;return i.O(g)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(257)}));n=i.O(n)})();
//# sourceMappingURL=app.42e83384.js.map