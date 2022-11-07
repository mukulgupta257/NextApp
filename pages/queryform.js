import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styles from "../styles/query.module.css";

const InitalFields = {
  Name: "",
  Email: "",
  Phone: "",
  Query: "",
};

const ContactUsPage = () => {
  const [formFields, setFormFields] = useState(InitalFields);
  const [LeadStatus, setLeadStatus] = useState("");
  const handleBlur = (e) => {
    console.info(e.target.name);
    var FormFieldsUpdate = {
      Name: e.target.name === "Name" ? e.target.value : formFields.Name,
      Email: e.target.name === "Email" ? e.target.value : formFields.Email,
      Phone: e.target.name === "Phone" ? e.target.value : formFields.Phone,
      Query: e.target.name === "Query" ? e.target.value : formFields.Query,
    };
    setFormFields(FormFieldsUpdate);
    console.info("Local", FormFieldsUpdate);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = "Thankyou we will get back to you shortly";
    console.info("State", formFields);
    setLeadStatus(res);
  };
  return (
    <>
      <Header />
      <div className={styles.QueryFormRoot}>
        <span className={styles.QueryFormTitle}>Raise A Query</span>
        <span className={styles.QueryFormSubTitle}>
          {"( We will revert to you as soon as possible )"}
        </span>
        <form name="ContactForm" id={styles.QueryForm} onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="Name"
            type="text"
            className={styles.queryInput}
            onBlur={handleBlur}
            required
          />
          <label>Email</label>
          <input
            name="Email"
            type="Email"
            className={styles.queryInput}
            onBlur={handleBlur}
            required
          />
          <label>Contact Number</label>
          <input
            name="Phone"
            type="tel"
            className={styles.queryInput}
            onBlur={handleBlur}
            maxLength={10}
            minLength={10}
            required
          />
          <label>Query</label>
          <textarea
            name="Query"
            className={styles.queryTextArea}
            onBlur={handleBlur}
            required
          />
          <input type={"submit"} value="Submit" className={styles.Submit} />
        </form>
        <span
          className={
            LeadStatus.includes("Thankyou") ? styles.sucess : styles.error
          }
        >
          {LeadStatus}
        </span>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
