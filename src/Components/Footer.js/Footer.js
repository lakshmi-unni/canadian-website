import React from 'react';
const styles = {
    color: '#7C7C7C',
    textAlign: 'center',
    fontFamily: 'Barlow',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
};

function Footer() {
    return (
        <section className="footer-section" >
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h6 className="text-center mb-3 mt-3" style={styles}>Copyright © 2023 The Canadian Home Realty Inc.</h6>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer;