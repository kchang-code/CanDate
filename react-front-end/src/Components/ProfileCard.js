import React, { useEffect, useState } from 'react';
import './ProfileCard.scss';
import useUserPage from '../hooks/useUserPage';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Button from '@material-ui/core/Button';
import ReactCardFlip from 'react-card-flip';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ProfileCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { tags, users } = props;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const title = props.name + ',' + props.age + ',' + props.address;

  let { id } = useParams();

  const handleClickMessage = () => {
    const newMessage = {
      from_user_id: Number(id),
      to_user_id: Number(props.id),
      content: `Hello! I am ${props.name}`,
    };
    console.log('load to message page');

    const timeElapsed = Date.now();
    //sending msg state
    let today = new Date(timeElapsed);

    let time = today.toLocaleString();
    axios
      .put('http://localhost:8080/api/users/:id/messages', {
        newMessage: { ...newMessage, creates_on: time },
      })
      .then((res) => {
        props.setMessages([...props.messages, ...res.data]);
      })
      .catch((err) => {
        console.log('Put error on new messages', err);
      });
  };
  return (
    <>
      <div className="ProfileCard">
        <Card
          // {users}
          class="card"
          elevation={3}
          onClick={() => {
            console.log('flip');
          }}
        >
          <CardHeader
            class="name"
            title={title}
            action={
              <>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('favorite');
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickMessage();
                  }}
                >
                  <ChatBubbleIcon />
                </IconButton>
              </>
            }
          />
          <CardMedia
            style={{ height: '300px', paddingTop: '2%' }}
            image={props.profile_photo}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Mutual interests:
            </Typography>
            {props.tag.map((item) => {
              return <Chip label={item} color="primary" />;
            })}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
