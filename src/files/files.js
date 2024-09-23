import React, { useState, useEffect } from 'react';
import './files.scss';
import '../index.scss';

const Files = ({ files, printFiles }) => {
    const [sortedFiles, setSortedFiles] = useState(files);

    useEffect(() => {
        setSortedFiles(files);
    }, [files]);

    const renderList = (arr) => {
        return arr.map((item, index) => {
            const iconSrc = item.type === "Folder" ? "./img/folder.svg" : "./img/file.svg";

            return (
                <div key={index} className="item__img">
                    <img src={iconSrc} alt={item.type} />
                    <div className="item__text">{item.name}</div>
                </div>
            );
        });
    };

    const dropDown = () => {
        const dropdownSortOptions = document.getElementById('dropdownSortOptions');
            if (dropdownSortOptions.style.display === 'none') {
            dropdownSortOptions.style.display = 'flex';
            } else {
            dropdownSortOptions.style.display = 'none';
        }
    }

    const sortByName = () => {
        const sortedArray = [...sortedFiles].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
        setSortedFiles(sortedArray);
        document.getElementById('dropdownBtnSort').innerText = 'Sorted by name';
    }

    const sortByType = () => {
        const sortedArray = [...sortedFiles].sort((a, b) => (a.type < b.type) ? -1 : 1);
        setSortedFiles(sortedArray);
        document.getElementById('dropdownBtnSort').innerText = 'Sorted by type';
    }

    const sortBySize = () => {
        const sortedArray = [...sortedFiles].sort((a, b) => (a.size - b.size) ? -1 : 1);
        setSortedFiles(sortedArray);
        document.getElementById('dropdownBtnSort').innerText = 'Sorted by size';
    }

    const sortByDate = () => {

        function compare(a, b) {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);
           
            return dateA - dateB;
        }

        const sortedArray = [...sortedFiles].sort(compare);  
        setSortedFiles(sortedArray);
        document.getElementById('dropdownBtnSort').innerText = 'Sorted by date';
    }

    return (
        <section className="files">
            <div className="container">
                <div className="files__wrapper">
                    <div className="files__wrapper-file">
                        All files
                    </div>
                    <div id="dropdown" className="dropdown">
                        <button id="dropdownBtnSort" onClick={dropDown}>
                            <span className="sortText">Sort by name</span> 
                            <img src="./icons/arrow.svg" alt=""/>
                        </button>
                        <div id="dropdownSortOptions" className="dropdownSortOptions" style={{display: 'none'}}>
                            <a href="/#" id="sortByName" className="sortOption" onClick={sortByName}>
                                <span className="sortText">Sort by name</span>
                            </a>
                            <a href="/#" id="sortByType" className="sortOption" onClick={sortByType}>
                                <span className="sortText">Sort by type</span>
                            </a>
                            <a href="/#" id="sortByDate" className="sortOption" onClick={sortByDate}>
                                <span className="sortText">Sort by date</span>
                            </a>
                            <a href="/#" id="sortBySize" className="sortOption" onClick={sortBySize}>
                                <span className="sortText">Sort by size</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="memory">
                    <div id="list" className="memory__wrapper">
                    {renderList(sortedFiles)}
                    </div> 
                </div>
                <input type="file" id="files" name="files[]" multiple onChange={printFiles} />
            </div>
        </section>
    );
}

export default Files;