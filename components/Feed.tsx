"use client"
import React, { useState, useEffect } from 'react';
import PromptCard from './PromptCard';


const PromptCardList = ({ data, handleTagClick }:any) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post:any) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};




const Feed = () => {
  const [allpost, setallpost] = useState<any[]>([]);//to set all post

  //search states
  const [SearchText,SetSearchText]=useState<string>("");
  const [SearchTimeout,SetSearchTimeOut]=useState<any>(null);
  const [SearchedResult,SetSearchedResult]=useState<any>([])
    


  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setallpost(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext:any) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allpost.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(SearchTimeout);
    SetSearchText(e.target.value);

    // debounce method
    SetSearchTimeOut(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        SetSearchedResult(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName:any) => {
    SetSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    SetSearchedResult(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={SearchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* All Prompts */}
      {SearchText ? (
        <PromptCardList
          data={SearchedResult}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allpost} handleTagClick={handleTagClick} />
      )}
    </section>
  );

  
};

export default Feed;
