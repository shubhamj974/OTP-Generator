const cl = console.log;

const otpGenerator = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
};

document.getElementById("otpBtn").addEventListener("click", () => {
  const otp = otpGenerator();
  document.getElementById("displayOtp").innerHTML = `OTP : ${otp}`;
});
