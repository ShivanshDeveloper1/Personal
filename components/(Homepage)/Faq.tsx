"use client"
import React, { useState } from 'react'
import { accordianData } from '@/data/Faq/faq'
import { MoveDown } from 'lucide-react'

const Faq = () => {
    const [openIndexes, setOpenIndexes] = useState([])

    const handleOpen = (index) => {
        setOpenIndexes((prev) => {
            if (prev.includes(index)) {
                return prev.filter((i) => i !== index);
            }
            return [...prev, index];
        });
    };

    // SEO BONUS: Automatically generates JSON-LD Schema markup for Google
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": accordianData.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <main className='flex flex-col md:flex-row gap-12 max-w-6xl mx-auto px-6 md:px-12 py-12 text-gray-900 dark:text-gray-100 transition-colors duration-200'>
            
            {/* Injecting the FAQ Schema dynamically into the page head for Google Crawler */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />

            {/* Sidebar Section */}
            <div className='md:w-1/3 md:sticky md:top-20 self-start'>
                <h2 className='tracking-wide text-yellow-800 dark:text-yellow-500 font-bold uppercase text-sm'>FAQ</h2>
                <h1 className='font-bold text-2xl lg:text-3xl max-w-xl mt-1'>AI-Enabled Web Development</h1>
                <hr className='mt-4 border-gray-200 dark:border-gray-800' />
                <p className='font-medium mt-3 text-gray-600 dark:text-gray-400 leading-relaxed'>
                    We build modern websites with high-end AI performance like voice agents, customer support, video generation, and more complicated features that help users.
                </p>
            </div>

            {/* Accordion Section (Semantic & Screen Reader Friendly) */}
            <div className='md:w-2/3 divide-y divide-gray-200 dark:divide-gray-800'>
                {
                    accordianData.map((item, index) => {
                        const isOpen = openIndexes.includes(index);
                        
                        return (
                            <article key={index} className='py-2 transition-all duration-200'>
                                <button 
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                    className='w-full flex items-center justify-between cursor-pointer py-4 group select-none text-left focus:outline-none' 
                                    onClick={() => handleOpen(index)}
                                >
                                    <h3 className='text-lg font-semibold leading-7 group-hover:text-yellow-800 dark:group-hover:text-yellow-500 transition-colors duration-200'>
                                        {item.question}
                                    </h3>
                                    <MoveDown 
                                        size={20} 
                                        strokeWidth={2.5} 
                                        className={`${isOpen ? 'rotate-180 text-yellow-800 dark:text-yellow-500' : 'text-gray-400 dark:text-gray-500'} transition-transform duration-300 ease-in-out`} 
                                    />
                                </button>

                                {/* Accessible Content Panel */}
                                {isOpen && (
                                    <div 
                                        id={`faq-answer-${index}`}
                                        role="region"
                                        aria-labelledby={`faq-question-${index}`}
                                        className='pb-4 animate-fadeIn'
                                    >
                                        <p className='text-gray-600 dark:text-gray-400 leading-relaxed text-[16px]'>
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </article>
                        );
                    })
                }
            </div>
        </main>
    )
}

export default Faq