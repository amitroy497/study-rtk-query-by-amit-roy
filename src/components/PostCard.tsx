const PostCard = ({ title, body }: Post) => {
	return (
		<div>
			<h4>{title}</h4>
			<p>{body}</p>
		</div>
	);
};

export default PostCard;
