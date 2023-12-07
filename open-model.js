const openModelButtons = document.querySelectorAll('[data-modal-target]');

const CloseModelButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModelButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModel(modal);
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        CloseModel(modal);
    })
})

CloseModelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const model = button.closest('.modal');
        CloseModel(model);
    })
})

function openModel(modal){
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function CloseModel(model){
    if (model == null) return
    model.classList.remove('active');
    overlay.classList.remove('active');
}