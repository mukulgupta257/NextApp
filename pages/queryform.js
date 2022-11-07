import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styles from "../styles/aboutus.module.css";

const InitalFields = {
  Name: "",
  Email: "",
  Phone: "",
  Query: "",
};

const ContactUsPage = () => {
  const [formFields, setFormFields] = useState(InitalFields);

  const handleBlur = (e) => {
    console.info(e.target.name);
    var FormFieldsUpdate = {
      Name: e.target.name === "Name" ? e.target.value : formFields.Name,
      Email: e.target.name === "Email" ? e.target.value : formFields.Email,
      Phone: e.target.name === "Phone" ? e.target.value : formFields.Phone,
      Query: e.target.name === "Query" ? e.target.value : formFields.Query,
    };
    FormFieldsUpdate.Phone = parseInt(FormFieldsUpdate.Phone);
    setFormFields(FormFieldsUpdate);
    console.info("Local", FormFieldsUpdate);
  };
  return (
    <>
      <Header />
      <div className={styles.AboutUsRoot}>
        <span className={styles.AboutUsTitle}>Raise A Query</span>
        <span className={styles.AboutUsSubTitle}>
          We will revert to you as soon as possible
        </span>
        <form name="ContactForm" id="QueryForm">
          <label>Name</label>
          <input
            name="Name"
            type="text"
            className="queryInput"
            onBlur={handleBlur}
            required
          />
          <label>Email</label>
          <input
            name="Email"
            type="Email"
            className="queryInput"
            onBlur={handleBlur}
            required
          />
          <label>Contact Number</label>
          <input
            name="Phone"
            type="tel"
            className="queryInput"
            onBlur={handleBlur}
            maxLength={10}
            minLength={10}
            required
          />
          <label>Query</label>
          <textarea
            name="Query"
            className="queryTextArea"
            onBlur={handleBlur}
            required
          />
          <input type={"submit"} value="Submit" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
