import React from 'react'
import { connect } from 'react-redux'
import Constants from '../constants'
import Section from '../components/section'

const Matrix = (props) => {
    const { showPanelClass } = props
    const { MATRIX } = Constants
    
    return (
        <div id="matrix-wrapper" className={showPanelClass}>
            {
                Object.keys(MATRIX).map((section, index) => (
                    <Section key={index} title={section} />
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    showPanelClass: state.showPanelClass
})

export default connect(
    mapStateToProps
)(Matrix)