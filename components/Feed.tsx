"use  client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }: any) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post: any) => (
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
  const [allpost, setAllPost] = useState<any[]>([]);

  const [searchText, setSearchText] = useState<string>('');
  const [searchTimeout, setSearchTimeout] = useState<any>(null);
  const [searchedResult, setSearchedResult] = useState<any>([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setAllPost(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchText: any) => {
    const regex = new RegExp(searchText, "i");
    return allpost.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResult(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName: any) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResult(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResult}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allpost} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
