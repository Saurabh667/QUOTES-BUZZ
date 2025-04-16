import { useState, useEffect } from 'react';
import './author.css';



const authord = [
    {
      author: "Franklin D. Roosevelt",
      about: "Franklin Delano Roosevelt (1882–1945), often referred to by his initials FDR, was the 32nd President of the United States. He served four terms from 1933 until his death in 1945, making him the only U.S. president to serve more than two terms. He led the country through the Great Depression and World War II, implementing the New Deal to recover the American economy and establishing Social Security."
    },
    {
        "author": "William Shakespeare",
        "about": "An English playwright and poet, widely regarded as the greatest writer in the English language. Known for works like 'Hamlet', 'Romeo and Juliet', and 'Macbeth'."
      },
      {
        "author": "Jane Austen",
        "about": "An English novelist known for her six major novels, including 'Pride and Prejudice' and 'Sense and Sensibility', which interpret, critique, and comment upon the British landed gentry at the end of the 18th century."
      },
      {
        "author": "Mark Twain",
        "about": "An American writer, humorist, entrepreneur, publisher, and lecturer. He is known for his novels 'The Adventures of Tom Sawyer' and its sequel, 'Adventures of Huckleberry Finn'."
      },
      {
        "author": "Charles Dickens",
        "about": "An English writer and social critic. He created some of the world's best-known fictional characters and is regarded as the greatest novelist of the Victorian era."
      },
      {
        "author": "Leo Tolstoy",
        "about": "A Russian writer who is regarded as one of the greatest authors of all time. He is best known for the novels 'War and Peace' and 'Anna Karenina'."
      },
      {
        "author": "George Orwell",
        "about": "An English novelist, essayist, journalist, and critic. His work is characterized by lucid prose, awareness of social injustice, and opposition to totalitarianism. Notable works include '1984' and 'Animal Farm'."
      },
      {
        "author": "Ernest Hemingway",
        "about": "An American novelist, short-story writer, and journalist. His economical and understated style had a strong influence on 20th-century fiction. Notable works include 'The Old Man and the Sea' and 'A Farewell to Arms'."
      },
      {
        "author": "F. Scott Fitzgerald",
        "about": "An American novelist and short story writer, widely regarded as one of the greatest American writers of the 20th century. Best known for 'The Great Gatsby'."
      },
      {
        "author": "Virginia Woolf",
        "about": "An English writer, considered one of the most important modernist 20th-century authors and a pioneer in the use of stream of consciousness as a narrative device."
      },
      {
        "author": "J.K. Rowling",
        "about": "A British author, best known for writing the 'Harry Potter' fantasy series, which has won multiple awards and sold more than 500 million copies worldwide."
      },
      {
        "author": "Homer",
        "about": "An ancient Greek poet traditionally said to be the author of the epic poems 'The Iliad' and 'The Odyssey'."
      },
      {
        "author": "J.R.R. Tolkien",
        "about": "An English writer, poet, philologist, and academic, best known for 'The Hobbit' and 'The Lord of the Rings' trilogy."
      },
      {
        "author": "Agatha Christie",
        "about": "An English writer known for her sixty-six detective novels and fourteen short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple."
      },
      {
        "author": "Oscar Wilde",
        "about": "An Irish poet and playwright. After writing in different forms throughout the 1880s, he became one of London's most popular playwrights in the early 1890s."
      },
      {
        "author": "Gabriel García Márquez",
        "about": "A Colombian novelist, short-story writer, screenwriter, and journalist, known affectionately as Gabo throughout Latin America. He was awarded the 1982 Nobel Prize in Literature."
      },
      {
        "author": "Franz Kafka",
        "about": "A German-speaking Bohemian writer, widely regarded as one of the major figures of 20th-century literature. His work fuses elements of realism and the fantastic."
      },
      {
        "author": "Harper Lee",
        "about": "An American novelist best known for her 1960 novel 'To Kill a Mockingbird', which won the 1961 Pulitzer Prize."
      },
      {
        "author": "C.S. Lewis",
        "about": "A British writer and lay theologian. He is best known for his works of fiction, especially 'The Chronicles of Narnia' series."
      },
      {
        "author": "John Steinbeck",
        "about": "An American author and the 1962 Nobel Prize in Literature winner. He is known for his novels 'The Grapes of Wrath', 'Of Mice and Men', and 'East of Eden'."
      },
      {
        "author": "Emily Dickinson",
        "about": "An American poet known for her unique and unconventional style. Though she was not publicly recognized during her lifetime, she is now considered one of the most important figures in American poetry."
      },
      {
        "author": "Dante Alighieri",
        "about": "An Italian poet, writer, and philosopher best known for his epic poem 'The Divine Comedy', which is widely considered the preeminent work in Italian literature."
      },
      {
        "author": "Fyodor Dostoevsky",
        "about": "A Russian novelist, short story writer, essayist, and journalist. His literary works explore human psychology in the troubled political, social, and spiritual atmospheres of 19th-century Russia."
      },
      {
        "author": "James Joyce",
        "about": "An Irish novelist and poet, considered to be one of the most influential writers in the modernist avant-garde of the early 20th century."
      },
      {
        "author": "H.G. Wells",
        "about": "An English writer prolific in many genres, including the novel, history, politics, and social commentary. He is now best remembered for his science fiction novels."
      },
      {
        "author": "Stephen King",
        "about": "An American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. His books have sold more than 350 million copies."
      },
      {
        "author": "Toni Morrison",
        "about": "An American novelist, essayist, book editor, and college professor. Her novel 'Beloved' won the Pulitzer Prize for Fiction in 1988."
      },
      {
        "author": "J.D. Salinger",
        "about": "An American writer best known for his novel 'The Catcher in the Rye', a classic of adolescent literature."
      },
      {
        "author": "George R.R. Martin",
        "about": "An American novelist and short story writer, best known for his series of epic fantasy novels, 'A Song of Ice and Fire', which was adapted into the HBO series 'Game of Thrones'."
      },
      {
        "author": "Louisa May Alcott",
        "about": "An American novelist and poet best known as the author of the novel 'Little Women' and its sequels."
      }
  ];
  



const author = () =>{
    const getRandomAuthor = () => {
        const randomIndex = Math.floor(Math.random() * authord.length);
        return authord[randomIndex];
      };
    
      const [randomAuthor, setRandomAuthor] = useState(getRandomAuthor());
      
    return(
        <>
        <div className="page">
            <div className='bar'>
                HERE IS THE INFORMATION ABOUT SOME OF THE GREATEST AUTHORS OF ALL TIME
            </div>
            <div className='boxa'>
                <div className='about'>{randomAuthor.about}</div>
                <div className='linea'></div>
            </div>
            <div className='bottoma'>
                <div className='designa'>
                <h2 className='author-name'>{randomAuthor.author}</h2>

                </div>
            </div>
            <button onClick={() => setRandomAuthor(getRandomAuthor())} className="reloada">Next</button>

            
        </div>
        </>
    )
}
export default author;