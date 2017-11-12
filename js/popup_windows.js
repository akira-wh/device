var write_us_open = document.querySelector(".btn-open-modal");
var write_us_close = document.querySelector(".write-us .btn-close-modal");
var write_us_section = document.querySelector(".write-us");
var customer_login = write_us_section.querySelector("[name=customer-name]");
var customer_email = write_us_section.querySelector("[name=customer-email]");
var customer_message = write_us_section.querySelector("[name=customer-message]");
var form_data_validator = write_us_section.querySelector(".write-us-form");
var map_general_open = document.querySelector(".map-open-modal");
var map_general_close = document.querySelector(".map-general .btn-close-modal");
var map_general_section = document.querySelector(".map-general");

		write_us_open.addEventListener("click", function(evt) {
			evt.preventDefault();
			write_us_section.classList.toggle("write-us-active");
			customer_login.focus();
		});

		write_us_close.addEventListener("click", function(evt) {
			evt.preventDefault();
			write_us_section.classList.toggle("write-us-active");
			write_us_section.classList.remove("write-us-error");
		});

		form_data_validator.addEventListener("submit", function(evt) {
			if (!customer_login.value || !customer_email.value || !customer_message.value) {
				evt.preventDefault();
				write_us_section.classList.add("write-us-error");
			}
		});

		window.addEventListener("keydown", function(evt) {
			if (evt.keyCode === 27) {
				if (write_us_section.classList.contains("write-us-active")) {
					write_us_section.classList.remove("write-us-active");
					write_us_section.classList.remove("write-us-error");
				}
			}
		});

		map_general_open.addEventListener("click", function(evt) {
			evt.preventDefault();
			map_general_section.classList.toggle("map-general-active");
		});

		map_general_close.addEventListener("click", function(evt) {
			evt.preventDefault();
			map_general_section.classList.toggle("map-general-active");
		});

		window.addEventListener("keydown", function(evt){
			if (evt.keyCode === 27) {
				if(map_general_section.classList.contains("map-general-active")) {
					map_general_section.classList.remove("map-general-active");
				}
			}
		});
