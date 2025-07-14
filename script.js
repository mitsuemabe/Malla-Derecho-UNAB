document.addEventListener('DOMContentLoaded', () => {
  const subjects = document.querySelectorAll('.subject');
  let total = subjects.length;

  // Cargar estado guardado
  subjects.forEach(subject => {
    let id = subject.dataset.id;
    if (localStorage.getItem(`subject-${id}`) === 'completed') {
      subject.classList.add('completed');
    }

    subject.addEventListener('click', () => {
      subject.classList.toggle('completed');
      if (subject.classList.contains('completed')) {
        localStorage.setItem(`subject-${id}`, 'completed');
      } else {
        localStorage.removeItem(`subject-${id}`);
      }
      updateProgress();
    });
  });

  function updateProgress() {
    let completed = document.querySelectorAll('.subject.completed').length;
    let percentage = Math.round((completed / total) * 100);
    document.getElementById('counter').textContent = `${completed} / ${total} ramos aprobados`;
    document.getElementById('percentage').textContent = `Avance: ${percentage}%`;
  }

  updateProgress();
});
