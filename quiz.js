function corrigirQuiz(formId){
  const form=document.getElementById(formId);
  const quiz=JSON.parse(form.dataset.quiz);
  let score=0;
  quiz.forEach((item,i)=>{const chosen=form.querySelector(`input[name="q${i}"]:checked`); if(chosen && Number(chosen.value)===item.answer) score++;});
  const pct=Math.round((score/quiz.length)*100);
  let msg='🌱 Continue estudando!';
  if(score>=9) msg='🏆 Excelente!';
  else if(score>=7) msg='🥈 Muito bem!';
  else if(score>=5) msg='🥉 Bom começo!';
  const box=form.parentElement.querySelector('.quiz-result');
  box.style.display='block';
  box.querySelector('.quiz-score').textContent=`${score}/${quiz.length}`;
  box.querySelector('.quiz-pct').textContent=`${pct}%`;
  box.querySelector('.quiz-msg').textContent=msg;
  box.querySelector('.quiz-bar > div').style.width=`${pct}%`;
}
function resetarQuiz(formId){
  const form=document.getElementById(formId); form.reset();
  const box=form.parentElement.querySelector('.quiz-result'); box.style.display='none';
  box.querySelector('.quiz-bar > div').style.width='0%';
}
