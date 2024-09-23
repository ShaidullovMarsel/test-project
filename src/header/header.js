import React from "react";
import './header.scss';
import '../index.scss';


const Header = ({ onAddNewFolder, handleSearch }) => {

    const newFold = () => {
        const folderName = "New folder";
        onAddNewFolder(folderName);
    };


    const search = () => {
        const search = document.getElementById('input-input');
        if (search.style.visibility === 'visible') {
            search.style.visibility = 'hidden';
        } else {
            search.style.visibility = 'visible';
        }

    }

    return (
        <section className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__wrapper-logo">
                        <img src="./img/LOGO.svg" alt="" />
                    </div>
                    
                    <div className="header__wrapper-upload" onClick={() => document.getElementById("files").click()}>
                        <button id="upload" className="button__upload">
                            <div className="upload-img"><img src="./icons/upload.svg" alt="" /></div>Upload
                        </button>
                    </div>
                    <div id="folder" className="header__wrapper-folder" onClick={newFold}>
                        <button className="button__folder">
                            <div className="folder-img"><img src="./icons/plus.svg" alt="" /></div>New folder
                        </button>
                    </div>
                    <div className="header__wrapper-resycle">
                        <button className="button__resycle">
                            <div className="resycle-img"><img src="./icons/delete.svg" alt="" /></div>Resycle bin
                        </button>
                    </div>
                    <div className="header__wrapper-input">
                        <input id="input-input" 
                        className="input-input" 
                        placeholder="Enter name here" 
                        type="text"
                        onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                    <div className="header__wrapper-search" onClick={search}>
                        <button id="button__search" className="button__search"><img src="./icons/search.svg" alt="" /></button>
                    </div>
                    <div className="header__wrapper-wrapper">
                        <button className="button__wrapper">Used: <span className="number">0.4 Gb</span>  <span className="symbol">|</span> Balance: <span className="number">0.6 Tb</span>
                            <div className="wrapper-img"><img src="./icons/plus_yellow.svg" alt="" /></div>
                        </button>
                    </div>
                    <div className="header__wrapper-profile">
                        <img src="./img/profile.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;