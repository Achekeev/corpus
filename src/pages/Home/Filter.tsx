import React from 'react';

const Filter = () => {
    return (
        <section className="filter">
            <div className="dropdown">
                <button className="dropbtn">
                    по новизне
                </button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                </div>
            </div>
        </section>
    );
};

export default Filter;