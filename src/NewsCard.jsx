import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Button
} from "@material-tailwind/react";
import React from "react";

function NewsCard(props) {
    let cardMeasure = "w-[370px] md:w-[450px]";
    const leftCardDivPos = "absolute top-14 left-40"
    const rightCardDivPos = "absolute top-14 left-72"
    const centerCardDivPos = "absolute top-0 left-56 hover:scale-105 duration-700"

    let divPos = ""

    if (props.position === "center") {
        divPos = centerCardDivPos;
    }

    if (props.position === "right") {
        divPos = rightCardDivPos;
        cardMeasure = "w-[370px] md:w-[450px] h-[500px]";
    }

    if (props.position === "left") {
        divPos = leftCardDivPos;
        cardMeasure = "w-[370px] md:w-[450px] h-[500px]";
    }

    if (props.position === "smallcard") {
        divPos = "flex flex-col justify-center items-center align-middle"
        cardMeasure = "w-[370px] md:w-[450px] h-[405px]";
    }
    return (
        <div className={divPos}>
            <Card className={cardMeasure}>
                <CardHeader floated={false} color="blue" className=" hidden md:flex md:h-56 align-middle justify-center items-center">
                    <h1>News image goes here</h1>
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        {props.story.title}
                    </Typography>
                    {props.story.details.length < 300 ? <p>{props.story.details}</p> : <p>{props.story.details.substring(0, 300)}...<Button variant="text" className="border-transparent text-red-500 hover:bg-white hover:text-blue-500 ">Read More </Button></p>}
                </CardBody>
                <CardFooter divider className="flex items-center justify-between py-3">
                    <div className="text-center">
                        <Typography className='font-bold'>Author</Typography>
                        <Avatar src={props.story.profilePic} alt="avatar" variant="circular" />
                        <Typography variant="small" color="gray" className="flex gap-1">
                            {props.story.author}
                        </Typography>
                    </div>
                    <div>
                        <Typography className='font-bold text-center' variant="small">Published:</Typography>
                        <Typography variant="small">{props.story.date}</Typography>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default NewsCard;