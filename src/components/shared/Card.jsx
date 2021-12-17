import PropTypes from 'prop-types'

function Card({children, Reversive}) {
    return (
        <div className={`card ${Reversive &&  'reversive' }`}>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired ,
}

Card.defaultProps = {
    Reversive : true ,
}

export default Card
