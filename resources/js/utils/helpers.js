import Swal from "sweetalert2";

export const getError = (error) => {
  const errorMessage = "Oups! Nešto nije uredu, molim pokušajte ponovo.";

    if (!error.response) {
        console.log('API server error! Response does not exists');
        //console.error(error);
        return errorMessage;
    }
    if (process.env.NODE_ENV === "development") {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
    }
    if (error.response.data && error.response.data.errors) {
        console.log(error.response.data.errors);

        return error.response.data.errors;
    }

    if (error.response.data && error.response.data.message) {
        return error.response.data.message;
    }


    return errorMessage;
};

export const dispatchError = (error) => {
    Swal.fire(error.response.data.message, '','error');
    return error.response.data.errors;
};
