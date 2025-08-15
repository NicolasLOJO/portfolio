import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Nouveau message depuis votre portfolio !</h1>
    <p>
      <strong>Nom :</strong> {name}
    </p>
    <p>
      <strong>Email :</strong> {email}
    </p>
    <hr />
    <h3>Message :</h3>
    <p>{message}</p>
  </div>
);
