

const cashfree = Cashfree({ mode: "production" });
const paymentMessage = document.getElementById("paymentMessage");
document.getElementById("checkout").addEventListener("click", function () {
	paymentMessage.innerText = "";
	paymentMessage.classList.remove("alert-danger");
	paymentMessage.classList.remove("alert-success");
	cashfree
		.checkout({
			paymentSessionId: document.getElementById("paymentSessionId").value,
			returnUrl: document.getElementById("returnUrl").value,
			redirectTarget: "_blank"
		})
		.then(function () {
			console.log("on going redirection");
		});
});
