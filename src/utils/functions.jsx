import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

    
// Adding line breaks to paragraphs
export const renderDescription = (text) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
        {line}<br />
        </React.Fragment>
    ));
};

// SweetAlert
export const showAlert = (message, icon) => {
  const mySwal = withReactContent(Swal)
  mySwal.fire({
    text: message,
    icon: icon
  })
}

   