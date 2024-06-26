import React from 'react';

export default function Product({pitems}) {
  return (
    <div className='col-md-3'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{pitems.title}</h5>
                <p className="card-text">{pitems.body}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}
