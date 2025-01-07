import { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Spinner,
	Button,
} from "@material-tailwind/react";
import { toast } from "react-hot-toast";
import axios from "axios";

export function Upload() {
	const [uploading, setUploading] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	async function handleUpload() {
		if (!selectedFile) {
			toast.error("Please select a file to upload.");
			return;
		}

		setUploading(true);
		const formData = new FormData();
		formData.append("file", selectedFile);

		try {
			const response = await axios.post(
				"https://aws-stream.onrender.com/upload",
				formData
			);
			toast.success("Video Uploaded Successfully.");
		} catch (error) {
			toast.error("An error occurred while uploading the video.");
		} finally {
			setUploading(false);
		}
	}

	return (
		<>
			<div className='flex justify-center items-center h-screen m-auto'>
				<Card className='w-96'>
					<CardHeader
						variant='gradient'
						color='gray'
						className='mb-4 grid h-28 place-items-center'>
						<Typography variant='h3' color='white'>
							Upload
						</Typography>
					</CardHeader>
					<CardBody className='flex flex-col gap-4'>
						<Input type='file' size='lg' onChange={handleFileChange} />
					</CardBody>
					<CardFooter className='pt-0'>
						<Button
							onClick={handleUpload}
							disabled={uploading}
							variant='gradient'
							fullWidth>
							{uploading ? <Spinner className='h-4 w-4' /> : "Upload"}
						</Button>
						<Typography variant='small' className='mt-6 flex justify-center'>
							Video Name will be your Video ID
						</Typography>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}

export default Upload;
