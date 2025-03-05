import React from 'react' 
import '../App.css'

import BookCard from './BookCard'

export default function BookList(){
    let books = [
        {
            image:"https://cdn.kitap.kz/storage/book/8bcdeadfa8d8fe0399ff3ececfc55b3e.png",
            name:"📚 Бескорыстие",
            avtor:"✍️ Константин Георгиевич Паустовский",
            year:"📅 Шыққан жылы: 1907г",
        },
        {
            image:"https://cdn.kitap.kz/storage/book/5f34ccde3a797c7907a289be246e410e.png",
            name:"📚 Родина",
            avtor:"✍️ Михаил Лермонтов",
            year:"📅 Шыққан жылы: 1841г",
        },
        {
            image:"https://cdn.kitap.kz/storage/book/65ce0235a97857c6ab67fcf73d924bfb.png",
            name:"📚 Растянулся на просторе",
            avtor:"✍️ Алексей Константинович Толстой",
            year:"📅 Шыққан жылы: 1856г",
        }
    ];

    return(
        <div className='card2'>
            {books.map((books,index)=>{
                return<BookCard key={index} name={books.name} image={books.image} avtor={books.avtor} year={books.year}/>
            })}
        </div>
    )

}