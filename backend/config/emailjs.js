import emailjs from "@emailjs/nodejs";

const emailjs = async () => {
  emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
    blockHeadless: true,
    limitRate: {
      id: "app",
      throttle: 10000,
    },
  });
};

export default emailjs;
