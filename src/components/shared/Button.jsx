import PropTypes from 'prop-types';

function Button({children, type, version, isDisabled}) {
    return (
        
        <button type={type} disabled={isDisabled} className={`btn ${version} ${isDisabled && 'disabled'}`}>
            {children}
        </button>
    )
}

Button.defaultProps ={
    type: 'submit' ,
    version: '' ,
    isDisabled: false ,

}

Button.propTypes = {

    type: PropTypes.string ,
    version: PropTypes.string ,
    isDisabled: PropTypes.bool ,

}

export default Button
