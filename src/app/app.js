import React, { useState } from 'react';
import Files from '../files/files';
import Header from '../header/header';
import { nanoid } from 'nanoid';
import data from '../db.json';
import './app.scss';

function App() {
    const [files, setFiles] = useState(data);
    const [count, setCount] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const addNewFolder = (name) => {
        const newFolder = {
            id: nanoid(),
            name: `${name} ${count}`,
            type: "Folder",
            size: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            date: Date.now(),
        };
        setFiles((prevFiles) => [...prevFiles, newFolder]);
        setCount(count + 1);
    };

    const printFiles = (e) => {
        const newFiles = e.target.files;
        const newFilesArray = Array.from(newFiles).map((file) => {
            let filename = file.name;
            let filetype = file.type;
            let filesize = file.size;
            let filedate = Date.now();
            return {
                id: nanoid(),
                name: filename.length <= 9 ? filename : filename.slice(0, 9) + "...",
                type: filetype,
                size: filesize,
                date: filedate,
            };
        });

        setFiles((prevFiles) => [...prevFiles, ...newFilesArray]);
    };

    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue);
    };

    const filteredFiles = files.filter(file => 
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <Header 
                onAddNewFolder={addNewFolder} 
                printFiles={printFiles} 
                handleSearch={handleSearch}
            />
            <Files 
                files={filteredFiles} 
                printFiles={printFiles}
            />
        </div>
    );
}

export default App;