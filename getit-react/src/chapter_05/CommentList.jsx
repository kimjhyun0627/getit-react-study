import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "김진현",
        comment : "안녕하세요, 김진현입니다.",
    },
    {
        name : "최희정",
        comment : "안녕하세요, 최희정입니다.",
    },
    {
        name : "서경희",
        comment : "안녕하세요, 서경희입니다.",
    },
]

function CommentList (props) {
    return(
        <div>
            {comments.map((comment)=> {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;