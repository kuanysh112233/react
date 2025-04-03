import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

export default function Search({ onSearch }) {
    const [filmInput, setFilmInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&s=${filmInput}`);
            if (response.data.Response === "True") {
                onSearch(response.data.Search);
            } else {
                onSearch([]);
            }
            setIsLoading(false);
            setFilmInput('');
        } catch (err) {
            console.error(err);
            setIsLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="ИСКАТЬ ФИЛЬМ..."
                    value={filmInput}
                    onChange={(e) => setFilmInput(e.target.value)}
                    className="search-input"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="search-button"
                >
                    {isLoading ? "ИЩЕМ..." : "ИСКАТЬ"}
                </button>
            </form>
        </div>
    );
}