import '../index.css'
import PropTypes from 'prop-types';

const SuccessMessage = ({ message }) => {
    if (message === '') {
        return <></>
    } else {
        return <div className="successMessage">{message}</div>
    }
}

SuccessMessage.propTypes = {
    message: PropTypes.string
}

export default SuccessMessage