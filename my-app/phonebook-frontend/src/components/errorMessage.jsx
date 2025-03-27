import '../index.css'
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
    if (message === '') {
        return <></>
    } else {
        return <div className="errorMessage">{message}</div>
    }
}

ErrorMessage.propTypes = {
    message: PropTypes.string
}

export default ErrorMessage