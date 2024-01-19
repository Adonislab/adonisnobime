import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:nobimetanguy19@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:nobimetanguy19@gmail.com">nobimetanguy19@gmail.com</a>
        </div>
        <div>
        <a href="tel:++22951518759"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+22951518759">(+229) 51518759</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}

//Token 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