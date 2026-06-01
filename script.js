
function submitQuiz(formId){
 const form=document.getElementById(formId);
 const quiz=JSON.parse(form.dataset.quiz);
 let score=0;
 quiz.forEach((item,i)=>{const chosen=form.querySelector(`input[name="q${i}"]:checked`); if(chosen && Number(chosen.value)===item.answer) score++;});
 const pct=Math.round((score/quiz.length)*100);
 let medal="🌱 Continue estudando!";
 if(score>=9) medal="🏆 Mestre da aula!";
 else if(score>=7) medal="🥈 Muito bem!";
 else if(score>=5) medal="🥉 Bom começo!";
 const result=form.parentElement.querySelector('.result');
 result.style.display='block';
 result.querySelector('.score').textContent=`${score}/${quiz.length}`;
 result.querySelector('.medal').textContent=medal;
 result.querySelector('.pct').textContent=`${pct}%`;
 result.querySelector('.progress > div').style.width=`${pct}%`;
}
function resetQuiz(formId){
 const form=document.getElementById(formId);
 form.reset();
 const result=form.parentElement.querySelector('.result');
 result.style.display='none';
 result.querySelector('.progress > div').style.width='0%';
}
