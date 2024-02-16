import React from 'react'

function ProtectedRoute(props) {
    const {Component} = props;
    let checkLogin = localStorage.getItem('user');
   
    if(!checkLogin){
 return   window.location.href = '/'
    }
  return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoute