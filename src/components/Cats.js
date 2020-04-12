import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCat from '../actions/getCat';
const Cats = ({ getCat }) => {

    
   
  return (
    <section className="hero-section pt-5 pb-5">
        <div className="container">
        <h3 className="text-center mb-5 ">Browse All Cats</h3>
            <div className="row justify-content-center">
            
                <div className="col-md-3" >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bangali Cats</h5>
                                <Link className="muted" to="/cat-details">details....</Link>
                            </div>
                    </div>
                </div>

                <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bangali Cats</h5>
                                <Link className="muted" to="/cat-details">details....</Link>
                            </div>
                    </div>
                </div>

                <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bangali Cats</h5>
                                <Link className="muted" to="/cat-details">details....</Link>
                            </div>
                    </div>
                </div>
                

            </div>
            <div className="row justify-content-center mt-3">
            
            <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bangali Cats</h5>
                                <Link className="muted" to="/cat-details">details....</Link>
                            </div>
                    </div>
                </div>

                <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bangali Cats</h5>
                                <Link className="muted" to="/cat-details">details....</Link>
                            </div>
                    </div>
                </div>

                <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bangali Cats</h5>
                                <Link className="muted" to="/cat-details">details....</Link>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  );
};


getCat.propTypes = {
    getCat: PropTypes.func.isRequired,
   
  }



const mapStateToProps = state => ({
    getCat: state.getCat,
});



export default connect( mapStateToProps,{ getCat } )(Cats);
