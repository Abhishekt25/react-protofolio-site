const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white text-black p-10 rounded-2xl text-center shadow-lg max-w-2xl mx-auto mt-16"
    >
      <h3 className="text-3xl font-semibold mb-4 text-gray-800">
        Contact Us
      </h3>
      <p className="text-lg mb-6 text-gray-600">
        Have a project or need IT support? Reach out to our team today.
      </p>
      <div className="text-left inline-block space-y-3 text-gray-700">
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:info@allitgoods.com"
            className="text-indigo-600 hover:underline"
          >
            info@allitgoods.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:+919116150330" className="text-indigo-600 hover:underline">
            +91 9116150330
          </a>
        </p>
        <p>
          <strong>Address:</strong> Plot No. C-95 Arg Puram, Nayala Road Kanato, Jaipur, RJ 302012
        </p>
      </div>
    </section>
  );
};

export default Contact;
