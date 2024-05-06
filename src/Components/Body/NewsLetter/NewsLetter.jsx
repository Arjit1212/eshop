import React from 'react';
import '../NewsLetter/NewsLetter.css';

const NewsLetter = () => {
  return (
    <>
        <div className="container-fluid subscribe">
            <div className="row">
                <div className="col-12 ">
                    <span>GET THE LATEST UPDATES</span>
                    <input type="text" name="" placeholder='Enter your email' id="" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default NewsLetter
