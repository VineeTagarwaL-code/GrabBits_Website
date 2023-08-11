import React, { useEffect } from 'react'
import styles from './Resources.module.css'
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import axios from 'axios';

function Resources() {

  const [items, setItems] = useState([]);
  const [bookData, setBookData] = useState(null);

  const fetchData = async (currentPage) => {
    const res = await fetch(`http://localhost:4000/content?_page=${currentPage}&_limit=9`);
    const data = await res.json();
    return data;
  };

  const fetchBookData = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: 'DSA',
          key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
          maxResults: 1,
        },
      });

      if (response.status === 200) {
        const book = response.data.items[0];
        setBookData(book);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  fetchBookData()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:4000/content');
      const data = await response.json();

      const modifiedData = data.map(item => ({
        ...item,
        body: item.body.split(' ').slice(0, 12).join(' ')
      }));

      setItems(modifiedData);
    };

    getData();
  }, []);

  const sorting = async (value) => {
    try {
      const url = value !== 'all' ? `http://localhost:4000/content?contentType=${value}&_limit=9` : 'http://localhost:4000/content';
      const response = await fetch(url);
      const data = await response.json();

      const modifiedData = data.map(item => ({
        ...item
      }));

      setItems(modifiedData);
    } catch (error) {
      console.error('Error fetching sorted data:', error);
    }
  };

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    const dataFromServer = await fetchData(currentPage);

    const modifiedData = dataFromServer.map(item => ({
      ...item,
      body: item.body.split(' ').slice(0, 12).join(' ')
    }));

    setItems(modifiedData);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.header}>
          <div className={styles.triangle}>
            <div className={styles.header_resources}>
              <div className={styles.h1}>
                <h1 className={styles._h1}>RESOURCES</h1>
              </div>
              <div className={styles.selector}></div>
              <div className={styles.content_start}>
                <div className={styles.content_type}>
                  <p>Content Type</p>
                  <div className={styles.sort_section}>
                    <form action="#">
                      <label htmlFor="sort">
                        <select name="sort" id="sort" className={styles.sorting_selector} onChange={(e) => sorting(e.target.value)}>
                          <option value="all">All</option>
                          <option value="Courses">Courses</option>
                          <option value="Lectures">Lectures</option>
                          <option value="Guides">Guides</option>
                          <option value="Blogs">Blogs</option>
                        </select>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <div className={styles.content_display}>
            <div className={styles.content_gird}>
              {items.map((item) => {
                return <div className={styles.content_display_data} key={item.id}>
                  <img src={item.image} alt="" />
                  <h1>{item.contentType}</h1>
                  <p>{item.body}...</p>
                  <a href="">{item.details}</a>
                </div>
              })}
            </div>
          </div>
        </section>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={5}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />

      </div>
    </>
  )
}

export default Resources