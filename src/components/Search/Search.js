import React from 'react'
import styles from './search.module.scss'

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className='mb-5 flex-sm-row flex-column align-items-center gap-4  d-flex justify-content-center'>
      <input
       onChange={e=>{
        setPageNumber(1);
        setSearch(e.target.value);
      }}
      placeholder='Search for characters' type='text' className={styles.input}/>
      <button 
        onClick={e=>{e.preventDefault();
        }} 
        className={`${styles.btn} btn btn-primary fs-5`}>
          Search
        </button>
    </form>
  );
};

export default Search;
