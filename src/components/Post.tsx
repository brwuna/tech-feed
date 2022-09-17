import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


//state = variáveis que eu quero que o componente monitore;

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostProps {
   author: Author;
   publishedAt: Date;
   content: Content[]; 
}

export function Post({ author, publishedAt, content }: PostProps) {
    
    const [comments, setComments] = useState([
        "Ótimo trabalho!"
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publisheDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,
    });

    const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Campo obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publisheDateFormatted} dateTime="2022-10-01 17:49:30">
                    {publisheDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if(item.type === 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    onChange={handleNewCommentChange}
                    value={newCommentText} 
                    placeholder='Deixe um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required>
                </textarea>

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}
                    >Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>

            <div>
                {/* <Comment
                    author="Lawrence Quinn"
                    content="Muito bom Amy, parabéns!! 👏👏"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                
                    <Comment 
                        author="Carolyn Griffin"
                        content="Amei!! 💜💜 "
                        src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    /> */}
            </div>
        </article>
    )
}