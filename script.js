const form = document.getElementById("registerForm");
const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsInput = document.getElementById("agreeTerms");
const messageEl = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const agreed = termsInput.checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (!fullName) {
        messageEl.textContent = "Vui lòng nhập tên!";
        return;
    }

    if (!emailRegex.test(email)) {
        messageEl.textContent = "Email không hợp lệ!";
        return;
    }

    if (!hasLength || !hasUpper || !hasLower || !hasNumber) {
        messageEl.textContent = "Mật khẩu phải ít nhất 8 ký tự, có chữ hoa, chữ thường và số!";
        return;
    }

    if (!agreed) {
        messageEl.textContent = "Bạn cần đồng ý điều khoản!";
        return;
    }

    const userData = {
        fullName: fullName,
        email: email,
        agreed: agreed
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    messageEl.textContent = "Đăng ký thành công và đã lưu vào LocalStorage!";
    form.reset();
});
