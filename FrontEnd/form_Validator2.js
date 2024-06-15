function formValidator() {
    // Get form inputs
    const firstname = document.getElementById('Firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const addr = document.getElementById('addr').value.trim();
    const mobile = document.getElementById('mobile number').value.trim();
    
    // Validation checks
    if (firstname === '') {
        alert('Please enter your First Name');
        document.getElementById('Firstname').focus();
        return false;
    }

    if (email === '') {
        alert('Please enter your Email Address');
        document.getElementById('email').focus();
        return false;
    } else {
        // Validate email format using regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid Email Address');
            document.getElementById('email').focus();
            return false;
        }
    }

    if (password === '') {
        alert('Please enter your Password');
        document.getElementById('password').focus();
        return false;
    }

    if (addr === '') {
        alert('Please enter your Address');
        document.getElementById('addr').focus();
        return false;
    }

    if (mobile === '') {
        alert('Please enter your Mobile Number');
        document.getElementById('mobile number').focus();
        return false;
    } else {
        // Validate mobile number format (e.g., 10 digits)
        const mobilePattern = /^\d{10}$/;
        if (!mobilePattern.test(mobile)) {
            alert('Please enter a valid Mobile Number (10 digits)');
            document.getElementById('mobile number').focus();
            return false;
        }
    }

    // If all validations pass, return true to submit the form
    return true;
}