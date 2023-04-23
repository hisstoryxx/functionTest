import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  class CardFlipOnScroll{
    constructor(wrapper, sticky){
      this.wrapper = wrapper
      this.sticky = sticky
      this.card = sticky.querySelectorAll('card')
      this.length = this.cards.length

      this.start = 0
      this.end = 0
      this.step = 0
    }
    init(){
      this.start = this.wrapper.offsetTop
      this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight
      this.step = (this.end - this.start) / (this.length * 2)
    }
    animtate(){
      this.card.forEach((card, i) =>{
        const s = this.start + this.step * i
        const e = s + this.step * (this.length + 1)
      } )

      if(scrollY <= s){
        this.card.style.tansform = `
        perspective(100vw)
        translateX(100vw)
        rotate(180deg)
        `
      }else if(scrollY > s && scrollY <= e - this.step){
        card.style.transform = `
        perspective(100vw)
        translateX(${100 - (scrollY - s) / (e - s) * 100}vw)
        rotateY(180deg)
        `
      } else if (scrollY > e - this.step && scrollY <= e){
        card.style.transform = `
        perspective(100vw)
        translateX(${100 - (scrollY - s) / (e - s) * 100}vw)
        rotateY(${180 - -(scrollY - (e - this.step)) / this.step * 180}deg)
        `
      } else if (scrollY > e){
        card.style.transform = `
        perspective(100vw)
        translateX(0vw)
        rotateY(0deg)
        `
      }
    }
  }

  const mainContent1 = document.getElementsByClassName('maincontent1')
  const sticky = document.getElementsByClassName('sticky')
  console.log(mainContent1, sticky)
  const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
  // cardFlipOnScroll.init()

  // window.addEventListener('scroll', () => {
  //   cardFlipOnScroll.animtate()
  // })
  // window.addEventListener('resize', () => {
  //   cardFlipOnScroll.init()
  // })
  return (
   <div className = "maincontent1">
     <div className = "sticky">
       <div className = "card-frame">
         <div className = "card">
           <div className = "front">CHICKEN</div>
           <div className = "back"> </div>
         </div>
         <div className = "card">
           <div className = "front">PINEAPPLE<br/>PIZZA</div>
           <div className = "back"> </div>
         </div>
         <div className = "card">
           <div className = "front">FISH<br/>&<br/>CHIPS</div>
           <div className = "back"> </div>
         </div>
         <div className = "card">
           <div className = "front">NOODLES</div>
           <div className = "back"> </div>
         </div>


       </div>
     </div>

   </div>
  )
}
