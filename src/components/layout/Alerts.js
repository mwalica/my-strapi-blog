import React, { useContext } from "react";
import styled from "styled-components";
import AlertContext from "../../context/alert/alertContext";

const Alert = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 2em auto;
  .danger {
    padding: 1em;
    background-color: ${({ theme }) => theme.danger};
    color: rgba(255, 255, 255, 0.9);
    border-radius: 0.25em;
  }
`;

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert key={alert.id}>
        <div className={alert.type}>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
      </Alert>
    ))
  );
};

export default Alerts;
