import React from "react";

function Alert(props) {
  const Captalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); // this will captilize the first character and add the remaingin string from char 1 in it
  };

  return (
    <div style={{ height: "65px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.alertType}`} role="alert">
          <strong>
            {Captalize(
              props.alert.alertType === "danger"
                ? "Error: "
                : `${props.alert.alertType}: `
            )}
          </strong>
          {props.alert.alertText}
        </div>
      )}
    </div>
  );
}
export default Alert;
