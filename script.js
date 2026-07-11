const intro = document.getElementById("intro");
const envelopeSection = document.getElementById("envelopeSection");
const letterSection = document.getElementById("letterSection");

document.getElementById("showEnvelope").onclick = () => {
    intro.classList.add("hidden");
    envelopeSection.classList.remove("hidden");
};

document.getElementById("envelope").onclick = () => {

    document.getElementById("envelope").classList.add("open");

    setTimeout(() => {

        envelopeSection.classList.add("hidden");
        letterSection.classList.remove("hidden");

    },1200);

};
const pages = [

`When I read your message...

I realised this wasn't about just saying "sorry."

It was about understanding how my behaviour made you feel.`,

`You were absolutely right.

You accepted my apology...

but you also made me realise that apologies lose their value if the same mistake keeps happening.

That line stayed with me.`,

`My intention was never to hurt you.

But intentions don't erase the impact of our words.

Looking back...

I know I spoke to you in a way you didn't deserve.

And for that...

I am genuinely sorry.`,

`One thing I genuinely admire about you...

is that instead of keeping things inside...

you told me directly,

"Don't repeat this behaviour again."

Honestly...

thank you for that.

Not everyone has the courage to communicate so honestly.`,

`You called me out when I was wrong.

And I respect you even more for that.

That honesty is one of the reasons you're such a wonderful person.`,

`You once said...

"Sorry doesn't work every time."

I've thought about those words a lot.

So today...

I'm not asking you to believe another apology.

I'm asking you to watch my actions from here onwards.`,

`I can't promise that I'll never make mistakes.

But I can promise that I'll learn from them.

I'll think before I speak.

I'll never let my frustration become your burden again.`,

`And lastly...

Never stop being the cheerful, adorable Cutie Pie that you are. 🌸

Your smile deserves respect.

Not rudeness.

Thank you for reading this little letter.

Take care...

❤️

— Yash`
];

let current = 0;

const text = document.getElementById("text");
const btn = document.getElementById("nextBtn");

window.onload = () => {
    text.innerHTML = pages[current];
};

btn.onclick = () => {

current++;

if(current < pages.length){

text.style.opacity = 0;

setTimeout(()=>{

text.innerHTML = pages[current];

text.style.opacity = 1;

},300);

}else{

btn.innerHTML="🌸 The End";

btn.disabled=true;

}

}