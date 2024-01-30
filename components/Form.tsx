import React from 'react';
import Link from 'next/link';

type Props = {
    type: string;
    post: { prompt: string; tag: string }; // Corrected type for post state
    setPost: React.Dispatch<React.SetStateAction<{ prompt: string; tag: string }>>; // Corrected type for setPost function
    submitting: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // Corrected type for handleSubmit function
};

const Form = ({ type, post, setPost, submitting, handleSubmit }: Props) => {
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>
                    {type} Post
                </span>
            </h1>
            <p className='desc text-left max-w-md'>
                {type} and Share amazing prompts with the world, and let your imagination run wild with any AI-powered platform of your choice.
            </p>
            <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
                <label>
                    <span className='font-semibold font-satoshi text-base text-gray-700'>YOUR AI-Prompt</span>
                    <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} placeholder='Write your prompt here' className='form_textarea'></textarea>
                </label>
                <label>
                    Tag{' '}
                    <span className='font-semibold font-satoshi text-base text-gray-700'>(#product, #webdevelopment, #idea)</span>
                    <input value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value })} placeholder='#Tag' required className='form_input'></input>
                </label>
                <div className='flex-end mx-3 mb-5 gap-4 '>
                    <Link href='/' className='text-gray-500 text-sm'>
                        Cancel
                    </Link>
                    <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;
