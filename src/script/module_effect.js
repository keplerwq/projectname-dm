import { $ ,ajax,tabswitch} from "./module_tool.js";
class Effect {
    constructor() {
        this.goodslist = document.querySelector('.one');
        this.listwrap=document.querySelector('.list-wrap');
        this.userbox=document.querySelector('.right-header .user-header');
        this.sidebar=document.querySelector('.sidebar');
        this.citywrap=document.querySelector('.location-header');
        this.cityhead=document.querySelector('.location-header .city-header-wrap');
        this.gotop=document.querySelector('.J_GoTop');

        this.oBox=document.querySelector('.tab-content');
        this.moveUl=document.querySelector('.tab-content .tab-pannel');
        this.picLi=document.querySelectorAll('.tab-content .tab-pannel a');
        this.oLeft=document.querySelector('.prev .arrow left');
        this.oRight=document.querySelector('.next .arrow');
        this.liwidth=this.picLi[0].offsetWidth;
        this.index=0;
        this.flag=true;
    }
    init() {
        let _this = this;
        ajax({
            url: 'http://127.0.0.1/projectname-dm/php/dmdata.php',
            dataType: 'json'
        }).then(function(data) {
            
            //遍历render
            let strhtml = '';
            for (let value of data) {
                strhtml += `
                <a href="detail 1.html?sid=${value.sid}" class="box-right__item one"  target="_blank">
                <div class="itemimg">
                <img src="${value.url}">
                </div>
                <div class="iteminfo">
                <div class="title">${value.title}</div>
                <div class="venue">广州海心沙亚运公园亚运看台</div>
                <div class="showtime">2019.12.31 周二 20:30</div>
                <div class="showtime"></div>
                <div class="price">¥${value.price}<span>起</span></div>
                </div>
                </a>
                `;
            }
            
            _this.goodslist.innerHTML = strhtml;

        });
     
 
        this.move()
        this.banner()
        //sTop为滚动条的距离
        window.onscroll=function(){
            let sTop=document.documentElement.scrollTop;
            _this.showgotop(sTop)
            _this.backtop(sTop)
        }
       
       
    }
  
    move(){
        let _this=this;
        this.userbox.onmouseover=function(){
            _this.listwrap.style.display='block';
            }
    
        this.userbox.onmouseout=function(){
        _this.listwrap.style.display='none';
        }

        this.citywrap.onmouseover=function(){
            _this.cityhead.style.display='block';
        }
    
       this.citywrap.onmouseout=function(){
        _this.cityhead.style.display='none';

       }

    
       }
    showgotop(sTop){
            if(sTop>200){
                this.gotop.style.display="block";
            }else{
                this.gotop.style.display="none";
            }
    }
    backtop(sTop){
        this.gotop.onclick=function(){
            sTop=document.body.scrollTop=document.documentElement.scrollTop=0;
        }
    }
    banner(){
        console.log(this.oLeft);
        let _this=this;
        this.oLeft.onclick=function(){
            index--;
            _this.tabswitch();
        }
        this.oRight.onclick=function(){
            index++;
            _this.tabswitch();
        }

    }
    
}
export{ Effect }



    

   

    
