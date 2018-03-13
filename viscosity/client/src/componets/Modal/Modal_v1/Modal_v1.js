import React, { Component } from 'react';
import './Modal_v1.css';

class Modal_v1 extends Component {

modalOneContructor() {

 // Get modal element
let modal = document.getElementById('simpleModal');
// Get open modal button
let modalBtn = document.getElementById('modalBtn');
// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}


}


  render() {
    return (
      <div className="Modal_v1">
      
      <button id="modalBtn" className="button">Click Here</button>

        <div id="simpleModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="closeBtn">&times;</span>
                        <h2>Modal Header</h2>
                </div>
                <div className="modal-body">
                    <p>Hello...I am a modal</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus nisi, sunt consectetur ipsa velit repudiandae aperiam modi quisquam nihil nam asperiores doloremque mollitia dolor deleniti quibusdam nemo commodi ab.</p>
            </div>
            <div className="modal-footer">
                <h3>Modal Footer</h3>
            </div>
        </div>
    </div>
        </div>
    );
  }
}

export default Modal_v1;


