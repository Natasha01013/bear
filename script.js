document.addEventListener("DOMContentLoaded", function() {
    const orderButtons = document.querySelectorAll(".orderButton");
    const orderSection = document.getElementById("order");
    const orderForm = document.getElementById("orderForm");
    orderButtons.forEach(button => {
        button.addEventListener("click", function() {
            orderSection.classList.remove("hidden");
            alert('Вы выбрали ${this.parentElement.firstChild.textContent.trim()}');
        });
    });
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        alert('Ваш заказ принят!\nИмя: ${name}\nТелефон: ${phone}');
        orderForm.reset();
        orderSection.classList.add("hidden");
    });
});