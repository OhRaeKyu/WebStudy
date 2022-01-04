const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const listSlide = document.querySelectorAll(".list-slide");

// "click" 이벤트 발생 시 슬라이드 리스트의 클래스 리스트를 순회하여 "on" 클래스를 갖고 있을 경우 함수 실행
nextBtn.addEventListener("click", function() {
    for(let i = 0; i < listSlide.length; i++) {
        const currentSlide = Object.values(listSlide[i].classList).find(ele => ele === "on");
        if(currentSlide){
            if(i === listSlide.length - 1) {
                listSlide[i].classList.remove("on");
                listSlide[0].classList.add("on");
            }else {
                listSlide[i].classList.remove("on");
                listSlide[i+1].classList.add("on");
            }
            break;
        }
    }
});

prevBtn.addEventListener("click", function() {
    for(let i = 0; i < listSlide.length; i++) {
        const currentSlide = Object.values(listSlide[i].classList).find(ele => ele === "on");
        if(currentSlide){
            if(i === 0) {
                listSlide[0].classList.remove("on");
                listSlide[listSlide.length - 1].classList.add("on");
            } else {
                listSlide[i].classList.remove("on");
                listSlide[i-1].classList.add("on");
            }
            break;
        }
    }
});