import { useGetPostsQuery, useNewPostMutation } from './redux/api';
import PostCard from './components/PostCard';
import { FormEvent, useState } from 'react';

const App = () => {
	const { isLoading, data } = useGetPostsQuery('');
	const [title, setTitle] = useState<string>('');
	const [body, setBody] = useState<string>('');

	const [newPost] = useNewPostMutation();

	const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const post: Post = {
			title,
			body,
			userId: Math.random() * 1000,
			id: Math.random() * 1000,
		};
		newPost(post);
		setTitle('');
		setBody('');
	};

	return (
		<div>
			<h1>My App</h1>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					placeholder='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type='text'
					placeholder='body'
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<button type='submit'>Add</button>
			</form>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				data?.map((item: Post) => <PostCard key={item.id} {...item} />)
			)}
		</div>
	);
};

export default App;
