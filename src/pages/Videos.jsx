import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../componets/LoadingSpinner";
import TrashIcon from "../componets/TrashIcon";
import {
	List,
	ListItem,
	ListItemSuffix,
	Card,
	CardHeader,
	Typography,
	IconButton,
	Spinner,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CopyIcon from "../componets/CopyIcon";

function Videos() {
	const [loading, setLoading] = useState(true);
	const [videos, setVideos] = useState([]);
	const [deleteLoading, setDeleteLoading] = useState(false);

	useEffect(() => {
		async function fetchVideos() {
			setLoading(true);
			const response = await axios.get("https://aws-stream.onrender.com/list");
			setVideos(response.data);
			setLoading(false);
		}

		fetchVideos();
	}, []);

	async function handleDelete(video) {
		setDeleteLoading(true);
		try {
			const res = await axios.delete(
				`https://aws-stream.onrender.com/delete/${video}`
			);
			console.log(res);
			toast.success("Video Deleted");
			setVideos((prevVideos) => prevVideos.filter((v) => v !== video));
		} catch (error) {
			console.error("Error deleting video:", error);
			toast.error("Error deleting video");
		}
		setDeleteLoading(false);
	}

	async function handleCopy(video) {
		setDeleteLoading(true);
		try {
			const VideoName = video.split(".")[0];
			const videoURL = `${window.location.origin}/watch/${VideoName}/`;
			await navigator.clipboard.writeText(videoURL);
			toast.success("Copied to clipboard");
		} catch (error) {
			console.error("Error while copying:", error);
			toast.error("Error while copying");
		}
		setDeleteLoading(false);
	}

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : (
				<div className='flex justify-center items-center h-screen m-auto'>
					<Card className='w-96'>
						<CardHeader
							variant='gradient'
							color='gray'
							className='mb-4 grid h-28 place-items-center'>
							<Typography variant='h3' color='white'>
								Your Videos
							</Typography>
						</CardHeader>
						<List>
							{videos.map((video) => (
								<ListItem ripple={false} className='py-1 pr-1 pl-4' key={video}>
									<Link to={`/watch/${video.split(".")[0]}`}>
										{video.split(".")[0]}
									</Link>
									{deleteLoading ? (
										<Spinner className='h-4 w-4' />
									) : (
										<ListItemSuffix className='flex'>
											<IconButton
												onClick={() => handleDelete(video)}
												variant='text'
												color='blue-gray'>
												<TrashIcon />
											</IconButton>
											<IconButton
												onClick={() => handleCopy(video)}
												variant='text'
												color='blue-gray'>
												<CopyIcon />
											</IconButton>
										</ListItemSuffix>
									)}
								</ListItem>
							))}
						</List>
					</Card>
				</div>
			)}
		</>
	);
}

export default Videos;
