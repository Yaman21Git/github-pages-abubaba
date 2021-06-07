import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './ClientsItem.css'
import {Button} from '../components/button'

function ClientsItem(props) {
    return (
      <>
        <div className='client_item'>
          <img src={props.src} alt="clients" className="imgfig"/>
          <h2 className="name">{props.name}</h2>
          <h2 className="name">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
          </h2>
          <p className="des">{props.description}</p>
        </div>
      </>
    );
  }
  
export default ClientsItem;